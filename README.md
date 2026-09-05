# Seed Garden Writings — Static Website

A fixed-screen three-column writing website. Each column scrolls independently while the page stays fitted to the viewport:

- Left: customer reviews and trust signals
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
- `script.js` — book flips, form validation, local order storage, admin login, calendar, and fulfillment workflow

## Run locally

Open `index.html` in a browser, or serve the folder with any local web server.

Example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Payment setup

The included checkout is intentionally a front-end demo and **does not collect money**. Orders and the admin session are stored only in the current browser. Before publishing, connect the form to a backend, add server-side authentication, and use a payment provider such as Stripe Checkout, PayPal, Razorpay, or another supported gateway.

Recommended production flow:

1. Customer fills in name, email, amount, and request.
2. Your backend creates a payment session/order with your provider.
3. Customer completes payment on the provider's secure checkout.
4. Your backend verifies the payment webhook.
5. Save the writing request and send the customer an order confirmation.

Do not place private API keys or payment secrets directly in `script.js`.
