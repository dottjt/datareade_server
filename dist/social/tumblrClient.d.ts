export default class TumblrClient {
    client: any;
    blogName: string;
    constructor({ blogName, token, token_secret, }: {
        blogName: any;
        token: any;
        token_secret: any;
    });
    sendTextPost({ title, body }: {
        title: string;
        body: string;
    }): Promise<void>;
    sendLinkPost({ title, url }: {
        title: string;
        url: string;
    }): Promise<void>;
    sendPhotoPost({ source }: {
        source: string;
    }): Promise<void>;
}
