<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import site from '$lib/data/site.json';

	const physicalAddress = `${site.physicalAddress.street}, ${site.physicalAddress.city}, ${site.physicalAddress.state} ${site.physicalAddress.zip}`;
	const mailingAddress = `${site.mailingAddress.street}, ${site.mailingAddress.city}, ${site.mailingAddress.state} ${site.mailingAddress.zip}`;
</script>

<footer class="mt-16 border-t border-slate-200 bg-slate-950 text-slate-100">
	<div class="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
		<section>
			<h2 class="text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">Visit Us</h2>
			<div class="mt-4 space-y-2 text-sm text-slate-300">
				{#each site.services as service (`${service.day}-${service.name}`)}
					<p>{service.day}: {service.name} ({service.time})</p>
				{/each}
				<a href={site.links.googleMaps} target="_blank" rel="noopener noreferrer" class="block pt-2 font-semibold text-blue-300 underline decoration-blue-300 decoration-2 underline-offset-2 hover:text-blue-200">
					{physicalAddress}
				</a>
			</div>
		</section>

		<section>
			<h2 class="text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">Contact</h2>
			<div class="mt-4 space-y-2 text-sm text-slate-300">
				<a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="block font-semibold text-slate-100 hover:text-blue-200">{site.phone}</a>
				<a href="mailto:{site.email}" class="block font-semibold text-slate-100 hover:text-blue-200">{site.email}</a>
				<a href={resolve('/contact/')} class="block hover:text-blue-200">Contact Forms</a>
			</div>
		</section>

		<section>
			<h2 class="text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">Resources</h2>
			<div class="mt-4 space-y-2 text-sm text-slate-300">
				<a href={resolve('/contact/#bible-study')} class="block hover:text-blue-200">Request Bible Study</a>
				<a href={site.links.mbs} target="_blank" rel="noopener noreferrer" class="block hover:text-blue-200">Master Bible Study</a>
				<a href={resolve('/donate/')} class="block hover:text-blue-200">Donate</a>
				<a href={resolve('/about/')} class="block hover:text-blue-200">About</a>
			</div>
		</section>
	</div>

	<div class="border-t border-slate-800">
		<div class="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:px-6 sm:text-sm">
			<div class="flex items-center gap-3 text-slate-300">
				<img src={asset('/logo_sm.png')} alt="{site.name}" class="h-8 w-8 object-contain" />
				<p class="font-semibold">{site.name}</p>
			</div>
			<p>Physical: {physicalAddress}</p>
			<p>Mailing: {mailingAddress}</p>
		</div>
	</div>
</footer>
