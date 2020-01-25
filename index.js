const Discord = require('discord.js');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

router.post('/hook', (ctx, next) => {
  console.log(ctx.body);
  next();
});

const hello = 2;


// response
app.use((ctx, next) => {
    ctx.body = 'What?';
    console.log('hello');
    next();
});
//  .use(router.routes());
 
app.listen(port, () => {
    console.log('aha');
});

/*

const client = new Discord.Client();

client.once('ready', () => {
	console.log('주인님. 코드 리뷰 봇이 준비되었습니다.');
});

client.on('message', message => {
	if (message.content === 'list') {
        let res = '현재 PR 목록은 다음과 같습니다, 주인님.';
		message.channel.send(res);
	}
});

*/

