import { v4 as uuidv4 } from 'uuid';
import knexFeed from '../util/dbConnectors/knexFeed';

export function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const selectRandomPost = async (posts: any[], post_type: string): Promise<any> => {
  const allPostedItems = await knexFeed('track_posts').where({ post_type }).select('*');
  let nonPostedItemsArray: any[] =
    posts.filter(
      (item: any): boolean => !allPostedItems.find(dbFeedItem => dbFeedItem.title === item.title)
    );

  console.log('nonPostedItemsArray.length', nonPostedItemsArray.length);

  if (nonPostedItemsArray.length === 0) {
    await knexFeed('track_posts').where({ post_type }).del();

    nonPostedItemsArray = posts;
  }

  const selectedArticle = shuffleArray(nonPostedItemsArray)[0];

  await knexFeed('track_posts')
    .insert({
      id: uuidv4(),
      title: selectedArticle.title,
      post_type: 'nfd_posts'
    })

  return selectedArticle;
}
