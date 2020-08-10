const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
//const PORT = process.env.PORT || 3000;

//CockDetectorBot
const bot = new Telegraf("1374393558:AAG_A5VGxPzO4EqFYL8X1PsrRY_NDRPKJjk");
bot.start((ctx) => ctx.reply('go away'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('hhhhhhhhhhh'));

bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.hears('good', (ctx) => ctx.reply('Im glad to hear this'));
bot.hears('привет', (ctx) => ctx.reply('здарова'));
bot.hears('Катя', (ctx) => ctx.reply('Самая красивая'));
bot.hears('xx', (ctx) => ctx.reply('xxx'));
bot.hears('Вова', (ctx) => ctx.reply('Отличный парень'));
bot.hears('вова', (ctx) => ctx.reply('Отличный парень'));
bot.hears('Денис', (ctx) => ctx.reply('Петушок'));
bot.hears('денис', (ctx) => ctx.reply('Петушок'));
bot.hears('Ростик', (ctx) => ctx.reply('Петушок'));
bot.hears('ростик', (ctx) => ctx.reply('Петушок'));

bot.command('oldschool', (ctx) => ctx.reply('Hello'))

bot.command('custom', ({ reply }) => {
    return reply('Custom buttons keyboard', Markup
      .keyboard([
        ['Денис', 'Вова', 'Ростик'], // Row1 with 3 buttons
      ])
      .oneTime()
      .resize()
      .extra()
    )
  })


bot.launch();