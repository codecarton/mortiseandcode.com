<script lang="ts">
	import { Popover, PopoverButton } from '@rgossiaux/svelte-headlessui';
	import { Bars3 } from 'svelte-heros-v2';
	import NavPopoverPanel from './NavPopoverPanel.svelte';
	import { page } from '$app/stores';
	import NavLink from './NavLink.svelte';

	const navLinks: navLink[] = [
		{
			name: 'Blog',
			href: '/blog'
		},
		{
			name: 'Code Carton',
			href: 'https://codecarton.com'
		},
		{
			name: 'Status Board',
			href: '/status-board'
		}
	];

	let path: string;
	$: path = $page.url.pathname;
</script>

<Popover class="relative bg-salamander-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
			<!-- Logo Div -->
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a href="/">
					<span
						class="text-white font-bold text-3xl block pt-1 hover:text-goldbrush-500 dark:text-gray-100"
						>Mortise &AMP; Code</span
					>
				</a>
			</div>

			<!-- Mobile navigation toggle-->
			<div class="md:hidden">
				<PopoverButton
					class="
                      inline-flex
                      items-center
                      justify-end
                      rounded-sm
                      bg-salamander-600
                      p-2
                      text-white
                      hover:bg-salamander-700
                      hover:text-gray-200
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-salamander-500
                  "
				>
					<span class="sr-only">Open menu</span>
					<Bars3 class="h-6 w-6" aria-hidden="true" />
				</PopoverButton>
			</div>

			<!-- Mobile Navigation Popover -->
			<NavPopoverPanel {navLinks} />
			<div class="md:flex hidden font-lg">
				{#each navLinks as link}
					<NavLink currentPath={path} href={link.href} linkText={link.name} />
				{/each}
			</div>
		</div>
	</div>
</Popover>
