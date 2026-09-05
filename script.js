const BOOKS = [
  {
    category: "Stories",
    title: "The Lantern at Low Tide",
    icon: "🏮",
    cover: "assets/books/the-lantern-at-low-tide.jpg",
    description: "A keeper of an old harbor light learns what it means to guide someone home.",
    rating: 4.8,
    readers: 1120,
    story: "Every evening, Mira lit the harbor lantern for ships she could not see. One stormy night, a single bell answered from the fog. She held the flame steady until a small boat appeared—and her long-lost brother stepped onto the shore."
  },
  {
    category: "Stories",
    title: "Paper Boats in June",
    icon: "⛵",
    cover: "assets/books/paper-boats-in-june.jpg",
    description: "Two childhood friends send promises downstream and meet them again years later.",
    rating: 4.6,
    readers: 784,
    story: "Noah and Lina wrote their bravest wishes on paper boats. Twenty summers later, Lina found one caught beneath the old bridge: “Come back when you are ready.” She looked up. Noah was waiting on the opposite bank, holding the other boat."
  },
  {
    category: "Stories",
    title: "The Last Blue Bicycle",
    icon: "🚲",
    cover: "assets/books/the-last-blue-bicycle.jpg",
    description: "A forgotten bicycle carries three generations through one changing neighborhood.",
    rating: 4.7,
    readers: 953,
    story: "The blue bicycle first carried Ada to school, then her son to his first job. When the neighborhood changed, her granddaughter restored its silver bell. Its first bright ring brought every old story rushing back down the familiar street."
  },
  {
    category: "Stories",
    title: "A Map of Small Kindnesses",
    icon: "🗺️",
    cover: "assets/books/a-map-of-small-kindnesses.jpg",
    description: "A traveler marks every unexpected kindness until the map leads her home.",
    rating: 4.9,
    readers: 1187,
    story: "Inez drew a gold star wherever a stranger helped her: a shared umbrella, a warm meal, a patient direction. When her journey ended, the stars formed a path back to her own door, where she finally understood how kindness had carried her."
  },
  {
    category: "Stories",
    title: "The Window Garden",
    icon: "🌿",
    cover: "assets/books/the-window-garden.jpg",
    description: "A tiny city garden quietly reconnects neighbors who had stopped speaking.",
    rating: 4.5,
    readers: 648,
    story: "Leela planted basil in one cracked cup. A neighbor added mint, another thyme, and soon the sill became a garden. People paused to water it, then stayed to talk. By spring, the building had learned one another’s names."
  },
  {
    category: "Stories",
    title: "When the Clockmaker Smiled",
    icon: "🕰️",
    cover: "assets/books/when-the-clockmaker-smiled.jpg",
    description: "A precise old clockmaker discovers one moment that cannot be measured.",
    rating: 4.3,
    readers: 421,
    story: "Mr. Vale repaired every clock except the silent one above his workbench. On his birthday, his granddaughter filled the shop with laughter. The clock suddenly chimed, though its hands never moved. Some moments, he realized, were meant to remain timeless."
  },
  {
    category: "Stories",
    title: "The Orchard After Rain",
    icon: "🍎",
    cover: "assets/books/the-orchard-after-rain.jpg",
    description: "A family returns to a storm-damaged orchard and finds a new beginning.",
    rating: 4.4,
    readers: 536,
    story: "The storm left branches scattered across the orchard, but one young tree still stood. The family worked until dusk, saving every root they could. The next morning, sunlight caught a single red apple—and nobody spoke of leaving again."
  },
  {
    category: "Writings & Documentaries",
    title: "Hands That Built the Morning",
    icon: "👐",
    cover: "assets/books/hands-that-built-the-morning.jpg",
    description: "Portraits of early-shift workers whose quiet labor wakes a city.",
    rating: 4.8,
    readers: 1044,
    story: "Before sunrise, bakers knead dough, nurses change shifts, and drivers trace empty avenues. The city believes morning simply arrives. This documentary remembers the hands that prepare it—one loaf, one patient, and one safe journey at a time."
  },
  {
    category: "Writings & Documentaries",
    title: "Letters from the Monsoon",
    icon: "🌧️",
    cover: "assets/books/letters-from-the-monsoon.jpg",
    description: "A lyrical record of families, streets, and rituals shaped by seasonal rain.",
    rating: 4.7,
    readers: 896,
    story: "Rain changes the grammar of a city. Doors become meeting places, tea becomes an invitation, and every roof finds its own rhythm. Across seven monsoons, these letters preserve the voices that rise whenever the clouds return."
  },
  {
    category: "Writings & Documentaries",
    title: "The Memory of Rivers",
    icon: "🏞️",
    cover: "assets/books/the-memory-of-rivers.jpg",
    description: "Communities along one river tell how water shapes work, identity, and belonging.",
    rating: 4.9,
    readers: 1200,
    story: "At its source, the river is a whisper. Downstream it becomes a livelihood, a boundary, a prayer, and a childhood memory. Eleven communities tell its story, reminding us that a river carries more than water to the sea."
  },
  {
    category: "Writings & Documentaries",
    title: "Notes from a Quiet Classroom",
    icon: "🏫",
    cover: "assets/books/notes-from-a-quiet-classroom.jpg",
    description: "An intimate essay about teachers who transform lives without applause.",
    rating: 4.6,
    readers: 732,
    story: "The greatest lessons were rarely written on the board. They arrived as extra patience, a book quietly lent, or a question asked at the right time. Years later, former students still carried those invisible lessons into the world."
  },
  {
    category: "Writings & Documentaries",
    title: "Thirty Steps to the Sea",
    icon: "🌊",
    cover: "assets/books/thirty-steps-to-the-sea.jpg",
    description: "A coastal community records the changing distance between home and water.",
    rating: 4.5,
    readers: 667,
    story: "Grandmother remembered when the sea was thirty steps from the gate. Now it was twelve. Each family measured the distance differently—in lost trees, moved walls, and packed suitcases—while working together to protect what remained."
  },
  {
    category: "Writings & Documentaries",
    title: "The Language of Clay",
    icon: "🏺",
    cover: "assets/books/the-language-of-clay.jpg",
    description: "Four potters reveal how tradition survives through touch and repetition.",
    rating: 4.4,
    readers: 512,
    story: "Clay remembers pressure. Under four pairs of hands it became a cup, a lamp, a ceremonial bowl, and a child’s first uneven pot. The shapes differed, but each carried the same lesson: tradition survives by being remade."
  },
  {
    category: "Writings & Documentaries",
    title: "Midnight Radio Diaries",
    icon: "📻",
    cover: "assets/books/midnight-radio-diaries.jpg",
    description: "Stories from callers who found companionship across late-night airwaves.",
    rating: 4.8,
    readers: 1086,
    story: "After midnight, strangers called to dedicate songs, confess worries, and send greetings across sleeping towns. The host rarely gave advice. He simply listened, proving that sometimes a distant voice is enough to make the dark feel less lonely."
  },
  {
    category: "Writings & Documentaries",
    title: "Seeds Beneath Concrete",
    icon: "🌱",
    cover: "assets/books/seeds-beneath-concrete.jpg",
    description: "A hopeful documentary about community gardens reclaiming overlooked spaces.",
    rating: 4.7,
    readers: 941,
    story: "The first seed was planted through a crack in an abandoned lot. Within a year, tomatoes climbed old fencing and children learned the names of herbs. The neighborhood did not erase its concrete; it taught life to grow through it."
  },
  {
    category: "Writings & Documentaries",
    title: "Portraits of the Night Train",
    icon: "🚆",
    cover: "assets/books/portraits-of-the-night-train.jpg",
    description: "Twenty-one passengers share what they are leaving and what they hope to find.",
    rating: 4.2,
    readers: 300,
    story: "In every compartment, someone was between one life and another. A student guarded an acceptance letter; a father carried a tiny red sweater. By dawn, the passengers separated, each taking a fragment of the others’ courage."
  },
  {
    category: "Writings & Documentaries",
    title: "A Kitchen Full of History",
    icon: "🥣",
    cover: "assets/books/a-kitchen-full-of-history.jpg",
    description: "Recipes and recollections preserve the journeys of five families.",
    rating: 4.6,
    readers: 825,
    story: "Measurements changed across generations: a handful, a pinch, enough until it smells right. The recipes were never only instructions. They were maps of migration, resilience, and celebration, served warm at tables far from where they began."
  },
  {
    category: "Faith-Based Stories",
    title: "A Prayer Between Seasons",
    icon: "🙏",
    cover: "assets/books/a-prayer-between-seasons.jpg",
    description: "A gentle story of trusting the quiet space between loss and renewal.",
    rating: 4.9,
    readers: 1174,
    story: "Elena prayed for an answer, but winter remained silent. She kept tending the bare garden anyway. When the first green shoot appeared, she understood: the answer had not been a sudden sign, but the strength to keep showing up."
  },
  {
    category: "Faith-Based Stories",
    title: "The Chapel of Open Doors",
    icon: "🕊️",
    cover: "assets/books/the-chapel-of-open-doors.jpg",
    description: "A small chapel becomes a refuge through one caretaker’s steady welcome.",
    rating: 4.8,
    readers: 1032,
    story: "Jonas never asked visitors why they came. He lit a candle, opened the door, and made tea. Over time, people arrived carrying grief and left carrying one another’s names. The chapel’s truest sermon was its welcome."
  },
  {
    category: "Faith-Based Stories",
    title: "Grace in the Waiting Room",
    icon: "✨",
    cover: "assets/books/grace-in-the-waiting-room.jpg",
    description: "Strangers discover comfort and courage during an uncertain night.",
    rating: 4.7,
    readers: 906,
    story: "Nobody in the waiting room knew what morning would bring. Still, they shared chargers, coffee, and quiet prayers. When good news finally came for one family, everyone stood to celebrate. Hope had made neighbors of them."
  },
  {
    category: "Faith-Based Stories",
    title: "The Mustard Seed Promise",
    icon: "🌾",
    cover: "assets/books/the-mustard-seed-promise.jpg",
    description: "One small act of faith changes the course of an entire family.",
    rating: 4.6,
    readers: 758,
    story: "Ruth kept a mustard seed in her pocket through every difficult appointment. Years later, she planted it beside the family’s new home. Its yellow flowers were tiny, but they reminded everyone that the smallest faith can shelter a future."
  }
];

