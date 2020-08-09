const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const Extra = require('telegraf/extra');
const Composer = require('telegraf/composer');
//const PORT = process.env.PORT || 3000;


// const bot = new Telegraf("1332711625:AAGVh3akaKlM7qu06QTnE5ewGAetuJQLZzM");
// bot.start((ctx) => ctx.reply('go away'));
// bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on('sticker', (ctx) => ctx.reply('hhhhhhhhhhh'));

// bot.hears('hi', (ctx) => ctx.reply('Hey there'));
// bot.hears('good', (ctx) => ctx.reply('Im glad to hear this'));
// bot.hears('привет', (ctx) => ctx.reply('здарова'));
// bot.hears('Катя', (ctx) => ctx.reply('Самая красивая'));
// bot.hears('xx', (ctx) => ctx.reply('xxx'));

const bot = new Composer()
bot.start((ctx) => ctx.replyWithDice())
bot.settings(async (ctx) => {
  await ctx.setMyCommands([
    {
      command: '/foo',
      description: 'foo description'
    },
    {
      command: '/bar',
      description: 'bar description'
    },
    {
      command: '/baz',
      description: 'baz description'
    }
  ])
  return ctx.reply('Ok')
})
bot.help(async (ctx) => {
  const commands = await ctx.getMyCommands()
  const info = commands.reduce((acc, val) => `${acc}/${val.command} - ${val.description}\n`, '')
  return ctx.reply(info)
})


bot.command('oldschool', (ctx) => ctx.reply('Hello'))

bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.chat.id, ctx.message, Extra.markup(keyboard)))



const keyboard = Markup.inlineKeyboard([
    Markup.urlButton('❤️', 'http://telegraf.js.org'),
    Markup.callbackButton('Delete', 'delete')
  ])
  bot.action('delete', ({ deleteMessage }) => deleteMessage())
bot.on('dice', (ctx) => ctx.reply(`Value: ${ctx.message.dice.value}`))

//bot.launch();
module.exports = bot