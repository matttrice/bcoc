<script lang="ts">
	import { base } from '$app/paths';
	import site from '$lib/data/site.json';
	import donateData from '$lib/data/donate.json';
</script>

<svelte:head>
	<title>Donate — {site.name}</title>
	<meta name="description" content="Support {site.name} with a tax-deductible donation via Zelle, PayPal, Venmo, or check." />
</svelte:head>

<div class="py-12 px-4">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4">Support Our Mission</h1>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">{donateData.intro}</p>
		</div>

		<div class="space-y-8">
			{#each donateData.methods as method}
				<div class="card bg-base-200 shadow-md" id={method.id}>
					<div class="card-body">
						<div class="flex items-center gap-3 mb-2">
							<span class="text-3xl">{method.icon}</span>
							<h2 class="card-title text-2xl">{method.name}</h2>
							{#if method.badge}
								<span class="badge badge-success badge-lg">{method.badge}</span>
							{/if}
						</div>

						<p class="text-base-content/80 mb-4">{method.description}</p>

						{#if method.id === 'zelle'}
							<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div class="space-y-3">
									<div class="flex items-center gap-2">
										<span class="font-semibold">Email:</span>
										<a href="mailto:{method.details.email}" class="link link-primary">{method.details.email}</a>
									</div>
									{#if 'phone' in method.details && method.details.phone}
									<div class="flex items-center gap-2">
										<span class="font-semibold">Phone:</span>
										<a href="tel:{method.details.phone.replace(/[^0-9]/g, '')}" class="link link-primary">{method.details.phone}</a>
									</div>
									{/if}
									{#if method.note}
										<div class="alert alert-info">
											<span>ℹ️ {method.note}</span>
										</div>
									{/if}
								</div>
								{#if method.qrCode}
									<div class="flex justify-center">
										<img src="{base}{method.qrCode}" alt="Zelle QR Code" class="max-w-48 rounded-lg shadow" />
									</div>
								{/if}
							</div>
						{:else if method.id === 'paypal'}
							<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div class="space-y-4">
									<a
										href={method.details.donateUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="btn btn-primary btn-lg"
									>
										Donate with PayPal
									</a>
									<form action="https://www.paypal.com/donate" method="post" target="_top" class="mt-2">
										<input type="hidden" name="hosted_button_id" value={method.details.hostedButtonId} />
										<input
											type="image"
											src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
											name="submit"
											title="PayPal - The safer, easier way to pay online!"
											alt="Donate with PayPal button"
										/>
									</form>
								</div>
								{#if method.qrCode}
									<div class="flex justify-center">
										<img src="{base}{method.qrCode}" alt="PayPal QR Code" class="max-w-48 rounded-lg shadow" />
									</div>
								{/if}
							</div>
						{:else if method.id === 'check'}
							<div class="bg-base-100 rounded-lg p-6">
								<p class="mb-2">
									<span class="font-semibold">Make payable to:</span> {method.details.payableTo}
								</p>
								<p>
									<span class="font-semibold">Mail to:</span> {method.details.mailingAddress}
								</p>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<div class="text-center mt-12">
			<p class="text-base-content/60">
				{site.name} is a 501(c)(3) tax-exempt organization. All donations are tax-deductible.
			</p>
			<p class="mt-2">
				Questions? <a href="mailto:{site.email}" class="link link-primary">{site.email}</a>
				or call <a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="link link-primary">{site.phone}</a>
			</p>
		</div>
	</div>
</div>
