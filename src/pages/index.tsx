import Container from '@blog/components/container';
import HeroPost from '@blog/components/hero-post';
import Intro from '@blog/components/intro';
import Layout from '@blog/components/layout';
import MoreStories from '@blog/components/more-stories';
import { getAllPosts } from '@blog/lib/api';
import { CMS_NAME } from '@blog/lib/constants';
import { BlogPost } from '@blog/types/BlogPost';
// import { IPostFields } from '@blog/types/generated/contentful';
// import Post from '@blog/types/post';
import Head from 'next/head';

type Props = {
	allPosts: BlogPost[];
};

const Index = (props: Props) => {
	const { allPosts } = props;
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	return (
		<>
			<Layout>
				<Head>
					<title>
						Next.js Blog Example with
						{CMS_NAME}
					</title>
				</Head>
				<Container>
					<Intro />
					{heroPost && <HeroPost {...heroPost} />}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
};

export default Index;

export const getStaticProps = async () => {
	const allPosts = await getAllPosts();

	console.log('allposts', allPosts);

	return {
		props: { allPosts },
	};
};
