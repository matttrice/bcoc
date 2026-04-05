<script lang="ts">
	import { resolve } from '$app/paths';
	import site from '$lib/data/site.json';
</script>

<svelte:head>
	<title>Bible Study - {site.name}</title>
	<meta
		name="description"
		content="Request a Bible study with a teacher online or in person."
	/>
</svelte:head>

<div class="px-4 py-12 sm:px-6">
	<div class="mx-auto w-full max-w-5xl space-y-8">
		<section class="panel p-6 sm:p-8">
			<h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Bible Study</h1>
			<p class="mt-4 text-lg text-slate-700">
				Request a personal or group Bible study, and we are ready to study with you online or in person.

				We believe the Bible is the inspired word, flawless in form and presented to all of humanity for those who seek God's answers.
				Whether you are new to the Bible or have been studying for years, we have a study program for you that answers the fundamental questions of life, death, faith, salvation and eternity.		
			</p>
			<p class="mt-4 text-lg text-slate-700">
				Contact us anytime to learn more.
			</p>

			<a href={resolve('/contact/#bible-study')} class="primary-button mt-6">Request a Bible Study</a>
		</section>
	</div>
</div>