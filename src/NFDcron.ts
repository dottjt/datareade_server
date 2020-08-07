import cron from 'node-cron';

import {
  twitterPlug,
  cronOptions,
  subredditPlug,
  nfdArticlePlug,
  askTheReadeAQuestion,
  youtubePlug,
  discordPlug,
  nfdPracticePlug,
  facebookPlug,
  mobileAppPlug,
  websitePlug,
  podcastPlug,
  nfdGuidePlug,
  donatePlug,
  summaryPlug,
  freePlug,
  hoveringPlug
} from './NFDcronUtil';

const setupNFDCron = async () => {

  // Monday
  cron.schedule('30 0 * * MON', async () => { await freePlug() }, cronOptions);
  cron.schedule('30 9 * * MON', async () => { await twitterPlug() }, cronOptions);
  cron.schedule('30 16 * * MON', async () => { await subredditPlug() }, cronOptions);

  // Tuesday
  // cron.schedule('30 0 * * TUE', async () => { await }, cronOptions);
  cron.schedule('30 9 * * TUE', async () => { await nfdPracticePlug() }, cronOptions);
  cron.schedule('30 16 * * TUE', async () => { await nfdGuidePlug() }, cronOptions);

  // Wednesday
  // cron.schedule('30 0 * * WED', async () => { await }, cronOptions);
  cron.schedule('30 9 * * WED', async () => { await askTheReadeAQuestion() }, cronOptions);
  cron.schedule('30 16 * * WED', async () => { await youtubePlug() }, cronOptions);

  // Thursday
  cron.schedule('30 0 * * THU', async () => { await hoveringPlug() }, cronOptions);
  cron.schedule('30 9 * * THU', async () => { await nfdArticlePlug() }, cronOptions);
  cron.schedule('30 16 * * THU', async () => { await discordPlug() }, cronOptions);

  // Friday
  // cron.schedule('30 0 * * FRI', async () => { await }, cronOptions);
  cron.schedule('30 9 * * FRI', async () => { await summaryPlug() }, cronOptions);
  cron.schedule('30 16 * * FRI', async () => { await facebookPlug() }, cronOptions);

  // Saturday
  // cron.schedule('30 0 * * SAT', async () => { await }, cronOptions);
  cron.schedule('30 9 * * SAT', async () => { await mobileAppPlug() }, cronOptions);
  cron.schedule('30 16 * * SAT', async () => { await donatePlug() }, cronOptions);

  // Sunday
  // cron.schedule('30 0 * * SUN', async () => { await }, cronOptions);
  cron.schedule('30 9 * * SUN', async () => { await websitePlug() }, cronOptions);
  cron.schedule('30 16 * * SUN', async () => { await podcastPlug() }, cronOptions);

};

export default setupNFDCron;