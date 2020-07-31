import { Context, Next } from 'koa';
export declare const twitterConnect: (ctx: Context, next: Next) => Promise<void>;
export declare const twitterCallback: (ctx: Context, next: Next) => Promise<void>;
