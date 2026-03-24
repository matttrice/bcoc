<script lang="ts">
	import site from '$lib/data/site.json';
	import formsData from '$lib/data/forms.json';
	import ContactForm from '$lib/components/ContactForm.svelte';

	let activeTab = $state(formsData.forms[0].id);
</script>

<svelte:head>
	<title>Contact — {site.name}</title>
	<meta name="description" content="Get in touch with {site.name}. Request a Bible study, personal visit, or more information." />
</svelte:head>

<div class="py-12 px-4">
	<div class="max-w-3xl mx-auto">
		<div class="text-center mb-10">
			<h1 class="text-4xl font-bold mb-4">Get In Touch</h1>
			<p class="text-lg text-base-content/70">
				We'd love to hear from you. Choose one of the options below, or contact us directly.
			</p>
			<div class="flex flex-wrap justify-center gap-4 mt-4 text-lg">
				<a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="link link-primary">📞 {site.phone}</a>
				<a href="mailto:{site.email}" class="link link-primary">✉️ {site.email}</a>
			</div>
		</div>

		<!-- Tab Navigation -->
		<div role="tablist" class="tabs tabs-bordered tabs-lg mb-8">
			{#each formsData.forms as form}
				<button
					role="tab"
					class="tab"
					class:tab-active={activeTab === form.id}
					onclick={() => activeTab = form.id}
				>
					<span class="hidden sm:inline">{form.icon}</span>
					<span class="text-sm sm:text-base">{form.title.replace('Request ', '').replace('More ', '')}</span>
				</button>
			{/each}
		</div>

		<!-- Tab Content -->
		{#each formsData.forms as form}
			<div class="card bg-base-200 shadow-md" id={form.id} hidden={activeTab !== form.id}>
				<div class="card-body">
					<div class="flex items-center gap-3 mb-2">
						<span class="text-3xl">{form.icon}</span>
						<h2 class="card-title text-2xl">{form.title}</h2>
					</div>
					<p class="text-base-content/70 mb-4">{form.description}</p>
					<ContactForm {form} />
				</div>
			</div>
		{/each}

		<!-- Direct Contact Info -->
		<div class="mt-12 text-center">
			<h3 class="text-xl font-bold mb-4">Other Ways to Reach Us</h3>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div class="card bg-base-200">
					<div class="card-body items-center text-center py-6">
						<span class="text-2xl">📞</span>
						<p class="font-semibold">Call</p>
						<a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="link link-primary">{site.phone}</a>
					</div>
				</div>
				<div class="card bg-base-200">
					<div class="card-body items-center text-center py-6">
						<span class="text-2xl">✉️</span>
						<p class="font-semibold">Email</p>
						<a href="mailto:{site.email}" class="link link-primary text-sm">{site.email}</a>
					</div>
				</div>
				<div class="card bg-base-200">
					<div class="card-body items-center text-center py-6">
						<span class="text-2xl">📍</span>
						<p class="font-semibold">Visit</p>
						<a href={site.links.googleMaps} target="_blank" rel="noopener noreferrer" class="link link-primary">Get Directions</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
