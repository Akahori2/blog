import Container from '@blog/components/container';
import Header from '@blog/components/header';
import Layout from '@blog/components/layout';
import PostBody from '@blog/components/post-body';
import PostHeader from '@blog/components/post-header';
import PostTitle from '@blog/components/post-title';
import { getAllPosts, getAllPostsSlugs, getLatestPosts, getPostBySlug } from '@blog/lib/api';
import { CMS_NAME } from '@blog/lib/constants';
import markdownToHtml from '@blog/lib/markdownToHtml';
import { IPost } from '@blog/types/generated/contentful';
import { BlogPost } from '@blog/types/BlogPost';
import { GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
	post: BlogPost | undefined;
	latestPosts: BlogPost[] | undefined;
	preview?: boolean;
};

const Post = (props: Props) => {
	const { post, latestPosts, preview = false } = props;
	const router = useRouter();
	console.log('post', post);
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout preview={preview}>
			<Container>
				<Header />
				{router.isFallback || !post ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article className="mb-32">
							<Head>
								<title>
									{post.title} | Next.js Blog Example with
									{CMS_NAME}
								</title>
								<meta property="og:image" content={post.coverImage} />
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
							/>
							<PostBody content={post.content} />
						</article>
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Post;

type Query = {
	slug: string;
};

export async function getStaticPaths() {
	const allPostsSlugs: string[] = await getAllPostsSlugs();
	console.log(
		'path',
		allPostsSlugs?.map((slug) => `/posts/${slug}`),
	);
	return {
		paths: allPostsSlugs?.map((slug) => `/posts/${slug}`) ?? [],
		fallback: true,
	};
}

export const getStaticProps = async (ctx: GetStaticPropsContext<Query>) => {
	const { slug = '' } = ctx.params ?? {};
	const post = await getPostBySlug(slug);
	const latestPosts = await getLatestPosts(slug);

	console.log('latestPosts', latestPosts);
	return {
		props: {
			post,
			latestPosts,
		},
		revalidate: 1,
	};
};
