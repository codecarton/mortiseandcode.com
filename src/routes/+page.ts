import { fetchMarkdownPosts } from '$lib/utils/fetchPosts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const posts = await fetchMarkdownPosts({ limit: 4 });

	return {
		posts
	};
};
