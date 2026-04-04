<script lang="ts">
	import site from '$lib/data/site.json';
	import formsData from '$lib/data/forms.json';
	import ContactForm from '$lib/components/ContactForm.svelte';

	const physicalAddress = `${site.physicalAddress.street}, ${site.physicalAddress.city}, ${site.physicalAddress.state} ${site.physicalAddress.zip}`;
</script>

<svelte:head>
	<title>Contact — {site.name}</title>
	<meta name="description" content="Get in touch with {site.name}. Request a Bible study, personal visit, or more information." />
</svelte:head>


<div class="px-4 py-12 sm:px-6">
	<div class="mx-auto w-full max-w-4xl space-y-10">
		<section class="text-center">
			<h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Get In Touch</h1>
			<p class="mx-auto mt-4 max-w-3xl text-lg text-slate-700">
				We would love to hear from you. Select a request below or scroll through all forms on this page.
			</p>
			<div class="mt-6 flex flex-col items-center gap-2 text-base sm:text-lg">
				<a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="font-semibold text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{site.phone}</a>
				<a href="mailto:{site.email}" class="font-semibold text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{site.email}</a>
				<a href={site.links.googleMaps} target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{physicalAddress}</a>
			</div>
		</section>

		<section class="panel p-5 sm:p-6">
			<h2 class="text-lg font-semibold text-slate-900">Jump to a Form</h2>
			<div class="mt-4 flex flex-wrap gap-2">
			{#each formsData.forms as form (form.id)}
				<a
					href="#{form.id}"
					class="chip-link"
				>
					{form.icon} {form.title}
				</a>
			{/each}
			</div>
		</section>

		<section class="space-y-6">
		{#each formsData.forms as form (form.id)}
				<article class="panel p-5 sm:p-6" id={form.id}>
					<div class="mb-4 flex items-center gap-3">
						<span class="text-2xl" aria-hidden="true">{form.icon}</span>
						<h2 class="text-2xl font-semibold text-slate-900">{form.title}</h2>
					</div>
					<p class="mb-5 text-slate-700">{form.description}</p>
					<ContactForm {form} />
				</article>
		{/each}
		</section>

		<section class="grid gap-4 sm:grid-cols-3">
			<div class="panel p-5 text-center">
				<h3 class="text-base font-semibold text-slate-900">Call</h3>
				<a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="mt-2 inline-block text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{site.phone}</a>
			</div>
			<div class="panel p-5 text-center">
				<h3 class="text-base font-semibold text-slate-900">Email</h3>
				<a href="mailto:{site.email}" class="mt-2 inline-block text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{site.email}</a>
			</div>
			<div class="panel p-5 text-center">
				<h3 class="text-base font-semibold text-slate-900">Visit</h3>
				<a href={site.links.googleMaps} target="_blank" rel="noopener noreferrer" class="mt-2 inline-block text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{physicalAddress}</a>
			</div>
		</section>
	</div>
</div>
