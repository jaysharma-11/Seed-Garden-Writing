# Seed Garden Writings — Static Website

A fixed-screen three-column writing website. Each column scrolls independently while the page stays fitted to the viewport:

- Left: 185 unique British, American, Chinese, and Japanese customer reviews with a dynamically calculated overall rating
- Middle: 21 interactive flip books across Stories, Writings & Documentaries, and Faith-Based Stories
- Right: story type, page length, customer details, request, amount, and checkout
- Admin: calendar-based local order dashboard with fulfillment controls

## Files

- `index.html` — website structure
- `about.html` — About Us page
- `terms.html` — Terms & Conditions page
- `privacy.html` — Privacy Policy page
- `delivery-fulfillment-policy.html` — digital delivery and fulfillment policy
- `styles.css` — full responsive styling
- `script.js` — book flips, form validation, Supabase order storage, admin login, calendar, and fulfillment workflow
- `supabase-config.js` — public Supabase project URL and anon key
- `supabase/migrations/` — database schema, row-level security, and admin policies

## Run locally

Open `index.html` in a browser, or serve the folder with any local web server.

Example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Payment setup

Orders are stored in Supabase and the admin portal uses Supabase Auth. The included checkout still **does not collect money**. Before publishing paid checkout, use a payment provider such as Stripe Checkout, PayPal, Razorpay, or another supported gateway and verify successful payments on a trusted server.

## Supabase setup

The browser connection is configured in `supabase-config.js`. The anon key in that file is intentionally public; never place a service-role key in frontend code.

The initial migration has been applied to the linked project. For future database changes, add a migration under `supabase/migrations/` and deploy it with `supabase db push`. Row-level security allows anonymous order submission while restricting order reads and fulfillment updates to the authorized admin email.

Recommended production flow:

1. Customer fills in name, email, amount, and request.
2. Your backend creates a payment session/order with your provider.
3. Customer completes payment on the provider's secure checkout.
4. Your backend verifies the payment webhook.
5. Save the writing request and send the customer an order confirmation.

Do not place private API keys or payment secrets directly in `script.js`.
