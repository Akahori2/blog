import { BlogAuthor } from './BlogAuthor';
import { IPostFields } from './generated/contentful';

export type BlogPost = Omit<IPostFields, 'author' | 'coverImage'> & {
	author: BlogAuthor;
	coverImage: string;
};
