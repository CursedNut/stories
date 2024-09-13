import { QueryParams } from "src/utils/queryParams";

export interface Story {
  id: string;
  author?: string;
  title: string;
  description?: string;
  content: string;
  publishDate: string | Date;
  picture?: string;
}

export type StoryRequest = Omit<Story, 'id' & 'publishDate'>;

export interface GetStoriesParams extends QueryParams {
  name?: string;
  sorted?: 'true' | 'false';
}
