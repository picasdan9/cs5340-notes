export interface Post {
  metadata: Metadata;
  markdownBody: string;
}

export interface Metadata {
  slug: string;
  title: string;
  tag: string;
  lectureNumber: number;
}
