import Koa from "koa"; // 导入koa
import { logging } from "./logger/logging";

// const myLogger = logging.getLogger("core.module");
// const myLogger2 = logging.getLogger("core");
const myLogger3 = logging.getLogger("core");

const app = new Koa(); // 新建一个Koa对象

app.use(async (ctx) => {
  // 截获所有路由,都指向此函数
  console.log(1);
//   myLogger.info(`This is my log message 1`);
//   myLogger2.info(`This is my log message 2`);
  myLogger3.info(`This is my log message 3`);
  myLogger3.error(`This is my log message 4`);
//   myLogger3.debug(`This is my log message 3 3`);
  console.log(2);
  ctx.body = "Hello Koa and TS,I am keysking2."; // 向浏览器返回数据
});

app.listen(3000); // 监听8080端口

console.log("Server running on http://localhost:3000");
