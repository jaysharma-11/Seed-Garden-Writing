create table if not exists public.orders (
  id text primary key constraint orders_id_format check (id ~ '^SG-[0-9]{8}-[A-Z0-9]{4}$'),
  created_at timestamptz not null default now(),
  story_type text not null constraint orders_story_type_check check (
    story_type in (
      'Personal Request',
      'Faith Based (Prayer / Inspiration)',
      'Motivational',
      'Surprise Me'
    )
  ),
  page_length text not null constraint orders_page_length_check check (char_length(page_length) between 1 and 50),
  customer_name text not null constraint orders_customer_name_check check (char_length(trim(customer_name)) between 1 and 120),
  customer_email text not null constraint orders_customer_email_check check (char_length(trim(customer_email)) between 3 and 254),
  request text not null constraint orders_request_check check (char_length(trim(request)) between 1 and 10000),
  amount smallint not null constraint orders_amount_check check (amount in (7, 14, 21)),
  seed_count smallint not null constraint orders_seed_count_check check (seed_count in (1, 2, 3)),
  status text not null default 'pending' constraint orders_status_check check (status in ('pending', 'fulfilled')),
  fulfilled_at timestamptz,
  constraint orders_seed_price_check check (amount = seed_count * 7),
  constraint orders_fulfillment_check check (
    (status = 'pending' and fulfilled_at is null)
    or (status = 'fulfilled' and fulfilled_at is not null)
  )
);

create index if not exists orders_created_at_idx on public.orders (created_at desc);
create index if not exists orders_status_idx on public.orders (status);

alter table public.orders enable row level security;

revoke all on table public.orders from anon, authenticated;
grant insert (id, story_type, page_length, customer_name, customer_email, request, amount, seed_count)
  on table public.orders to anon;
grant select on table public.orders to authenticated;
grant update (status, fulfilled_at) on table public.orders to authenticated;

drop policy if exists "Anyone can submit a pending order" on public.orders;
create policy "Anyone can submit a pending order"
  on public.orders
  for insert
  to anon
  with check (status = 'pending' and fulfilled_at is null);

drop policy if exists "Admin can read orders" on public.orders;
create policy "Admin can read orders"
  on public.orders
  for select
  to authenticated
  using (lower(coalesce(auth.jwt() ->> 'email', '')) = 'jaymrin01@gmail.com');

drop policy if exists "Admin can fulfill orders" on public.orders;
create policy "Admin can fulfill orders"
  on public.orders
  for update
  to authenticated
  using (lower(coalesce(auth.jwt() ->> 'email', '')) = 'jaymrin01@gmail.com')
  with check (
    lower(coalesce(auth.jwt() ->> 'email', '')) = 'jaymrin01@gmail.com'
    and status in ('pending', 'fulfilled')
  );

comment on table public.orders is 'Personalized writing orders submitted through Seed Garden Writings.';
