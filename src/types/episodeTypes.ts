// Do I want to have proper Date Types? i.e. strings based on structure.

export type Link = {
  title: string;
  link: string;
};

export type Segment = {
  title: string;
  gist: string;
  notes: string;
};

export type EpisodeData = {
  id: string;
  episode_number: number;
  slug: string;
  title: string;
  content: string;
  description: string;
  notes: string;
  segments: Segment[];
  castboxEmbedUrl: string;
  castboxLink: string,
  featured_image: string;
  background_image: string;
  giphy_still: string,
  giphy_medium: string,
  draft: boolean;
  date: string;
  publishDate: string; // when it publishes on social media
  socialPublishDate: string; // when it publishes on the website.
  links: Link[];
  socials: Link[];
  tags: string[];
  categories: string[];
  curated_type: string;
};
