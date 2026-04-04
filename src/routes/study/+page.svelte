<script lang="ts">
	import { resolve } from '$app/paths';
	import site from '$lib/data/site.json';
</script>

<svelte:head>
	<title>Bible Study - {site.name}</title>
	<meta
		name="description"
		content="Choose a Bible study path: request a study teacher or explore the Master Bible Study curriculum."
	/>
</svelte:head>

<div class="px-4 py-12 sm:px-6">
	<div class="mx-auto w-full max-w-5xl space-y-8">
		<section class="panel p-6 sm:p-8">
			<h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Bible Study</h1>
			<p class="mt-4 text-lg text-slate-700">
				Whether you want to begin a personal study request or engage the full Master Bible Study course,
				we are ready to study with you online or in person.
			</p>
		</section>

		<section class="grid gap-6 md:grid-cols-2">
			<article class="panel p-6 sm:p-8">
				<h2 class="text-2xl font-semibold text-slate-900">Study Request</h2>
				<p class="mt-3 text-slate-700">
					Request a Bible study and we will connect you with someone who can meet at a pace, location,
					and format that works for you.
				</p>
				<a href={resolve('/contact/#bible-study')} class="primary-button mt-6">Request a Bible Study</a>
			</article>

			<article class="panel p-6 sm:p-8">
				<h2 class="text-2xl font-semibold text-slate-900">Master Bible Study</h2>
				<p class="mt-3 text-slate-700">
					Learn how the Master Bible Study is structured, what topics are covered, and why participants are
					asked to engage the whole curriculum from foundation to conclusion.
				</p>
				<a href={resolve('/mbs/')} class="primary-button mt-6">More info on the Master Bible Study</a>
			</article>
		</section>
	</div>
</div>