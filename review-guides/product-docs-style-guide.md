# Product and Docs style guide

**Last updated:** Aug 7, 2024 - by Conor - overhauled and combined with product guide, github readme guides

**Purpose:** source of truth for writing conventions in our product and external documentation

**For initial writing of a doc, please utilize this document.**

**For reviewing documentation, please use the checklist:**
[Comprehensive Documentation Review Checklist](#)

---

## Proposed new rules

- [ ] Where to use screenshots VS not
- [ ] Standard "pre-requirements" section for guides, where we can say if it requires certain billing plan, scope, etc
- [ ] What languages we need code snippets on
- [ ] When do guides reference to API docs vs not
- [x] Casing for titles

## 1. Tone and Voice

• **Voice:** Professional, Informative, and User-Friendly.
• **Tone:** Instructional and Informative.
  ○ Example: "Crossmint's battle-tested payments infrastructure can help you increase your sales up to 50%, for free, in 10 minutes of integration time."

## 2. Grammar and Syntax

### Principles

*In priority order*
1. **Clarity** - it is clear what is being communicated
2. **Simplicity** - easy to understand what is being communicated
3. **Exhaustive** - all the relevant information is contained
4. **Consistent** - the methods of communication are consistent (indentation, bullet points, numbering, etc)

Example: "Web3 native users can pay with fiat and send the NFT directly to their own wallet, while newcomers will have a new wallet created instantly which they can access via social login."

### 2.1 Standard:
• **Language:** American English should be the standard for all product surfaces.
• **Example:** Use "color" instead of "colour", "organization" instead of "organisation".

### 2.2 Sentence Structure:
• **Clarity:** Maintain clarity and simplicity in sentence structure to ensure ease of understanding.
• **Active Voice:** Use active voice to create clear, concise sentences.
• **Example:**
  • Use "You can create a new wallet" instead of "A new wallet can be created".
  • Use "Crossmint processes the payment" instead of "The payment is processed by Crossmint".

### 2.3 Tense Consistency:
• Maintain a consistent tense throughout the text.
• Example: If you start in the present tense, continue in the present tense.
• Documentation is "timeless". Avoid saying things like "now you can do X", or "no longer need to do Y"

### 2.4 Punctuation:
• **Commas:** Ensure correct usage of commas to avoid run-on sentences or fragments.
• **Example:**
  ■ Correct: "With Crossmint, you can process payments easily."
  ■ Incorrect: "With Crossmint you can, process payments easily."
• **Ampersands:** Avoid using ampersands "&" in sentences, instead using the word "and"
• Prefer ampersands in navigation titles.
• **Periods:** All sentences and paragraphs should end with a period. Everything else should not.
• Bulleted lists in documentation should NOT include a period at the end. (although this guide does)
• In product UI, texts containing a single sentence do not end in periods
  ■ For example: titles, subtitles, labels, or one liner descriptions

### 2.5 Capitalization:
• **Titles:** should be title cased (all words start with capital letter) exception: (a, an, and, the, of, etc)
  • Or words that make more sense lowercase: thirdweb, localhost, ngrok, etc
• **Proper Nouns:** Capitalize the names of specific products, features, or services.
  • Example:
    ■ Use "Fiat Payments", "Cross-chain Payments" instead of "fiat payments", "cross-chain payments".

### 2.6 Acronyms and Abbreviations:
• **Introduction:** Introduce the full form of an acronym or abbreviation when it's first mentioned.
• **Example:**
  • Use "Non-Fungible Token (NFT)" on first mention, then "NFT" thereafter.

### 2.7 Spelling:
• **Consistency:** Maintain consistency in spelling, especially with technical terms.
• **Example:**
  • Use "decentralized" consistently instead of switching between "decentralized" and "decentralised".

### 2.8 Numerals:
• **Text:** Write out numbers one through nine in text, and use numerals for 10 and above.
• **Example:**
  • Correct: "Increase your sales up to 50%."
  • Incorrect: "Increase your sales up to fifty percent."

### 2.9 Technical Terms:
• **Consistency:** Use technical terms consistently and ensure they are accurate.
• **Example:**
  • Use "smart contract" consistently instead of alternating with "blockchain contract".

### 2.10 Contractions:
• **Formality:** Avoid using contractions to maintain a formal tone.
• **Example:**
  • Use "do not" instead of "don't", "cannot" instead of "can't".

### 2.11 Names:
- Refer to Crossmint by name, or as a third party. Never refer to it as "we", "us" or "ours".
- Refer to the developer as "you".
- Naming: avoid assigning proper nouns to small features / modalities of products.
  - They should be reserved for top level products or categories (e.g. Wallets, maybe Smart Wallets, Minting API, Console, etc).
  - For everything else, use descriptive terms instead.
    - For example: "Collections created via Crossmint" instead of "Crossing-Created Collections"

### 2.12 Bolding:
- Bolding should be used sparingly in the documentation to provide clever focus on important information
  - Example: You want to offer **truly non-custodial** wallets to your users with the best possible UX while ensuring you remain highly compliant with industry leading asset security.
  - Rule of thumb - no more than 5% of your document should be bolded

### 2.13 Italicized:
- Italics should not be used in external documentation

### 2.14. Links
- Links that point to pages, within or outside the docs, should open in a new tab.

### 2.xx Other:
• Please avoid the use of the word "please"

## 3. Spelling and word choices

### 3.0 Documentation Word Choices

**setup or set up**
When one word it is a noun, e.g. "Nice setup". When two words it is action, e.g. "Help me set up".

**login or log in**
When one word it is a noun, e.g. "Go to the login screen". When two words it is action, e.g. "Then log in".

### 3.1 Wallets
Token Gating / Token-gating / non-hyphenated version
Smart Wallet SDK / AA Wallets / consistent naming

### 3.2 Minting
Crossmint Collection / Managed Collection / consistent naming
No Code / No-code, No code / never hyphenated, both letters capital
Claims Page / No-Code Claims, Hosted Claims Page / consistent naming

### 3.3 NFT Checkout
Pay Button / hosted checkout, popup checkout / consistent naming
Embedded NFT Checkout / embedded NFT checkout / capitalize every first letter

### 3.4 VC's
Filippos Lymperopoulos to fill

### 3.5 Brands / Miscellaneous
thirdweb / Thirdweb / no capital starting letter, ever

## 4. Information hierarchy

This section covers the general organization of the docs.

### Landing Page
TODO

### External documentation
docs.crossmint.com

Divided into
1. **Introduction:** General outline of what the products do, with visual entry points to some of our core functionality and rest of the pages
2. **Overviews:** provides a birds eye view of the product. Typically has more of a marketing lens
3. **Quickstarts:** opinionated one pager guide to get someone to "Hello World" in under 5 min.
   3.1. Goals: get them excited about the API, and get them to intuitively understand the different parts it has
4. **Guides:** for developers who are already using Crossmint. Should have minimal marketing and upsell lens
   4.1. Guides are structured by product lines: payments, minting, wallets. There's also a generic section for cross-product topics such as billing and quotas.
        4.1.1. Payments guides is further divided into no-code, hosted, embedded, headless
5. **Advanced guides:** for edge cases, for advanced users of Crossmint. 0 marketing spin in these sections
6. **API Reference:** for the most advanced users of Crossmint. 0 marketing spin in this section
   6.1. Generated automatically by mintlify
   6.2. Internally AKA reference docs
7. **Changelog:** used for detailed overview of important changes we're making, that may have backwards compatibility implications

### Blog
- Primarily for marketing purposes
- Used to announce big new features

## 5. Compliance

Original doc: Marketing Worry-Free Buzzwords

### 5.01 Words, phrases and terminology to avoid:
• Avoid using terms like: "payment processing," "payment gateway," or suggesting we are processing or transmitting funds.
• Avoid suggesting:
  ○ we are processing or transmitting funds
  ○ Payments or funds flow through you
  ○ You facilitate transfers between buyer and seller
  ○ You enable or power payments
• Avoid saying that "we accept fiat payments" or that "users can pay in fiat" when describing the NFT Checkout service. This wording suggests that we are directly receiving and processing fiat currency payments, which could imply we are engaged in money transmission.
  ○ Avoid discussing the specifics of fiat transactions, payment flows, or anything that suggests you are directly handling the fiat side of the transaction as the merchant of record.
• Other buzzwords to avoid:
  ○ "Process payments"
  ○ "Payment transactions"
  ○ "Facilitate payments"
  ○ "Payment flows"
  ○ "Payment intermediary"
  ○ "Payment settlement"
  ○ "Payment guarantee"
  ○ "Failed payments"

### 5.02 Words, phrases and terminology that are "safe" to use:
• Focus messaging on "checkout" and "purchasing" NFTs.
• Other safe terms include:
  ○ "NFT checkout"
  ○ "Buy NFTs"
  ○ "Purchase NFTs"
  ○ "Pay for NFTs"
  ○ "NFT shopping cart"
  ○ "Allow buyers to purchase NFTs with credit/debit cards"
  ○ "Support major credit card checkout for NFT buying"
  ○ "Buy NFTs instantly using Visa, Mastercard, etc."
  ○ "Buy Now"
  ○ "Complete order"
  ○ "Confirm purchase"
  ○ "Process order"
  ○ "Payment methods"
  ○ "Credit/debit cards"
  ○ "Stripe Card networks" (e.g. Visa, Mastercard)
  ○ "Secure checkout"
  ○ "Easy payments"
  ○ "Seamless buying experience"
