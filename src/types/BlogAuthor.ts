import { IAuthorFields } from './generated/contentful';

export type BlogAuthor = Omit<IAuthorFields, 'image'> & {
	image: string;
};
