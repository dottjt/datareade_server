declare class TwitterClient {
    client: any;
    constructor({ access_token_key, access_token_secret, }: {
        access_token_key: any;
        access_token_secret: any;
    });
    sendTextPost({ text }: {
        text: string;
    }): Promise<string>;
    sendPhotoPost({ imageUrl }: {
        imageUrl: string;
    }): Promise<void>;
}
export default TwitterClient;
