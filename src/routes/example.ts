import { Context, Next } from 'koa';

const example = async (ctx: Context, next: Next) => {
  // const body = ctx.request.body;
  // const usernames = body?.data?.usernames;

  // for (const username of usernames) {
  //   const user = await validateUser(username, false);
  // }

  // ctx.body = { data: { users: usersList } };
}

export default example;
