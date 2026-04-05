<script lang="ts">
	import { resolve } from '$app/paths';
	import site from '$lib/data/site.json';
</script>

<svelte:head>
	<title>About - {site.name}</title>
	<meta name="description" content="Learn about Berthoud Church of Christ." />
</svelte:head>

<div class="px-4 py-12 sm:px-6">
	<div class="mx-auto w-full max-w-4xl space-y-8">
		<section class="panel p-6 sm:p-8">
			<h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">About Berthoud Church of Christ</h1>
			<p class="mt-4 text-lg text-slate-700">
				We are a welcoming community of believers located in Berthoud, Colorado.
			</p>
		<h2 class="mt-8 text-2xl font-semibold text-slate-900">Our Mission</h2>
			<ul class="mt-4 list-disc space-y-2 pl-6 text-slate-700">
				<li><strong>Worship God</strong> in spirit and in truth.</li>
				<li><strong>Study His Word</strong> together and grow in faith.</li>
				<li><strong>Serve</strong> with love and compassion.</li>
				<li><strong>Share the Gospel</strong> with those seeking truth.</li>
			</ul>
		</section>

		<section class="panel p-6 sm:p-8">
			<h2 class="text-2xl font-semibold text-slate-900">What We Believe</h2>
			<p class="mt-4 text-slate-700">
				We are members of the Church that Jesus built
				<a
					href="https://www.biblegateway.com/passage/?search=Matthew%2016%3A18&version=NASB"
					target="_blank"
					rel="noopener noreferrer"
					>Matthew 16:18</a
				>. We follow the Bible as our sole guide for salvation, faith, and practice.
			</p>

			<p class="mt-4 text-slate-700">Peter tells us what saves today:</p>

			<blockquote class="mt-4 rounded-xl border-l-4 border-blue-300 bg-blue-50 px-5 py-4 text-slate-800">
				<p class="font-semibold">
					<a
						href="https://www.biblegateway.com/passage/?search=1%20Peter%203%3A18-21&version=NASB"
						target="_blank"
						rel="noopener noreferrer"
						>1 Peter 3:18-21</a
					>
				</p>
				<p class="mt-2">
					For Christ also died for sins once for all, the just for the unjust, so that He might bring us
					to God, having been put to death in the flesh, but made alive in the spirit; ... Corresponding to
					that, baptism now saves you-not the removal of dirt from the flesh, but an appeal to God for a
					good conscience-through the resurrection of Jesus Christ.
				</p>
			</blockquote>

			<p class="mt-4 text-slate-700">
				The keys of that message are inherited by the Church, and we teach the same prescription for
				salvation. If you are seeking the <strong>true message</strong> from God, please reach out to us for
				an online or in-person study. If you are already a seasoned Bible student, our approach will
				organize and unify what you already know. If you are brand-new to the Bible, we will help you
				take those first steps to understanding God's word as it relates to the journey of life.
			</p>
		</section>

		<section class="panel p-6 sm:p-8">
			<h2 class="text-2xl font-semibold text-slate-900">What to Expect</h2>
			<p class="mt-4 text-slate-700">When you visit, you will find:</p>
			<ul class="mt-4 list-disc space-y-2 pl-6 text-slate-700">
				<li><strong>Warm, friendly people</strong> glad to see you.</li>
				<li><strong>Bible-centered</strong> teaching and shared duties.</li>
				<li><strong>A cappella singing</strong> that lifts the spirit.</li>
				<li><strong>The Lord's Supper</strong> observed every Sunday.</li>
				<li><strong>No pressure</strong>. Come as you are.</li>
			</ul>
			<p class="mt-4 text-slate-700">We would love for you to visit us and see for yourself what we are all about.</p>
			<div class="mt-6">
				<a href={resolve('/contact/')} class="primary-button">Contact Us</a> or visit us at <a href={site.links.googleMaps} target="_blank" rel="noopener noreferrer" class="underline decoration-2 underline-offset-2 hover:text-blue-900">{site.physicalAddress.street}, {site.physicalAddress.city}, {site.physicalAddress.state}</a>
			</div>
		</section>
	</div>
</div>
