<script lang="ts">
	import GithubIcon from './icons/GithubIcon.svelte';
	import TwitterIcon from './icons/TwitterIcon.svelte';

	const socialLinks: socialLink[] = [
		{
			name: 'Github',
			href: 'https://github.com/codecarton',
			icon: GithubIcon
		},
		{
			name: 'Twitter',
			href: 'https://twitter.com/codecarton',
			icon: TwitterIcon
		}
	];
</script>

<div class="bg-salamander-500">
	<div class="max-w-7xl mx-auto p-7 md:p-20 justify-items-center">
		<h2 class="text-3xl font-bold text-salamander-100">Get Early Access to New Products</h2>
		<p class="text-salamander-200 mb-5">
			Sign up to get early access to new blog posts, projects, and more.
		</p>
		<div class="max-auto">
			<script
				async
				data-uid="6fb847e457"
				src="https://codecarton.ck.page/6fb847e457/index.js"
			></script>
			<div class="md:flex mt-10 hidden">
				{#each socialLinks as link}
					<!-- svelte-ignore security-anchor-rel-noreferrer -->
					<a href={link.href} rel="me" class="mx-3 first:ml-0 last:mr-0" target="_blank">
						<svelte:component
							this={link.icon}
							class="text-salamander-400 hover:text-salamander-100"
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
