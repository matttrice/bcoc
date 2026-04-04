<script lang="ts">
	import { resolve } from '$app/paths';
	import site from '$lib/data/site.json';
</script>

<svelte:head>
	<title>Master Bible Study — {site.name}</title>
	<meta
		name="description"
		content="Learn how the Master Bible Study works and request a teacher to guide your study."
	/>
</svelte:head>

<div class="px-4 py-12 sm:px-6">
	<div class="mx-auto w-full max-w-4xl space-y-8">
		<section class="panel p-6 sm:p-8">
			<h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Master Bible Study</h1>
			<p class="mt-4 text-lg text-slate-700">
				The Master Bible Study is most helpful when you have a teacher or moderator to walk through it with
				you. We would be honored to help guide your study and answer questions as you go.
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a href={resolve('/contact/#bible-study')} class="primary-button">Request a Teacher</a>
				<a href={site.links.mbs} target="_blank" rel="noopener noreferrer" class="secondary-button">Go to masterbiblestudy.com</a>
			</div>
		</section>

		<section class="panel p-6 sm:p-8">
			<h2 class="text-2xl font-semibold text-slate-900">Why Guided Study Helps</h2>
			<ul class="mt-4 list-disc space-y-2 pl-6 text-slate-700">
				<li>Get clear context for each lesson.</li>
				<li>Ask questions in real time.</li>
				<li>Move at a pace that works for you.</li>
				<li>Build confidence in understanding Scripture.</li>
			</ul>
		</section>

		<section class="panel p-6 sm:p-8">
			<h2 class="text-2xl font-semibold text-slate-900">Need a Quick Overview?</h2>
			<p class="mt-4 text-slate-700">
				Contact us and we can share a simple course outline before you begin.
			</p>
			<a href={resolve('/contact/#more-info')} class="mt-4 inline-flex text-sm font-semibold text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">
				Request More Information
			</a>
		</section>
	</div>
</div>