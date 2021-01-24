/**
 * Contentfulのコード生成
 * https://github.com/intercom/contentful-typescript-codegen
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const contentfulManagement = require('contentful-management');

module.exports = () => {
	const contentfulClient = contentfulManagement.createClient({
		accessToken: process.env.CONTENTFUL_MANAGEMENT_API_TOKEN,
	});

	return contentfulClient
		.getSpace(process.env.CONTENTFUL_SPACE_ID)
		.then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT));
};
