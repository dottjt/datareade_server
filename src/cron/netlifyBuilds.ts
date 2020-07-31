import axios from 'axios';
import logger from '../util/logger';
import { toMelbourneDateString } from '../util/serverDates';

export const buildTNDDWebsite = async () => {
  try {
    const response = await axios.post(process.env.NETLIFY_BUILD_WEBHOOK_URL_TNDD as string, {});
    const date = toMelbourneDateString(new Date());
    logger.info(`${date} - buildTNDDWebsite success - ${response.status}`)
  } catch(error) {
    logger.info(`cake - ${error}`)
  }
};

export const buildTWDWebsite = async () => {
  const response = await axios.post(process.env.NETLIFY_BUILD_WEBHOOK_URL_TWD as string, {});
  const date = toMelbourneDateString(new Date());
  logger.info(`${date} - buildTWDWebsite success - ${response.status}`)
}
