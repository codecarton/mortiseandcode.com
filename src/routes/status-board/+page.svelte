<script lang="ts">
	import GoalCard from '$lib/components/GoalCard.svelte';

	let goals: Goal[] = [
		{
			title: 'Release One16 - Woodworking Calculator v2.2.0',
			date: 'Jul 9, 2024',
			ontrack: true,
			completed: true
		},
		{
			title: 'Release One16 - Woodworking Calculator v2.0',
			date: 'Mar 3, 2024',
			ontrack: true,
			completed: true
		},
		{
			title: 'Release One16 - Woodworking Calculator v1.0',
			date: 'Mar 31, 2023',
			ontrack: true,
			completed: true
		},
		{
			title: 'Release Ditches - Bury Bad Habits v1.0',
			date: 'Aug 26, 2024',
			ontrack: true,
			completed: true
		},
		{
			title: 'App#3 MVP',
			date: 'Sept 31, 2024',
			ontrack: true,
			completed: false
		}
	];
	goals.sort((a, b) => (a.completed === b.completed ? 1 : a.completed ? 0 : -1));
</script>

<svelte:head>
	<title>Status Board</title>
</svelte:head>

<h1 class="text-center text-neutral-800 font-semibold text-4xl my-5 p-2">Milestones</h1>

<div class="px-2 md:px-7 my-2 md:my-7 mx-auto max-w-4xl">
	{#each goals as goal}
		<GoalCard {goal} />
	{/each}
</div>
