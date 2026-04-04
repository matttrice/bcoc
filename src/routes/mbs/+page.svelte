<script lang="ts">
	import { resolve } from '$app/paths';
	import site from '$lib/data/site.json';
</script>

<svelte:head>
	<title>Master Bible Study — {site.name}</title>
	<meta
		name="description"
		content="Learn the Master Bible Study approach, curriculum, and how to engage the full course online or in person."
	/>
</svelte:head>

<div class="px-4 py-12 sm:px-6">
	<div class="mx-auto w-full max-w-4xl space-y-8">
		<section class="panel p-6 sm:p-8">
			<h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Master Bible Study</h1>
			<p class="mt-4 text-lg text-slate-700">
				The Master Bible Study (MBS) is a comprehensive and motivational study, presented in a systematic
				order so each lesson builds on foundational principles introduced early on.
			</p>
			<p class="mt-4 text-slate-700">
				Historically, this material has been taught in conference-style Bible Boot Camp sessions. Today,
				we offer the same full course online or in person. All it takes is a person willing to engage in
				the full course and a desire for the truth.
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a href={resolve('/contact/#bible-study')} class="primary-button">Study Request</a>
				<a href={site.links.mbs} target="_blank" rel="noopener noreferrer" class="secondary-button">Preview Course at masterbiblestudy.com</a>
			</div>
		</section>

		<section class="panel p-6 sm:p-8">
			<h2 class="text-2xl font-semibold text-slate-900">How the Study Approaches Scripture</h2>
			<p class="mt-4 text-slate-700">
				This curriculum strictly teaches within the framework of the Bible and demonstrates the principle
				that the Bible interprets itself, within itself - from beginning to end. The goal is to form a biblical belief system that is logically
				coherent and free of contradiction.
			</p>
			<p class="mt-4 text-slate-700">
				Because concepts introduced later in the study are strongly dependent upon foundational principles,
				it is essential that those participating commit to attending all sessions for maximum benefit.
			</p>
			<ul class="mt-4 list-disc space-y-2 pl-6 text-slate-700">
				<li>The Bible is the perfect word of God, authored by God through the hands of men.</li>
				<li>Interpretation is approached internally, using the Bible's own definitions across its books.</li>
				<li>The study provides sound doctrine and reason for claiming which teachings are true and false.</li>
			</ul>
		</section>

		<section class="panel p-6 sm:p-8">
			<h2 class="text-2xl font-semibold text-slate-900">Curriculum Overview</h2>
			<p class="mt-4 text-slate-700">
				The series is developed to lay foundations first and then build a big picture of God's word Bible and objective truth is teaches.
			</p>

			<div class="mt-6 grid gap-6 md:grid-cols-2">
				<div>
					<h3 class="text-xl font-semibold text-slate-900">Foundational Topics</h3>
					<ul class="mt-3 list-disc space-y-1 pl-6 text-slate-700">
						<li>Introduction</li>
						<li>Physical / Spiritual</li>
						<li>Biblical Time</li>
						<li>Life</li>
						<li>Law</li>
						<li>Sin</li>
						<li>Death</li>
						<li>Translation</li>
					</ul>
				</div>

				<div>
					<h3 class="text-xl font-semibold text-slate-900">Big Picture Topics</h3>
					<ul class="mt-3 list-disc space-y-1 pl-6 text-slate-700">
						<li>The Ark and Flood</li>
						<li>Promises of God</li>
						<li>Melchizedek</li>
						<li>Birthrights</li>
						<li>Jacob's Name</li>
						<li>Joseph's Dream</li>
						<li>The Exodus and Passover</li>
						<li>Tabernacle</li>
						<li>Kingdom of Israel</li>
						<li>Daniel and the Great Image</li>
						<li>70 Weeks of Years</li>
						<li>The Church</li>
						<li>Idolatry</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="panel p-6 sm:p-8">
			<h2 class="text-2xl font-semibold text-slate-900">Why People Request This Study</h2>
			<p class="mt-4 text-slate-700">
				With thousands of religious denominations existing today, how does anyone determine which, if any,
				teach the truth? How can people read the same Bible yet arrive at different conclusions?
			</p>
			<p class="mt-4 text-slate-700">
				This route to avoiding confusion and supposed biblical contradiction starts with recognizing
				indisputable and fundamental patterns and principles designed throughout the pages of the Bible.
				Then the mystery of the gospel can be understood with clarity.
			</p>
			<p class="mt-4 text-slate-700">
			<a
					href="https://www.biblegateway.com/passage/?search=Ephesians%206%3A19&version=NASB"
					target="_blank"
					rel="noopener noreferrer"
					class="external-link"
				>
				Ephesians 6:19:
				</a>
			"pray in my behalf, that speech may be given to me in the opening of my mouth, to make known with boldness the <strong>mystery of the gospel</strong>"
			</p>
			<a href={resolve('/contact/#bible-study')} class="primary-button mt-4">
				Request to begin the Full Course
			</a>
		</section>
	</div>
</div>