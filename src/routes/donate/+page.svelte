<script lang="ts">
	import { asset } from '$app/paths';
	import site from '$lib/data/site.json';
	import donateData from '$lib/data/donate.json';

	function resolveStatic(path: string) {
		return asset(path as Parameters<typeof asset>[0]);
	}
</script>

<svelte:head>
	<title>Donate — {site.name}</title>
	<meta name="description" content="Support {site.name} with a tax-deductible donation via Zelle, PayPal, Venmo, check, or securities transfer." />
</svelte:head>

<div class="px-4 py-12 sm:px-6">
	<div class="mx-auto w-full max-w-5xl">
		<div class="mb-12 text-center">
			<h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Support Our Mission</h1>
			<p class="mx-auto mt-4 max-w-3xl text-lg text-slate-700">{donateData.intro}</p>
		</div>

		<div class="space-y-8">
			{#each donateData.methods as method (method.id)}
				<article class="panel p-5 sm:p-6" id={method.id}>
					<div class="mb-2 flex flex-wrap items-center gap-3">
						<span class="text-3xl">{method.icon}</span>
						<h2 class="text-2xl font-semibold text-slate-900">{method.name}</h2>
							{#if method.badge}
							<span class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-800">
								{method.badge}
							</span>
							{/if}
					</div>

					<p class="mb-4 text-slate-700">{method.description}</p>

						{#if method.id === 'zelle'}
							<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
								<div class="space-y-3">
									<div class="flex items-center gap-2">
										<span class="font-semibold">Email:</span>
										<a href="mailto:{method.details.email}" class="text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{method.details.email}</a>
									</div>
									{#if 'phone' in method.details && method.details.phone}
									<div class="flex items-center gap-2">
										<span class="font-semibold">Phone:</span>
										<a href="tel:{method.details.phone.replace(/[^0-9]/g, '')}" class="text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{method.details.phone}</a>
									</div>
									{/if}
									{#if method.note}
										<div class="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
											{method.note}
										</div>
									{/if}
								</div>
								{#if method.qrCode}
									<div class="flex justify-center">
										<img src={resolveStatic(method.qrCode)} alt="Zelle QR Code" class="max-w-48 rounded-xl border border-slate-200 shadow-sm" />
									</div>
								{/if}
							</div>
						{:else if method.id === 'paypal'}
							<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
								<div class="space-y-4">
									<a
										href={method.details.donateUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="primary-button"
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
										<img src={resolveStatic(method.qrCode)} alt="PayPal QR Code" class="max-w-48 rounded-xl border border-slate-200 shadow-sm" />
									</div>
								{/if}
							</div>
						{:else if method.id === 'check'}
							<div class="rounded-xl border border-slate-200 bg-slate-50 p-5">
								<p class="mb-2">
									<span class="font-semibold">Make payable to:</span> {method.details.payableTo}
								</p>
								<p>
									<span class="font-semibold">Mail to:</span> {method.details.mailingAddress}
								</p>
							</div>
						{:else if method.id === 'securities'}
							<div class="rounded-xl border border-slate-200 bg-slate-50 p-5">
								<p class="mb-3 text-slate-700">
									Make an impact by donating long-term appreciated assets including stocks, bonds, mutual funds, ETFs, or other property.
								</p>
								<p class="mb-3 text-slate-700">
									You may be able to increase your gift in a tax-efficient way, especially if it has been held for more than a year and appreciated in value.
									Please consult your tax adviser for your personal situation.
								</p>
								<div class="space-y-2 text-slate-800">
									<p><span class="font-semibold">Schwab account number:</span> {method.details.schwabAccountNumber}</p>
									<p><span class="font-semibold">Schwab DTC number:</span> {method.details.schwabDtcNumber}</p>
									<p><span class="font-semibold">EIN number:</span> {method.details.einNumber}</p>
								</div>
								<p class="mt-4 text-slate-700">
									Email
									<a href="mailto:{site.email}" class="text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{site.email}</a>
									or call
									<a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{site.phone}</a>
									for transfer instructions.
								</p>
							</div>
						{/if}
				</article>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<p class="text-slate-600">
				{site.name} is a 501(c)(3) tax-exempt organization. All donations are tax-deductible.
			</p>
			<p class="mt-2">
				Questions? <a href="mailto:{site.email}" class="text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{site.email}</a>
				or call <a href="tel:{site.phone.replace(/[^0-9]/g, '')}" class="text-blue-700 underline decoration-2 underline-offset-2 hover:text-blue-900">{site.phone}</a>
			</p>
		</div>
	</div>
</div>
