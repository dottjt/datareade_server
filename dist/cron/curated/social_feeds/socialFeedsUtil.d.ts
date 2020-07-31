import { SocialFeedType, SocialFeedData } from '../../../types/feedTypes';
import { SocialClients } from '../../../social/clientUtil';
declare const sendSocialFeedData: (item: SocialFeedData, socialType: SocialFeedType, socialClients: SocialClients) => Promise<void>;
export default sendSocialFeedData;
