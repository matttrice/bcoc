<script lang="ts">
	import formsData from '$lib/data/forms.json';

	interface FormConfig {
		id: string;
		formId: string;
		title: string;
		subject: string;
		submitLabel: string;
	}

	let { form }: { form: FormConfig } = $props();

	let status: 'idle' | 'submitting' | 'success' | 'error' = $state('idle');
	let errorMessage = $state('');

	const endpoint = $derived(`${formsData.formspreeEndpoint}/${form.formId}`);

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		status = 'submitting';
		const formEl = e.target as HTMLFormElement;
		const data = new FormData(formEl);

		try {
			const res = await fetch(endpoint, {
				method: 'POST',
				body: data,
				headers: { Accept: 'application/json' }
			});

			if (res.ok) {
				status = 'success';
				formEl.reset();
			} else {
				const json = await res.json();
				errorMessage = json?.errors?.map((err: { message: string }) => err.message).join(', ') || 'Something went wrong.';
				status = 'error';
			}
		} catch {
			errorMessage = 'Network error. Please try again.';
			status = 'error';
		}
	}
</script>

{#if status === 'success'}
	<div class="alert alert-success">
		<span>✅ Thank you! Your request has been sent. We'll be in touch soon.</span>
	</div>
	<button class="btn btn-ghost btn-sm mt-2" onclick={() => status = 'idle'}>Submit another</button>
{:else}
	<form onsubmit={handleSubmit} class="space-y-4">
		<input type="hidden" name="_subject" value={form.subject} />
		<input type="hidden" name="_form_type" value={form.id} />
		<!-- Honeypot for spam protection -->
		<input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />

		{#each formsData.fields as field (field.name)}
			<div class="form-control w-full">
				<label class="label" for="{form.id}-{field.name}">
					<span class="label-text">
						{field.label}
						{#if field.required}<span class="text-error">*</span>{/if}
					</span>
				</label>
				{#if field.type === 'textarea'}
					<textarea
						id="{form.id}-{field.name}"
						name={field.name}
						class="textarea textarea-bordered w-full"
						placeholder={field.placeholder}
						required={field.required}
						rows="3"
					></textarea>
				{:else}
					<input
						id="{form.id}-{field.name}"
						type={field.type}
						name={field.name}
						class="input input-bordered w-full"
						placeholder={field.placeholder}
						required={field.required}
					/>
				{/if}
			</div>
		{/each}

		{#if status === 'error'}
			<div class="alert alert-error">
				<span>❌ {errorMessage}</span>
			</div>
		{/if}

		<button type="submit" class="btn btn-primary w-full" disabled={status === 'submitting'}>
			{#if status === 'submitting'}
				<span class="loading loading-spinner loading-sm"></span>
				Sending...
			{:else}
				{form.submitLabel}
			{/if}
		</button>
	</form>
{/if}
