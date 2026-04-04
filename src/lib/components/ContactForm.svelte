<script lang="ts">
	import formsData from '$lib/data/forms.json';

	interface FieldConfig {
		name: string;
		label: string;
		type: string;
		required: boolean;
		placeholder: string;
	}

	interface FormConfig {
		id: string;
		formId: string;
		title: string;
		subject: string;
		submitLabel: string;
		fields?: string[];
	}

	let { form }: { form: FormConfig } = $props();

	let status: 'idle' | 'submitting' | 'success' | 'error' = $state('idle');
	let errorMessage = $state('');

	const allFields = formsData.fields as FieldConfig[];
	const endpoint = $derived(`${formsData.formspreeEndpoint}/${form.formId}`);
	const activeFields = $derived(
		form.fields?.length ? allFields.filter((field) => form.fields?.includes(field.name)) : allFields
	);
	const isConfigured = $derived(!form.formId.startsWith('YOUR_FORM_ID'));

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		if (!isConfigured) {
			errorMessage = 'This form is not configured yet. Add your Formspree ID in src/lib/data/forms.json.';
			status = 'error';
			return;
		}

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
	<div class="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
		Thank you. Your request has been sent and we will be in touch soon.
	</div>
	<button class="secondary-button mt-3" onclick={() => (status = 'idle')}>Submit another</button>
{:else}
	{#if !isConfigured}
		<div class="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
			Form is in setup mode. Replace <strong>YOUR_FORM_ID</strong> in forms configuration to activate submission.
		</div>
	{/if}

	<form onsubmit={handleSubmit} class="space-y-4" novalidate>
		<input type="hidden" name="_subject" value={form.subject} />
		<input type="hidden" name="_form_type" value={form.id} />
		<!-- Honeypot for spam protection -->
		<input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />

		{#each activeFields as field (field.name)}
			<div>
				<label class="mb-1.5 block text-sm font-semibold text-slate-800" for="{form.id}-{field.name}">
					<span>
						{field.label}
						{#if field.required}<span class="text-rose-600">*</span>{/if}
					</span>
				</label>
				{#if field.type === 'textarea'}
					<textarea
						id="{form.id}-{field.name}"
						name={field.name}
						class="textarea-field"
						placeholder={field.placeholder}
						required={field.required}
						rows="3"
					></textarea>
				{:else}
					<input
						id="{form.id}-{field.name}"
						type={field.type}
						name={field.name}
						class="input-field"
						placeholder={field.placeholder}
						required={field.required}
					/>
				{/if}
			</div>
		{/each}

		{#if status === 'error'}
			<div class="rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-900" role="alert">
				{errorMessage}
			</div>
		{/if}

		<button type="submit" class="primary-button w-full disabled:cursor-not-allowed disabled:opacity-60" disabled={status === 'submitting'}>
			{#if status === 'submitting'}
				Sending...
			{:else}
				{form.submitLabel}
			{/if}
		</button>
	</form>
{/if}
