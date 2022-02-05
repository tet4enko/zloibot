const { Telegraf } = require('telegraf');
const fs = require('fs');

const zlo = fs.readFileSync('./zlo.txt', 'utf-8').split('\n');

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

const randomIntFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

bot.on('text', (ctx) => {
    const rdm = randomIntFromInterval(0, 100);

    if (rdm <= 5) {
        ctx.reply(zlo[randomIntFromInterval(0, zlo.length - 1)]);
    }
});

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
