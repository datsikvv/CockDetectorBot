const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const Extra = require('telegraf/extra');
//const PORT = process.env.PORT || 3000;

//drink
// const bot = new Telegraf("133***11625:AAGVh3ak****06QTnE5ewGAetuJQLZzM");

//test
 const bot = new Telegraf("451***766:AAH-oW67GgWnR****zzbENgitGZymh5Fk60");

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
bot.hears('Да', (ctx) => {
    return '/custom'
});

bot.command('oldschool', (ctx) => ctx.reply('Hello'));

bot.command('onetime', ({ reply }) =>
  reply('One time keyboard', Markup
    .keyboard(['/simple', '/inline', '/pyramid'])
    .oneTime()
    .resize()
    .extra()
  )
)

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

  bot.command('simple', (ctx) => {
    return ctx.replyWithHTML('Хочешь узнать кто ты по жизни, жми -"Да"', Extra.markup(
      Markup.keyboard(['Да', 'Нет, я петушок'])
    ))
  });

  bot.command('caption', (ctx) => {
    return ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' },
      Extra.load({ caption: 'Caption' })
        .markdown()
        .markup((m) =>
          m.inlineKeyboard([
            m.callbackButton('Plain', 'plain'),
            m.callbackButton('Italic', 'italic')
          ])
        )
    )
  })


bot.launch();
