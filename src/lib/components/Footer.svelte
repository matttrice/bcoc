<script lang="ts">
	import { base } from '$app/paths';
	import site from '$lib/data/site.json';
</script>

<footer class="footer bg-neutral text-neutral-content p-10">
	<nav>
		<h6 class="footer-title">Visit Us</h6>
		{#each site.services as service}
			<p>{service.day}: {service.name} — {service.time}</p>
		{/each}
		<a href={site.links.googleMaps} target="_blank" rel="noopener noreferrer" class="link link-hover mt-2">
			📍 Get Directions
		</a>
	</nav>
	<nav>
		<h6 class="footer-title">Contact</h6>
		<a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="link link-hover">📞 {site.phone}</a>
		<a href="mailto:{site.email}" class="link link-hover">✉️ {site.email}</a>
		<a href="{base}/contact" class="link link-hover">📝 Contact Forms</a>
	</nav>
	<nav>
		<h6 class="footer-title">Resources</h6>
		<a href={site.links.mbs} target="_blank" rel="noopener noreferrer" class="link link-hover">📖 Master Bible Study</a>
		<a href="{base}/donate" class="link link-hover">💝 Donate</a>
		<a href="{base}/about" class="link link-hover">ℹ️ About Us</a>
	</nav>
</footer>
<footer class="footer bg-neutral text-neutral-content border-t border-neutral-content/10 px-10 py-4">
	<aside class="grid-flow-col items-center">
		<img src="{base}/logo_sm.png" alt="{site.name}" class="h-8 w-8 rounded-full" />
		<p>{site.name}<br />Mailing: {site.mailingAddress.street}, {site.mailingAddress.city}, {site.mailingAddress.state} {site.mailingAddress.zip}</p>
	</aside>
</footer>
