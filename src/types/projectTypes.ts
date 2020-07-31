// Do I want to have proper Date Types? i.e. strings based on structure.

export type Link = {
  title: string;
  link: string;
};

export enum Status {
  Active = "active",
  Archive = "archive",
  Incomplete = "incomplete"
}

export type ProjectData = {
  slug: string;
  title: string;
  japanese_title: string;
  excerpt: string;
  description: string;
  featured_image: string;
  background_image: string;
  draft: boolean;
  status: Status;
  date: string;
  end_date: string;
  start_date: string;
  links: Link[];
  socials: Link[];
  tags: string[];
  categories: string[];
};
