<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import site from '$lib/data/site.json';

	const physicalAddress = `${site.physicalAddress.street}, ${site.physicalAddress.city}, ${site.physicalAddress.state} ${site.physicalAddress.zip}`;
	const mailingAddress = `${site.mailingAddress.street}, ${site.mailingAddress.city}, ${site.mailingAddress.state} ${site.mailingAddress.zip}`;
</script>

<svelte:head>
	<title>{site.name} — {site.tagline}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<div class="px-4 pb-16 pt-12 sm:px-6">
	<section class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
		<div class="space-y-6">
			<p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Welcome to the</p>
			<h1 class="church-wordmark text-5xl font-semibold leading-tight text-slate-900 sm:text-6xl">
				<span class="block">BERTHOUD</span>
				<span class="block text-4xl font-normal sm:text-5xl">CHURCH OF CHRIST</span>
			</h1>
			<p class="max-w-2xl text-lg text-slate-700">{site.tagline}</p>

			<div class="flex flex-wrap gap-3">
				<a href={resolve('/contact/#bible-study')} class="primary-button">Request Bible Study</a>
				<a href={resolve('/contact/#personal-visit')} class="secondary-button">Request Personal Visit</a>
				<a href={resolve('/donate/')} class="secondary-button">Donate</a>
			</div>

			<div class="panel max-w-2xl space-y-2 p-4 text-sm text-slate-700 sm:text-base">
				<a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="block font-semibold text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{site.phone}</a>
				<a href={site.links.googleMaps} target="_blank" rel="noopener noreferrer" class="block font-semibold text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{physicalAddress}</a>
				<a href="mailto:{site.email}" class="block font-semibold text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{site.email}</a>
			</div>
		</div>

		<div class="panel overflow-hidden">
			<div class="bg-gradient-to-b from-blue-700 via-blue-600 to-teal-600 p-8 text-center text-white">
				<img src={asset('/logo_tp_color.png')} alt="{site.name} logo" class="mx-auto h-64 w-64 object-contain sm:h-80 sm:w-80" />
				<p class="mt-5 text-sm uppercase tracking-[0.14em] text-blue-100">Join us in worship and fellowship</p>
			</div>
		</div>
	</section>

	<section class="mx-auto mt-14 w-full max-w-6xl">
		<h2 class="mb-6 text-3xl font-bold tracking-tight text-slate-900">Join Us for Worship & Study</h2>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each site.services as service (`${service.day}-${service.name}`)}
				<article class="panel p-5">
					<p class="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{service.day}</p>
					<h3 class="mt-2 text-xl font-semibold text-slate-900">{service.name}</h3>
					<p class="mt-2 text-2xl font-bold text-blue-700">{service.time}</p>
					<p class="mt-2 text-sm text-slate-600">{service.description}</p>
				</article>
			{/each}
		</div>
	</section>

	<section class="mx-auto mt-14 w-full max-w-6xl">
		<h2 class="mb-6 text-3xl font-bold tracking-tight text-slate-900">Get Connected</h2>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<article class="panel p-5">
				<h3 class="text-xl font-semibold text-slate-900">Bible Study</h3>
				<p class="mt-2 text-sm text-slate-700">Request a guided Bible study with a teacher who can help answer your questions.</p>
				<a href={resolve('/contact/#bible-study')} class="mt-4 inline-flex text-sm font-semibold text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">Open Bible Study Form</a>
			</article>
			<article class="panel p-5">
				<h3 class="text-xl font-semibold text-slate-900">Personal Visit</h3>
				<p class="mt-2 text-sm text-slate-700">Let us know if you would like a visit and encouragement from our church family.</p>
				<a href={resolve('/contact/#personal-visit')} class="mt-4 inline-flex text-sm font-semibold text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">Open Visit Form</a>
			</article>
			<article class="panel p-5">
				<h3 class="text-xl font-semibold text-slate-900">Learn More</h3>
				<p class="mt-2 text-sm text-slate-700">Ask questions about our beliefs, worship, and opportunities to grow in faith.</p>
				<a href={resolve('/contact/#more-info')} class="mt-4 inline-flex text-sm font-semibold text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">Open Info Form</a>
			</article>
		</div>
	</section>

	<section class="mx-auto mt-14 w-full max-w-6xl panel bg-gradient-to-b from-blue-700 to-teal-600 p-7 text-white sm:p-9">
		<h2 class="text-2xl font-bold">We'd Love to Hear From You</h2>
		<div class="mt-4 flex flex-col gap-2 text-base sm:text-lg">
			<a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="font-semibold underline decoration-2 underline-offset-2 hover:text-blue-100">{site.phone}</a>
			<a href="mailto:{site.email}" class="font-semibold underline decoration-2 underline-offset-2 hover:text-blue-100">{site.email}</a>
			<a href={site.links.googleMaps} target="_blank" rel="noopener noreferrer" class="font-semibold underline decoration-2 underline-offset-2 hover:text-blue-100">{physicalAddress}</a>
		</div>
		<p class="mt-4 text-sm text-blue-100 sm:text-base">
			Mailing address: {mailingAddress}
		</p>
	</section>
</div>