const BRITISH_FIRST_NAMES = [
  "Amelia", "Oliver", "Isla", "George", "Florence", "Arthur", "Poppy", "Harry", "Imogen", "Jack",
  "Beatrice", "Alfie", "Matilda", "Freddie", "Evie", "Henry", "Harriet", "Theo", "Alice", "Edward",
  "Rosie", "William", "Sophie", "Thomas", "Charlotte", "Oscar", "Elsie", "James", "Lucy", "Archie", "Eleanor"
];

const BRITISH_LAST_NAMES = [
  "Thompson", "Davies", "Clarke", "Bennett", "Hughes", "Fletcher", "Harrison", "Whitaker", "Collins", "Parker",
  "Reynolds", "Sutton", "Spencer", "Ellis", "Barker", "Chapman", "Turner", "Wallace", "Foster", "Mitchell",
  "Cooper", "Morgan", "Bailey", "Richardson", "Wood", "Dawson", "Booth", "Palmer", "Holmes", "Webb", "Carter"
];

const AMERICAN_FIRST_NAMES = [
  "Ava", "Liam", "Harper", "Mason", "Madison", "Ethan", "Brooklyn", "Noah", "Riley", "Jackson",
  "Abigail", "Logan", "Savannah", "Caleb", "Kennedy", "Wyatt", "Avery", "Owen", "Natalie", "Grayson",
  "Zoe", "Carter", "Addison", "Luke", "Hailey", "Hudson", "Piper", "Lincoln", "Sadie", "Miles", "Audrey"
];

