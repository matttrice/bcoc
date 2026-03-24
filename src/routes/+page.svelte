<script lang="ts">
	import { base } from '$app/paths';
	import site from '$lib/data/site.json';
</script>

<svelte:head>
	<title>{site.name} — {site.tagline}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<!-- Hero Section -->
<div class="hero min-h-[70vh] bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-2xl">
			<img src="{base}/logo_tp_color.png" alt="{site.name} logo" class="mx-auto mb-6 h-48 w-48 md:h-64 md:w-64" />
			<h1 class="text-4xl md:text-5xl font-bold">Welcome to {site.name}</h1>
			<p class="py-4 text-lg italic">{site.tagline}</p>
			<p class="text-base-content/80 mb-6">{site.description}</p>
			<div class="flex flex-wrap justify-center gap-3">
				<a href="{base}/contact" class="btn btn-primary">Visit Us</a>
				<a href={site.links.mbs} target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
					Master Bible Study
				</a>
				<a href="{base}/donate" class="btn btn-outline">Donate</a>
			</div>
		</div>
	</div>
</div>

<!-- Service Times -->
<section class="py-16 px-4 bg-base-100">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="text-3xl font-bold mb-8">Join Us for Worship</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each site.services as service}
				<div class="card bg-base-200 shadow-md">
					<div class="card-body items-center text-center">
						<h3 class="card-title text-xl">{service.name}</h3>
						<p class="text-3xl font-bold text-primary">{service.time}</p>
						<p class="text-base-content/70">{service.day}</p>
						<p>{service.description}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-6">
			<a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="link link-primary text-lg">
				📞 Call us: {site.phone}
			</a>
			<span class="mx-2">|</span>
			<a href={site.links.googleMaps} target="_blank" rel="noopener noreferrer" class="link link-primary text-lg">
				📍 Get Directions
			</a>
		</div>
	</div>
</section>

<!-- Quick Links / Connect Cards -->
<section class="py-16 px-4 bg-base-200">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-center mb-8">Get Connected</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
				<div class="card-body items-center text-center">
					<span class="text-4xl"></span>
					<h3 class="card-title">Bible Study</h3>
					<p>Study God's word with our free online Master Bible Study course. Contact us to meet with a teacher.</p>
					<div class="card-actions">
						<a href={site.links.mbs} target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
							Start Learning
						</a>
					</div>
				</div>
			</div>
			<div class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
				<div class="card-body items-center text-center">
					<span class="text-4xl"></span>
					<h3 class="card-title">Personal Visit</h3>
					<p>We'd love to visit with you and share fellowship together.</p>
					<div class="card-actions">
						<a href="{base}/contact#personal-visit" class="btn btn-primary btn-sm">Request a Visit</a>
					</div>
				</div>
			</div>
			<div class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
				<div class="card-body items-center text-center">
					<span class="text-4xl"></span>
					<h3 class="card-title">Learn More</h3>
					<p>Have questions? We're happy to share more about our church family.</p>
					<div class="card-actions">
						<a href="{base}/contact#more-info" class="btn btn-primary btn-sm">Get Info</a>
					</div>
				</div>
			</div>
			<div class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
				<div class="card-body items-center text-center">
					<span class="text-4xl"></span>
					<h3 class="card-title">Give</h3>
					<p>Support our mission with a tax-deductible donation.</p>
					<div class="card-actions">
						<a href="{base}/donate" class="btn btn-primary btn-sm">Donate</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Info Bar -->
<section class="py-10 px-4 bg-primary text-primary-content">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="text-2xl font-bold mb-4">We'd Love to Hear From You</h2>
		<div class="flex flex-wrap justify-center gap-6 text-lg">
			<a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="link link-hover">📞 {site.phone}</a>
			<a href="mailto:{site.email}" class="link link-hover">✉️ {site.email}</a>
		</div>
		<p class="mt-4">
			Mailing: {site.mailingAddress.street}, {site.mailingAddress.city}, {site.mailingAddress.state} {site.mailingAddress.zip}
		</p>
	</div>
</section>
