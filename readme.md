# Banking Application

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technical Architecture](#technical-architecture)
6. [Data Structures](#data-structures)
7. [Core Functionality](#core-functionality)
8. [Security & Validation](#security--validation)
9. [Localization & Formatting](#localization--formatting)
10. [Future Roadmap](#future-roadmap)
11. [Contributing](#contributing)

---

## Overview

A fully functional banking application built with vanilla JavaScript, HTML5, and CSS3, designed to simulate real-world financial operations. Implements modern banking features including multi-currency transactions, goal-based savings, loan management, and detailed financial analytics.

---

## Features

### 1. **Multi-Account System**

- Pre-configured demo accounts with unique profiles
- Support for 3 currencies: USD, GBP, NGN
- Account types: Savings, Business, Checking

### 2. **Transaction Management**

- Full transaction history with timestamps
- Categorized transfers (Peer-to-Peer, Fees, Loan Payments)
- Automatic currency conversion for cross-border transfers:
  ```javascript
  // Example: USD to NGN conversion
  if (currentAccount.currency === "USD" && receiverAcc.currency === "NGN") {
    receiverAcc.movements.push(amount * 1500);
  }
  ```

### 3. **Financial Insights**

- Real-time balance calculations
- Income/expense breakdowns
- Graphical progress indicators:
  - Savings goal tracker
  - Daily transfer limit meter

### 4. **Loan System**

- Risk-based lending (max 70% of current balance)
- Interest rate variations per account (12-16% APR)
- Loan repayment tracking

### 5. **Savings Goals**

- Target-based savings mechanism
- Dedicated savings box with withdrawal capabilities
- Progress visualization with dynamic bar charts

### 6. **Security Features**

- PIN-protected transactions
- Transfer limits based on account tiers:
  ```javascript
  // Account tiers configuration
  tier: "Level 2",
  limit: 60000, // Daily transfer limit
  ```
- Session-based authentication

### 7. **User Experience**

- Dynamic UI theming with random card colors
- Context-aware date formatting:
  ```javascript
  // Smart date display logic
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  ```
- Responsive notifications system

---

## Installation

### Requirements

- Modern web browser (Chrome 90+, Firefox 88+)
- Local web server (for cross-origin compliance)

### Steps

1. Clone repository:
   ```bash
   git clone https://github.com/your-repo/banking-app.git
   ```
2. Launch via Live Server (VS Code extension recommended)
3. Access via `localhost:5500`

---

## Usage

### Demo Accounts

| Username | PIN  | Account Type | Currency | Balance  | Savings Target |
| -------- | ---- | ------------ | -------- | -------- | -------------- |
| LA       | 1111 | Savings      | USD      | $23,400  | $45,000        |
| ET       | 2222 | Business     | GBP      | £15,200  | £70,000        |
| NW       | 3333 | Checking     | NGN      | ₦850,000 | ₦30,000        |

### Key Operations

#### Transfer Funds

1. Enter recipient's username
2. Specify amount (minimum $5/£5/₦500)
3. Confirm with PIN
4. Track via transaction history

#### Request Loan

1. Navigate to Loan section
2. Enter requested amount (≤ 70% of balance)
3. Verify with PIN
4. Funds added to balance immediately

#### Savings Management

```javascript
// Savings deposit logic
if (amount <= currentAccount.target2) {
  currentAccount.savingsBox.push(amount);
  currentAccount.target2 -= amount;
}
```

---

## Technical Architecture

### 1. Data Model

```javascript
const accountTemplate = {
  // Core financials
  movements: [], // Transaction amounts
  movementsDates: [], // ISO 8601 timestamps
  savingsBox: [], // Savings transactions

  // Security
  pin: 1111, // 4-digit numeric PIN

  // Configuration
  currency: "USD", // ISO currency code
  locale: "en-US", // BCP 47 language tag
  interestRate: 0.13, // Annual percentage

  // Metadata
  accountNum: 5478454847, // 10-digit identifier
  cardNumber: "8778 4888 1448", // Masked display
};
```

### 2. Core Modules

- **Authentication System**: PIN-based session management
- **Transaction Engine**: Handles currency conversion and fee calculations
- **Reporting Module**: Generates financial summaries
- **UI Controller**: Manages DOM updates and user interactions

---

## Security & Validation

### Protection Mechanisms

1. Transfer validation:
   ```javascript
   if (
     amount > 5 &&
     currentAccount.balance >= amount &&
     receiverAcc?.username !== currentAccount.username
   ) // Prevent self-transfers
   ```
2. PIN verification for sensitive operations
3. Daily transfer limits enforcement
4. Negative balance prevention

### Error Handling

- Contextual error messages:
  ```javascript
  errorNofificaton("Invalid Amount", "Enter a valid Amount");
  ```
- Transaction rollback protection

---

## Localization & Formatting

### 1. Currency Handling

```javascript
// Formatting implementation
const formatNum = (locale, currency, value) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};
```

### 2. Date Presentation

- Relative time formatting ("2 days ago")
- Locale-specific date displays:
  ```javascript
  new Intl.DateTimeFormat(acc.locale).format(date);
  ```

---

## Future Roadmap

### Q3 2024

- [ ] Mobile app integration (React Native)
- [ ] Biometric authentication
- [ ] PDF statement generation

### Q4 2024

- [ ] Multi-language support
- [ ] Investment portfolio tracking
- [ ] API integration for real currency rates

---

## Contributing

### Guidelines

1. Fork repository
2. Create feature branch:
   ```bash
   git checkout -b feature/new-module
   ```
3. Submit pull request with detailed documentation

### Code Standards

- ES6+ JavaScript
- BEM CSS methodology
- Semantic HTML5

**License**: MIT  
**Maintainer**: Oseni Mayokun
**Support**: hello@mayorstudio.com

---

_Disclaimer: This is a demonstration application. No real financial transactions are processed._
