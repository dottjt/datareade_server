import SnooWrap, { Submission, Comment } from 'snoowrap';
import { RedditListingOptions } from '../types/utilTypes';
import logger from '../util/logger';

const redditClient = new SnooWrap({
  userAgent:  process.env.REDDIT_API_USER_AGENT as string,
  clientId: process.env.REDDIT_API_KEY as string,
  clientSecret: process.env.REDDIT_API_KEY_SECRET as string,
  refreshToken: process.env.REDDIT_API_REFRESH_TOKEN as string,
});

export default class RedditClient {
  client: SnooWrap;
  subreddit: string;

  constructor({ subreddit }) {
    this.client = redditClient;
    this.subreddit = subreddit;
  }

  async sendTextPost({ title, text }: { title: string; text: string; }): Promise<string> {
    try {
      const submissionHollow = this.client
        .getSubreddit(this.subreddit)
        // @ts-ignore
        .submitSelfpost({ title, text });

      logger.info(submissionHollow);
      return submissionHollow.name;
    } catch(error) {
      throw new Error(`${error} - redditClient sendTextPost`);
    }
  };

  async sendLinkPost({ title, url }: { title: string; url: string; }): Promise<string> {
    try {
      // @ts-ignore
      const submissionHollow = await this.client
        .getSubreddit(this.subreddit)
        // @ts-ignore
        .submitLink({ title, url })
      logger.info('submissionHollow.name', submissionHollow.name);
      return submissionHollow.name;
    } catch(error) {
      throw new Error(`${error} - redditClient - sendLinkPost`);
    }
  };

  async sendReply({ submissionName, text }: { submissionName: string; text: string; }): Promise<void> {
    try {
      // @ts-ignore
      await this.client
        .getSubmission(submissionName)
        // @ts-ignore
        .reply(text);
    } catch(error) {
      throw new Error(`${error} - redditClient - sendReply`);
    }
  };

  async setFlair({ submissionName, flair_template_id }: { submissionName: string; flair_template_id: string; }): Promise<void> {
    try {
      // @ts-ignore
      await this.client
        .getSubmission(submissionName)
        .selectFlair({ flair_template_id });
    } catch(error) {
      throw new Error(`${error} - redditClient - sendReply`);
    }
  };

  async sendImagePost(): Promise<void> {
    // NOTE: This is not possible
  };

  // https://github.com/not-an-aardvark/snoowrap/blob/master/src/objects/Submission.d.ts
  async getLatestSubredditPosts(options?: RedditListingOptions): Promise<Submission[]> {
    return this.client
      .getSubreddit(this.subreddit)
      .getNew(options)
  }

  // Submission classes
  async getLatestSubredditPostComments(options?: RedditListingOptions): Promise<Comment[]> {
    return this.client
      .getSubreddit(this.subreddit)
      .getNewComments(options)
  }

  async getSubmissionLatestComments(options?: RedditListingOptions): Promise<Comment[]> {
    return this.client
      .getSubreddit(this.subreddit)
      .getNewComments(options)
  }
    // .getSubmission('4j8p6d').expandReplies({limit: Infinity, depth: Infinity}).then(console.log)
}


// export default class Submission extends VoteableContent<Submission> {
//   clicked: boolean;
//   comments: Listing<Comment>;
//   /** Categories for original content, e.g. "comics", "drawing_and_painting" */
//   content_categories: string[] | null;
//   contest_mode: boolean;
//   domain: string;
//   hidden: boolean;
//   hide_score: boolean;
//   is_crosspostable: boolean;
//   is_meta: boolean;
//   is_original_content: boolean;
//   is_reddit_media_domain: boolean;
//   is_robot_indexable: boolean;
//   is_self: boolean;
//   is_video: boolean;
//   link_flair_background_color: string;
//   link_flair_css_class: string | null;
//   link_flair_richtext: RichTextFlair[];
//   link_flair_template_id: string | null;
//   link_flair_text: string | null;
//   link_flair_text_color: 'dark' | 'light';
//   link_flair_type: 'text' | 'richtext';
//   locked: boolean;
//   media: Media | null;
//   media_embed: MediaEmbed;
//   media_only: boolean;
//   num_comments: number;
//   num_crossposts: number;
//   over_18: boolean;
//   parent_whitelist_status: string;
//   pinned: boolean;
//   previous_visits: number[];
//   pwls: number;
//   post_hint: string;
//   preview: { enabled: boolean; images: ImagePreview[] };
//   quarantine: boolean;
//   removal_reason: string | null;
//   /** Same content as media, except HTTPS */
//   secure_media: Media | null;
//   secure_media_embed: SecureMediaEmbed;
//   selftext: string;
//   selftext_html: string | null;
//   spam?: boolean;
//   spoiler: boolean;
//   subreddit_subscribers: number;
//   suggested_sort: Sort | null;
//   thumbnail: string;
//   thumbnail_height?: number | null;
//   thumbnail_width?: number | null;
//   title: string;
//   upvote_ratio: number;
//   url: string;
//   view_count: number | null;
//   visited: boolean;
//   whitelist_status: string;
//   wls: number;


// export default class Comment extends VoteableContent<Comment> {
//   approved: boolean;
//   body_html: string;
//   body: string;
//   collapsed_reason: any; // ?
//   collapsed: boolean;
//   controversiality: number;
//   depth: number;
//   ignore_reports: boolean;
//   /** True if comment author is the same as the Submission author */
//   is_submitter: boolean;
//   link_id: string;
//   parent_id: string;
//   removed: boolean;
//   replies: Listing<Comment>;
//   score_hidden: boolean;
//   spam: boolean;
// }