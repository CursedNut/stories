import { del, get, post, put } from 'src/api/request';
import {
  GetStoriesParams,
  Story,
  StoryRequest
} from './stories.types';

export const getStories = (params: GetStoriesParams) =>
  get('story', { query: params });

export const getStory = (id: string) =>
  get(`story/${id}`);

export const createStory = (body: StoryRequest) =>
  post('story/', body);

export const updateStory = (id: string, body: StoryRequest) =>
  put(`story/${id}`, body);

export const deleteStory = (id: string) =>
  del(`story/${id}`);
