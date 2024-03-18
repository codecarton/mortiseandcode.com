<script lang="ts">
	import SignupCTA from '$lib/components/SignupCTA.svelte';
	import BlogExcerpt from '$lib/components/BlogExcerpt.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const title = 'Mortise & Code';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<SignupCTA />

<div class="p-7 lg:flex md:px-20 mx-auto max-w-7xl">
	<div class="lg:mt-16 lg:mr-20">
		{#each data.posts as post}
			<BlogExcerpt {post} />
		{/each}
	</div>
	<div>
		<div class="mt-0 lg:mr-20 lg:w-96">
			<a
				href="http://codecarton.com/one16"
				target="_blank"
				rel="noreferrer"
				class="mt-10 inline-block"
			>
				<img
					src="/images/V2-Banner/One16-Version2-Banner.png"
					alt="One16 - Fraction Calculator now on the app store"
				/>
			</a>
		</div>
		<hr class="m-10" />
	</div>
</div>

<div class="md:p-10 mx-auto max-w-4xl" />
