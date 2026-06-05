const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const TARGET_GROUPS = [
    'Example Group 1',
    'Example Group 2'
];

const client = new Client({
    authStrategy: new LocalAuth(),

    puppeteer: {
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: false
    }
});

client.on('qr', (qr) => {
    console.log('Scan the QR code to log in...');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot is online!');
});

// Commands
client.on('message_create', async (message) => {

    const chat = await message.getChat();

    if (!chat.isGroup) return;

    if (!TARGET_GROUPS.includes(chat.name)) return;

    if (message.body === '!ping') {
        await message.reply('pong');
    }

});

// Welcome New Members
client.on('group_join', async (notification) => {

    try {

        const chat = await notification.getChat();

        if (!TARGET_GROUPS.includes(chat.name)) return;

        console.log(`New member joined ${chat.name}`);

        const userId = notification.recipientIds?.[0];

        const welcomeMessage =
`Welcome to the group!

━━━━━━━━━━━━━━
Automated reply by a bot`;

        if (userId) {
            await chat.sendMessage(
                `Welcome @${userId.split('@')[0]}!

━━━━━━━━━━━━━━
Automated reply by a bot`,
                {
                    mentions: [userId]
                }
            );
        } else {
            await chat.sendMessage(welcomeMessage);
        }

    } catch (err) {
        console.error(err);
    }

});

client.on('auth_failure', msg => {
    console.error('Authentication failed:', msg);
});

client.on('disconnected', reason => {
    console.log('Disconnected:', reason);
});

client.initialize();