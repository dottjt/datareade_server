export declare type Link = {
    title: string;
    link: string;
};
export declare type Segment = {
    title: string;
    gist: string;
    notes: string;
};
export declare type EpisodeData = {
    id: string;
    episode_number: number;
    slug: string;
    title: string;
    content: string;
    description: string;
    notes: string;
    segments: Segment[];
    castboxEmbedUrl: string;
    castboxLink: string;
    featured_image: string;
    background_image: string;
    giphy_still: string;
    giphy_medium: string;
    draft: boolean;
    date: string;
    publishDate: string;
    links: Link[];
    socials: Link[];
    tags: string[];
    categories: string[];
    curated_type: string;
};
