import { Context, Next } from 'koa';
declare const example: (ctx: Context, next: Next) => Promise<void>;
export default example;
