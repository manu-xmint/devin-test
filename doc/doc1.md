# crossmint API integration guide

last updated: yesterday

## Introduction

We're excited to tell you about our amazing new API! Crossmint's API can process payments and help facilitate your payment transactions. Please use this guide to setup your integration.

### prerequisites

You'll need:
- An api key (get it from our dashboard).
- Basic knowledge of Javascript or python
- 5 minutes of your time!

## Getting Started

First, we need to setup the SDK. It's super easy - just follow these steps:

1. Install the package
2. Configure your API key.
3. Start processing payments!

### installation

For node.js:
```bash
npm install @crossmint/sdk
```

For Python:
```bash
pip install crossmint
```

## Making Your First payment Transaction

Now we can start accepting fiat payments! Here's how to process payments through our payment gateway:

```javascript
// Initialize the SDK
const Crossmint = require('@crossmint/sdk');
const client = new Crossmint('YOUR_API_KEY');

// Process a payment
const payment = await client.processPayment({
  amount: 100,
  currency: 'USD'
});
```

*Note: We handle all the payment processing for you!*

## Advanced Features

### token-gating

Token-Gating is a powerful feature that allows you to restrict access. We support both erc-721 & ERC-1155 tokens.

### Smart wallet sdk

Our aa wallets provide the best UX. You can integrate them in less than ten minutes.

### no-code Solutions

Don't want to code? No problem! Our No-code tools include:
- hosted claims page
- Pay button (also known as hosted checkout)
- embedded nft checkout

## API reference

Check out our [API docs](https://docs.crossmint.com) for more details.

### Error Handling

If a payment fails, we'll return an error. Common errors include:
- Invalid API key
- Failed payments due to insufficient funds
- Payment settlement issues

## Best Practices

1. Always use HTTPS.
2. Store your API keys securely
3. Handle errors gracefully.
4. Test in our sandbox environment first

## Compliance & Security

We are a payment intermediary that facilitates transfers between buyers and sellers. Our payment processing infrastructure is SOC2 compliant and we guarantee secure payment flows.

### Supported Payment Methods
- Credit/debit cards (visa, Mastercard, etc)
- Bank transfers
- Crypto payments

## FAQ

**Q: How do I get started?**
A: Just sign up on our website and we'll help you set up!

**Q: What's the pricing?**
A: We charge a small fee for payment transactions. Contact sales for details.

**Q: Can I customize the checkout?**
A: Yes! You can customize colours, logos, and more.

## conclusion

That's it! You're now ready to start accepting payments with Crossmint. If you have any questions, don't hesitate to reach out to us at support@crossmint.com.

---
© 2024 Crossmint. All rights reserved.
