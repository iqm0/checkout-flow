# Checkout Flow

A modern, secure payment processing implementation using Astro and Checkout.com's Web Components.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Payment Processing**: [Checkout.com Flow Web Component](https://www.checkout.com/docs/payments/accept-payments/accept-a-payment-on-your-website)
- **Styling**: Native CSS with modern features
- **Environment**: Server-side rendered with client islands

## 🏗️ Project Structure

```text
/
├── src/
│   ├── components/
│   │   ├── Checkout.astro       # Main payment flow component
│   │   ├── Appearance.astro     # Checkout styling configuration
│   │   └── Failure.astro        # Payment failure handling
│   ├── layouts/
│   │   └── Layout.astro         # Base layout wrapper
│   └── pages/
│       ├── index.astro          # Entry point
│       ├── success.astro        # Success page with payment details
│       ├── failure.astro        # Failure page with error details
│       └── create-payment-session.ts # Backend payment session endpoint
```

## ⚡ Features

Secure payment processing
Real-time payment validation
Detailed success/failure flows
Responsive design
Error handling and user feedback
3DS support
Multiple payment method support

## 🚀 Getting Started

Clone the repository
Install dependencies:

```bash

npm install

```

Set up environment variables:

```bash

PUBLIC_KEY=your_checkout_public_key
SECRET_KEY=your_checkout_secret_key
SITE_URL=your_site_url

```

Run the development server:

```bash

npm run dev

```

## 💳 Payment Flow

Customer enters payment details
Backend creates payment session
Checkout.com Web Components handle payment processing
Success/Failure handling with detailed feedback
Transaction details displayed on completion

## 🔒 Security

Server-side payment session creation
Environment variable protection
CORS handling
Request throttling
Secure key management

## 🎨 Customization

Modify Appearance.astro to customize the checkout flow styling to match your brand.