const AMERICAN_LAST_NAMES = [
  "Anderson", "Miller", "Johnson", "Williams", "Brown", "Wilson", "Moore", "Taylor", "Martin", "Jackson",
  "White", "Harris", "Robinson", "Clark", "Lewis", "Walker", "Hall", "Allen", "Young", "Hernandez",
  "King", "Wright", "Scott", "Green", "Adams", "Baker", "Nelson", "Hill", "Campbell", "Rivera", "Brooks"
];

const REVIEW_OPENINGS = [
  "The story captured our family memory with warmth and an honest, natural voice.",
  "I was surprised by how personal and carefully observed the final writing felt.",
  "Every detail I shared found a meaningful place without making the piece feel crowded.",
  "The words were gentle, vivid, and much closer to my own feelings than I expected.",
  "This turned a difficult memory into something thoughtful that I can keep and revisit.",
  "The finished piece sounded sincere and specific rather than like a standard template.",
  "I loved the quiet details and the way the ending brought the whole story together.",
  "The writing gave shape to something I had struggled to express for a long time.",
  "It arrived with exactly the reflective tone I requested and felt beautifully balanced.",
  "The story was clear, moving, and full of small touches that made it unmistakably ours.",
  "I appreciated how respectfully the writer handled every name, memory, and emotion."
];

