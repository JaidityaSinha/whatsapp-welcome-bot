# WhatsApp Welcome Bot

A WhatsApp automation bot built with Node.js and whatsapp-web.js that automatically welcomes new group members and supports custom commands.

## Features

* Automatically welcomes new group members
* Tags newly joined users
* Restricts bot activity to selected groups
* Persistent login using LocalAuth
* Supports custom commands such as `!ping`
* Simple and easy to customize

## Tech Stack

* Node.js
* whatsapp-web.js
* Puppeteer
* qrcode-terminal

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/whatsapp-welcome-bot.git
cd whatsapp-welcome-bot
```

### Install Dependencies

```bash
npm install
```

### Start the Bot

```bash
node index.js
```

### Login

Scan the QR code displayed in the terminal using WhatsApp:

Settings → Linked Devices → Link a Device

After successful login, the bot will display:

```text
Bot is online!
```

## Configuration

Modify the `TARGET_GROUPS` array inside `index.js`:

```javascript
const TARGET_GROUPS = [
    'Example Group 1',
    'Example Group 2'
];
```

Only these groups will be monitored by the bot.

## Commands

### Ping Command

Send:

```text
!ping
```

Response:

```text
pong
```

## Welcome Messages

When a new member joins a monitored group, the bot automatically sends a welcome message and attempts to mention the new member.

Example:

```text
Welcome @username!

━━━━━━━━━━━━━━
Automated reply by a bot
```

## Project Structure

```text
whatsapp-welcome-bot/
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Notes

* This project uses LocalAuth to persist WhatsApp sessions.
* Do not commit `.wwebjs_auth` to GitHub.
* Group names in the example configuration are placeholders and should be replaced with your own.

## Disclaimer

This project is intended for educational purposes and personal automation. Users are responsible for complying with WhatsApp's Terms of Service.
