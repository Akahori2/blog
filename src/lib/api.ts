import { IPostFields } from '@blog/types/generated/contentful';
import { BlogPost } from '@blog/types/BlogPost';
import { createClient } from 'contentful';
import { transformEntriesIntoBlogPosts } from './transform';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID ?? '',
	accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN ?? '',
});

// 全てのpostを取得
export const getAllPosts = async (): Promise<BlogPost[]> => {
	const entries = await client.getEntries<IPostFields>({
		// Content typeがpostのデータだけ取得
		content_type: 'post',

		// postが作られた時間順に取得
		order: '-fields.date',
	});

	return entries && transformEntriesIntoBlogPosts(entries);
};

// URLごとにpostを取得
export async function getPostBySlug(slug: string): Promise<BlogPost> {
	const entries = await client.getEntries<IPostFields>({
		content_type: 'post',

		// 取得データの数
		limit: 1,

		// slugの値が引数slugと等しいpostを取得
		'fields.slug[in]': slug,
	});

	return entries && transformEntriesIntoBlogPosts(entries)[0];
}

// 最新のpostsを3つ取得
export async function getLatestPosts(slug: string): Promise<BlogPost[]> {
	const entries = await client.getEntries<IPostFields>({
		content_type: 'post',
		limit: 3,
		order: '-fields.date',

		// slugの値が引数slugと等しくないpost
		'fields.slug[nin]': slug,
	});

	return entries && transformEntriesIntoBlogPosts(entries);
}

// 全てのpostのURLを取得
export const getAllPostsSlugs = async (): Promise<string[]> => {
	const entries = await client.getEntries<IPostFields>({
		content_type: 'post',

		// postのslugの値を取得
		select: 'fields.slug',
	});

	return entries?.items?.map((item) => item?.fields?.slug ?? '');
};
