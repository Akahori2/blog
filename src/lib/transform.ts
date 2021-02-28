import { IPostFields } from '@blog/types/generated/contentful';
import { BlogPost } from '@blog/types/BlogPost';
import { Asset, EntryCollection } from 'contentful';

export const transformEntriesIntoBlogPosts = (entries: EntryCollection<IPostFields>): BlogPost[] => {
	const blogPosts = entries.items
		// fieldsを利用
		.map((item) => item.fields)
		// authorの変換
		.map((field) => ({
			...field,
			author: { name: field.author.fields.name, image: (field.author.fields.image as Asset).fields.file.url },
		}))
		// coverImageの変換
		.map((field) => ({
			...field,
			coverImage: field?.coverImage?.fields.file.url ?? '',
		}));
	return blogPosts;
};
