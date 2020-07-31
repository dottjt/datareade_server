import SnooWrap, { Submission, Comment } from 'snoowrap';
import { RedditListingOptions } from '../types/utilTypes';
export default class RedditClient {
    client: SnooWrap;
    subreddit: string;
    constructor({ subreddit }: {
        subreddit: any;
    });
    sendTextPost({ title, text }: {
        title: string;
        text: string;
    }): Promise<void>;
    sendLinkPost({ title, url }: {
        title: string;
        url: string;
    }): Promise<void>;
    sendImagePost(): Promise<void>;
    getLatestSubredditPosts(options?: RedditListingOptions): Promise<Submission[]>;
    getLatestSubredditPostComments(options?: RedditListingOptions): Promise<Comment[]>;
    getSubmissionLatestComments(options?: RedditListingOptions): Promise<Comment[]>;
}
