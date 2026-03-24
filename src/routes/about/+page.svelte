<script lang="ts">
	import { base } from '$app/paths';
	import site from '$lib/data/site.json';
	import { aboutHtml } from './about.ts';
</script>

<svelte:head>
	<title>About — {site.name}</title>
	<meta name="description" content="Learn about {site.name}, a welcoming community of believers in Berthoud, Colorado." />
</svelte:head>

<div class="py-12 px-4">
	<div class="max-w-3xl mx-auto prose prose-lg prose-headings:text-primary 
				prose-blockquote:border-l-4 prose-blockquote:border-primary 
				prose-blockquote:bg-base-200 prose-blockquote:py-4 prose-blockquote:px-6 
				prose-ul:list-disc prose-ul:pl-6">
		{@html aboutHtml}
	</div>

	<div class="max-w-3xl mx-auto mt-12 text-center">
		<div class="flex flex-wrap justify-center gap-4">
			<a href="{base}/contact" class="btn btn-primary">Contact Us</a>
			<a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="btn btn-outline">
				📞 {site.phone}
			</a>
			<a href={site.links.googleMaps} target="_blank" rel="noopener noreferrer" class="btn btn-outline">
				📍 Get Directions
			</a>
		</div>
	</div>
</div>