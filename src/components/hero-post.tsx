import { BlogPost } from '@blog/types/BlogPost';
import Link from 'next/link';

import Author from '../types/BlogAuthor';
import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';

type Props = BlogPost;

const HeroPost = (props: Props) => {
	const { title, coverImage, date, author, slug } = props;

	return (
		<section>
			<div className="mb-8 md:mb-16">
				<CoverImage title={title} src={coverImage ?? ''} slug={slug} />
			</div>
			<div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
				<div>
					<h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
						<Link as={`/posts/${slug}`} href="/posts/[slug]">
							<a className="hover:underline">{title}</a>
						</Link>
					</h3>
					<div className="mb-4 md:mb-0 text-lg">
						<DateFormatter dateString={date} />
					</div>
				</div>
				<div>
					<Avatar name={author.name} picture={author.image} />
				</div>
			</div>
		</section>
	);
};

export default HeroPost;