const REVIEW_ENDINGS = [
  "I read it twice that evening and sent a copy to my sister.",
  "It now sits inside the journal I return to every Sunday morning.",
  "The recipient recognised the moment immediately and was genuinely touched.",
  "I only needed one tiny correction, and the final result felt complete.",
  "It made a thoughtful birthday gift and started a lovely family conversation.",
  "The prayerful tone was comforting without ever becoming too formal.",
  "I printed it for our mantel and still notice a new line each time I read it.",
  "The pacing was calm, the imagery was lovely, and the message stayed clear.",
  "It felt like a small keepsake made with patience rather than a rushed order.",
  "The piece brought both tears and smiles, which was exactly what I had hoped for.",
  "I would happily request another story for a future family occasion.",
  "The result felt intimate, polished, and easy to share with the people I love."
];

const REVIEW_TYPES = [
  "Personal story", "Faith-based writing", "Motivational piece", "Family keepsake",
  "Birthday story", "Prayer writing", "Anniversary gift", "Memory tribute"
];

const REVIEW_RATINGS = [
  ...Array(1).fill(3.8),
  ...Array(1).fill(3.9),
  ...Array(1).fill(4.0),
  ...Array(1).fill(4.1),
  ...Array(1).fill(4.2),
  ...Array(2).fill(4.3),
  ...Array(3).fill(4.4),
  ...Array(4).fill(4.5),
  ...Array(8).fill(4.6),
  ...Array(12).fill(4.7),
  ...Array(11).fill(4.8),
  ...Array(78).fill(4.9)
];

function reviewerName(index, firstNames, lastNames) {
  const nameIndex = index % firstNames.length;
  const cycle = Math.floor(index / firstNames.length);
  const lastNameIndex = (nameIndex + cycle * 11) % lastNames.length;
  return `${firstNames[nameIndex]} ${lastNames[lastNameIndex]}`;
}

const REVIEWS = Array.from({ length: 123 }, (_, index) => {
  const british = index % 2 === 0;
  const regionalIndex = Math.floor(index / 2);
  const name = british
    ? reviewerName(regionalIndex, BRITISH_FIRST_NAMES, BRITISH_LAST_NAMES)
    : reviewerName(regionalIndex, AMERICAN_FIRST_NAMES, AMERICAN_LAST_NAMES);
  const opening = REVIEW_OPENINGS[index % REVIEW_OPENINGS.length];
  const ending = REVIEW_ENDINGS[Math.floor(index / REVIEW_OPENINGS.length)];

  return {
    name,
    country: british ? "United Kingdom" : "United States",
    type: REVIEW_TYPES[index % REVIEW_TYPES.length],
    rating: REVIEW_RATINGS[(index * 37) % REVIEW_RATINGS.length],
    text: `${opening} ${ending}`
  };
});

const ADMIN_EMAIL = "jaymrin01@gmail.com";
const supabaseConfig = window.SEED_GARDEN_SUPABASE;
const supabaseClient = window.supabase && supabaseConfig
  ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    })
  : null;

const state = {
  calendarCursor: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  selectedDate: null,
  lastFocusedElement: null,
  orders: []
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderReviews() {
  const list = document.querySelector("#review-list");
  const overallRating = REVIEWS.reduce((total, review) => total + review.rating, 0) / REVIEWS.length;
  const average = overallRating.toFixed(2);
  const summary = document.querySelector(".rating-summary");

  document.querySelector("#review-average").textContent = average;
  summary.setAttribute("aria-label", `Average rating ${average} out of 5`);
  list.innerHTML = REVIEWS.map((review, index) => {
    const initials = review.name.split(" ").map((part) => part[0]).join("");
    return `
      <article class="review-card${index === 0 ? " active-review" : ""}">
        <div class="review-head">
          <div class="avatar" aria-hidden="true">${escapeHtml(initials)}</div>
          <div>
            <strong>${escapeHtml(review.name)}</strong>
            <span>${escapeHtml(review.type)} • ${escapeHtml(review.country)}</span>
          </div>
          <span class="mini-stars" aria-label="${review.rating.toFixed(1)} out of 5 stars">★ ${review.rating.toFixed(1)}</span>
        </div>
        <p>“${escapeHtml(review.text)}”</p>
      </article>`;
  }).join("");
}

function renderLibrary() {
  const catalog = document.querySelector("#library-catalog");
  const categories = ["Stories", "Writings & Documentaries", "Faith-Based Stories"];

  catalog.innerHTML = categories.map((category) => {
    const books = BOOKS.filter((book) => book.category === category);
    const cards = books.map((book, index) => {
      const tone = (BOOKS.indexOf(book) + index) % 7;
      const frontCover = book.cover
        ? `<span class="book-face book-cover image-cover"><img src="${escapeHtml(book.cover)}" alt="" loading="lazy" decoding="async" /></span>`
        : `<span class="book-face book-cover tone-${tone}">
            <span class="book-mark" aria-hidden="true">${book.icon}</span>
            <h4>${escapeHtml(book.title)}</h4>
            <small>${escapeHtml(category)}</small>
          </span>`;
      return `
        <article class="book-item">
          <button class="flip-book" type="button" aria-pressed="false" aria-label="Flip ${escapeHtml(book.title)} to read the story">
            <span class="book-card-inner">
              ${frontCover}
              <span class="book-face book-back-cover">
                <h4>${escapeHtml(book.title)}</h4>
                <p>${escapeHtml(book.story)}</p>
                <small>Tap to return to the cover</small>
              </span>
            </span>
          </button>
          <div class="book-meta">
            <h4>${escapeHtml(book.title)}</h4>
            <p>${escapeHtml(book.description)}</p>
            <div class="book-rating">
              <strong>★ ${book.rating.toFixed(1)}</strong>
              <span>${book.readers.toLocaleString()} readers</span>
            </div>
          </div>
        </article>`;
    }).join("");

    return `
      <section class="library-group" aria-labelledby="${category.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}">
        <div class="library-group-title">
          <h3 id="${category.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}">${escapeHtml(category)}</h3>
          <span class="library-count">${books.length} books</span>
        </div>
        <div class="book-list">${cards}</div>
      </section>`;
  }).join("");

  catalog.addEventListener("click", (event) => {
    const book = event.target.closest(".flip-book");
    if (!book) return;
    const flipped = book.classList.toggle("is-flipped");
    const title = book.closest(".book-item")?.querySelector(".book-meta h4")?.textContent || "book";
    book.setAttribute("aria-pressed", String(flipped));
    book.setAttribute("aria-label", flipped ? "Return to the book cover" : `Flip ${title} to read the story`);
  });
}

function setChoice(button, selector, input) {
  document.querySelectorAll(selector).forEach((choice) => {
    const selected = choice === button;
    choice.classList.toggle("active", selected);
    choice.setAttribute("aria-pressed", String(selected));
  });
  document.querySelector(input).value = button.dataset.value;
}

function clearError(field) {
  const error = document.querySelector(`[data-error-for="${field}"]`);
  if (error) error.textContent = "";
}

function showError(field, message) {
  const error = document.querySelector(`[data-error-for="${field}"]`);
  if (error) error.textContent = message;
}

function configureOrderForm() {
  const form = document.querySelector("#payment-form");
  const customWrap = document.querySelector("#custom-pages-wrap");
  const customInput = document.querySelector("#custom-pages");

  document.querySelectorAll(".type-choice").forEach((button) => {
    button.addEventListener("click", () => setChoice(button, ".type-choice", "#story-type"));
  });

  document.querySelectorAll(".page-choice").forEach((button) => {
    button.addEventListener("click", () => {
      setChoice(button, ".page-choice", "#page-length");
      const isCustom = button.dataset.value === "Custom";
      customWrap.hidden = !isCustom;
      customInput.required = isCustom;
      clearError("pages");
      if (isCustom) customInput.focus();
    });
  });

  document.querySelectorAll(".amount-choice").forEach((button) => {
    button.addEventListener("click", () => {
      setChoice(button, ".amount-choice", "#amount");
      document.querySelector("#seed-count").value = button.dataset.seeds;
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    ["name", "email", "request", "pages"].forEach(clearError);

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const request = document.querySelector("#request").value.trim();
    const storyType = document.querySelector("#story-type").value;
    let pageLength = document.querySelector("#page-length").value;
    const amount = Number(document.querySelector("#amount").value);
    const seedCount = Number(document.querySelector("#seed-count").value);
    let valid = true;

    if (!name) {
      showError("name", "Please enter your name.");
      valid = false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      showError("email", "Please enter a valid email address.");
      valid = false;
    }
    if (!request) {
      showError("request", "Please share a few details for your request.");
      valid = false;
    }
    if (pageLength === "Custom") {
      const pages = Number(customInput.value);
      if (!Number.isInteger(pages) || pages < 1 || pages > 100) {
        showError("pages", "Enter a page count from 1 to 100.");
        valid = false;
      } else {
        pageLength = `${pages} custom page${pages === 1 ? "" : "s"}`;
      }
    }

    if (!valid) {
      const firstError = form.querySelector(".error:not(:empty)");
      firstError?.closest(".field-group, .choice-section")?.querySelector("input, textarea, button")?.focus();
      return;
    }

    const now = new Date();
    const order = {
      id: createOrderId(now),
      createdAt: now.toISOString(),
      storyType,
      pageLength,
      name,
      email,
      request,
      amount,
      seedCount,
      status: "pending"
    };

    const message = document.querySelector("#form-message");
    const submitButton = form.querySelector(".pay-button");
    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    message.className = "form-message success";
    message.textContent = "Saving your request…";

    try {
      await createOrder(order);
      message.className = "form-message success";
      message.textContent = `Request ${order.id} has been received. Thank you, ${name}!`;
      form.reset();
      resetChoices();

      if (!document.querySelector("#admin-dashboard").hidden) {
        await renderAdmin();
      }
    } catch (error) {
      console.error("Unable to create order", error);
      message.className = "form-message error-state";
      message.textContent = "We could not save your request. Please try again in a moment.";
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
    }
  });
}

function resetChoices() {
  const type = document.querySelector('.type-choice[data-value="Personal Request"]');
  const pages = document.querySelector('.page-choice[data-value="1–3 pages (Short)"]');
  const amount = document.querySelector('.amount-choice[data-value="14"]');
  setChoice(type, ".type-choice", "#story-type");
  setChoice(pages, ".page-choice", "#page-length");
  setChoice(amount, ".amount-choice", "#amount");
  document.querySelector("#seed-count").value = "2";
  document.querySelector("#custom-pages-wrap").hidden = true;
  document.querySelector("#custom-pages").required = false;
}

function createOrderId(date) {
  const stamp = [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("");
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SG-${stamp}-${random}`;
}

function requireSupabase() {
  if (!supabaseClient) throw new Error("Supabase is not configured.");
  return supabaseClient;
}

async function createOrder(order) {
  const client = requireSupabase();
  const { error } = await client.from("orders").insert({
    id: order.id,
    story_type: order.storyType,
    page_length: order.pageLength,
    customer_name: order.name,
    customer_email: order.email,
    request: order.request,
    amount: order.amount,
    seed_count: order.seedCount
  });

  if (error) throw error;
}

function mapOrder(row) {
  return {
    id: row.id,
    createdAt: row.created_at,
    storyType: row.story_type,
    pageLength: row.page_length,
    name: row.customer_name,
    email: row.customer_email,
    request: row.request,
    amount: Number(row.amount),
    seedCount: Number(row.seed_count),
    status: row.status,
    fulfilledAt: row.fulfilled_at
  };
}

async function loadOrders() {
  const client = requireSupabase();
  const { data, error } = await client
    .from("orders")
    .select("id, created_at, story_type, page_length, customer_name, customer_email, request, amount, seed_count, status, fulfilled_at")
    .order("created_at", { ascending: false });

  if (error) throw error;
  state.orders = (data || []).map(mapOrder);
  return state.orders;
}

async function fulfillOrder(orderId) {
  const client = requireSupabase();
  const { error } = await client
    .from("orders")
    .update({ status: "fulfilled", fulfilled_at: new Date().toISOString() })
    .eq("id", orderId);

  if (error) throw error;
}

function configureAdminPortal() {
  const portal = document.querySelector("#admin-portal");
  const loginForm = document.querySelector("#admin-login-form");

  document.querySelector("#admin-open").addEventListener("click", openAdmin);
  document.querySelectorAll("[data-admin-close]").forEach((button) => button.addEventListener("click", closeAdmin));

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.querySelector("#admin-email").value.trim().toLowerCase();
    const password = document.querySelector("#admin-password").value;
    const error = document.querySelector("#admin-login-error");
    const loginButton = loginForm.querySelector(".admin-login-button");
    error.textContent = "";
    loginButton.disabled = true;
    loginButton.textContent = "Signing in…";

    try {
      const client = requireSupabase();
      const { data, error: authError } = await client.auth.signInWithPassword({ email, password });

      if (authError) throw authError;
      if (data.user?.email?.toLowerCase() !== ADMIN_EMAIL) {
        await client.auth.signOut();
        error.textContent = "This account does not have admin access.";
        return;
      }

      loginForm.reset();
      await showDashboard();
    } catch (authError) {
      console.error("Admin sign-in failed", authError);
      error.textContent = "The email or password is incorrect, or the backend is unavailable.";
    } finally {
      loginButton.disabled = false;
      loginButton.textContent = "Open dashboard";
    }
  });

  document.querySelector("#admin-signout").addEventListener("click", async () => {
    if (supabaseClient) await supabaseClient.auth.signOut();
    state.orders = [];
    showLogin();
  });

  document.querySelector("#calendar-prev").addEventListener("click", () => {
    state.calendarCursor = new Date(state.calendarCursor.getFullYear(), state.calendarCursor.getMonth() - 1, 1);
    renderCalendar();
  });

  document.querySelector("#calendar-next").addEventListener("click", () => {
    state.calendarCursor = new Date(state.calendarCursor.getFullYear(), state.calendarCursor.getMonth() + 1, 1);
    renderCalendar();
  });

  document.querySelector("#calendar-clear").addEventListener("click", () => {
    state.selectedDate = null;
    renderAdmin();
  });

  document.querySelector("#calendar-grid").addEventListener("click", (event) => {
    const day = event.target.closest(".calendar-day");
    if (!day) return;
    state.selectedDate = day.dataset.date;
    renderAdmin();
  });

  document.querySelector("#orders-list").addEventListener("click", async (event) => {
    const button = event.target.closest(".fulfill-button");
    if (!button || button.disabled) return;
    button.disabled = true;
    button.textContent = "Updating…";

    try {
      await fulfillOrder(button.dataset.orderId);
      await renderAdmin();
    } catch (error) {
      console.error("Unable to fulfill order", error);
      button.disabled = false;
      button.textContent = "Try again";
      document.querySelector("#orders-filter").textContent = "The order could not be updated. Please try again.";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !portal.hidden) closeAdmin();
  });
}

async function openAdmin() {
  state.lastFocusedElement = document.activeElement;
  document.querySelector("#admin-portal").hidden = false;

  try {
    const { data } = supabaseClient
      ? await supabaseClient.auth.getSession()
      : { data: { session: null } };
    const authorized = data.session?.user?.email?.toLowerCase() === ADMIN_EMAIL;
    if (authorized) {
      await showDashboard();
      return;
    }
  } catch (error) {
    console.error("Unable to restore admin session", error);
  }

  showLogin();
}

function closeAdmin() {
  document.querySelector("#admin-portal").hidden = true;
  state.lastFocusedElement?.focus();
}

function showLogin() {
  document.querySelector("#admin-login").hidden = false;
  document.querySelector("#admin-dashboard").hidden = true;
  requestAnimationFrame(() => document.querySelector("#admin-email").focus());
}

async function showDashboard() {
  document.querySelector("#admin-login").hidden = true;
  document.querySelector("#admin-dashboard").hidden = false;
  await renderAdmin();
  requestAnimationFrame(() => document.querySelector("#admin-signout").focus());
}

function localDateKey(isoDate) {
  const date = new Date(isoDate);
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}

async function renderAdmin() {
  if (document.querySelector("#admin-dashboard").hidden) return;
  const list = document.querySelector("#orders-list");
  list.innerHTML = '<div class="empty-orders"><span aria-hidden="true">🌱</span><strong>Loading orders…</strong><p>Connecting to the Seed Garden backend.</p></div>';

  let orders;
  try {
    orders = await loadOrders();
  } catch (error) {
    console.error("Unable to load orders", error);
    state.orders = [];
    document.querySelector("#order-count").textContent = "0";
    document.querySelector("#pending-count").textContent = "0";
    document.querySelector("#fulfilled-count").textContent = "0";
    renderCalendar();
    document.querySelector("#orders-filter").textContent = "Unable to connect to the order database.";
    list.innerHTML = '<div class="empty-orders"><span aria-hidden="true">⚠️</span><strong>Orders are unavailable</strong><p>Check the Supabase connection and database setup.</p></div>';
    return;
  }

  document.querySelector("#order-count").textContent = orders.length;
  document.querySelector("#pending-count").textContent = orders.filter((order) => order.status !== "fulfilled").length;
  document.querySelector("#fulfilled-count").textContent = orders.filter((order) => order.status === "fulfilled").length;
  renderCalendar();
  renderOrders(orders);
}

function renderCalendar() {
  const grid = document.querySelector("#calendar-grid");
  const year = state.calendarCursor.getFullYear();
  const month = state.calendarCursor.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const orderDates = new Set(state.orders.map((order) => localDateKey(order.createdAt)));
  const today = localDateKey(new Date().toISOString());

  document.querySelector("#calendar-title").textContent = state.calendarCursor.toLocaleDateString(undefined, { month: "long", year: "numeric" });
  grid.replaceChildren();

  for (let index = 0; index < firstDay; index += 1) {
    const spacer = document.createElement("span");
    spacer.className = "calendar-spacer";
    grid.append(spacer);
  }

  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber += 1) {
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-day";
    button.dataset.date = dateKey;
    button.textContent = dayNumber;
    button.setAttribute("aria-label", new Date(year, month, dayNumber).toLocaleDateString(undefined, { dateStyle: "long" }));
    button.classList.toggle("has-orders", orderDates.has(dateKey));
    button.classList.toggle("is-today", dateKey === today);
    button.classList.toggle("is-selected", dateKey === state.selectedDate);
    grid.append(button);
  }

  document.querySelector("#calendar-clear").hidden = !state.selectedDate;
}

function renderOrders(allOrders) {
  const list = document.querySelector("#orders-list");
  const filtered = state.selectedDate
    ? allOrders.filter((order) => localDateKey(order.createdAt) === state.selectedDate)
    : allOrders;
  const orders = [...filtered].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const filterLabel = document.querySelector("#orders-filter");

  filterLabel.textContent = state.selectedDate
    ? `Orders placed on ${new Date(`${state.selectedDate}T12:00:00`).toLocaleDateString(undefined, { dateStyle: "long" })}`
    : "Showing all orders";

  if (!orders.length) {
    list.innerHTML = `<div class="empty-orders"><span aria-hidden="true">🗂️</span><strong>No orders here yet</strong><p>${state.selectedDate ? "Choose another date or show all orders." : "New customer requests will appear here."}</p></div>`;
    return;
  }

  list.replaceChildren(...orders.map(createOrderCard));
}

function createOrderCard(order) {
  const card = document.createElement("article");
  const fulfilled = order.status === "fulfilled";
  card.className = `order-card${fulfilled ? " is-fulfilled" : ""}`;

  const header = document.createElement("div");
  header.className = "order-card-head";
  const identity = document.createElement("div");
  const id = document.createElement("strong");
  id.textContent = order.id;
  const time = document.createElement("time");
  time.dateTime = order.createdAt;
  time.textContent = new Date(order.createdAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
  identity.append(id, time);
  const status = document.createElement("span");
  status.className = `status-pill${fulfilled ? " fulfilled" : ""}`;
  status.textContent = fulfilled ? "Fulfilled" : "Pending";
  header.append(identity, status);

  const details = document.createElement("div");
  details.className = "order-details";
  [
    ["Name", order.name],
    ["Email", order.email],
    ["Type", order.storyType],
    ["Pages", order.pageLength],
    ["Seeds", `${order.seedCount || Math.max(1, Number(order.amount) / 7)} seed${(order.seedCount || Number(order.amount) / 7) === 1 ? "" : "s"}`],
    ["Amount", `$${order.amount}`],
    ["Request", order.request, true]
  ].forEach(([label, value, full]) => {
    const detail = document.createElement("div");
    detail.className = `order-detail${full ? " full" : ""}`;
    const small = document.createElement("small");
    small.textContent = label;
    const content = document.createElement("span");
    content.textContent = value;
    detail.append(small, content);
    details.append(detail);
  });

  const button = document.createElement("button");
  button.type = "button";
  button.className = "fulfill-button";
  button.dataset.orderId = order.id;
  button.disabled = fulfilled;
  button.textContent = fulfilled ? "✓ Order fulfilled" : "Mark as fulfilled";

  card.append(header, details, button);
  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  renderReviews();
  renderLibrary();
  configureOrderForm();
  configureAdminPortal();
  document.querySelector("#year").textContent = new Date().getFullYear();
});
