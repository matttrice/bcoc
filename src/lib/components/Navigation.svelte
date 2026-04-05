<script lang="ts">
	import { asset, base, resolve } from '$app/paths';
	import { page } from '$app/state';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ path: '/', label: 'Home' },
		{ path: '/about/', label: 'About' },
		{ path: '/study/', label: 'Bible Study' },
		{ path: '/contact/', label: 'Contact' }
	] as const;

	type NavLinkPath = (typeof navLinks)[number]['path'];

	function normalizePath(path: NavLinkPath) {
		return path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
	}

	function isActive(path: NavLinkPath) {
		const currentRouteId = page.route.id ?? '';
		const normalizedPath = normalizePath(path);

		if (normalizedPath === '/') {
			return currentRouteId === '/';
		}

		return currentRouteId === normalizedPath || currentRouteId.startsWith(`${normalizedPath}/`);
	}

	function navHref(path: NavLinkPath) {
		return path === '/' ? `${base}/` : `${base}${path}`;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>


<header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
	<div class="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-1.5 sm:px-6">
		<a href={resolve('/')} class="flex items-center gap-3 rounded-xl px-0.5 py-0 transition hover:bg-slate-100 sm:min-w-[21.5rem] lg:min-w-[25rem]" aria-label="Go to homepage">
			<img src={asset('/logo_sm.png')} alt="Berthoud Church of Christ logo" class="h-[4.75rem] w-[4.75rem] object-contain sm:h-[5.25rem] sm:w-[5.25rem]" />
			<span class="hidden sm:block leading-none">
				<span class="church-wordmark block text-[22px] font-semibold tracking-[0.16em] text-slate-900">BERTHOUD</span>
				<span class="church-wordmark mt-0.5 block text-[14px] tracking-[0.2em] text-slate-700">CHURCH OF CHRIST</span>
			</span>
		</a>

		<nav class="hidden items-center gap-0.5 lg:flex">
			{#each navLinks as link (link.path)}
				<a
					href={navHref(link.path)}
					class={`rounded-lg px-2.5 py-1.5 text-[0.95rem] font-semibold transition ${
						isActive(link.path)
							? 'bg-blue-50 text-blue-800'
							: 'text-slate-700 hover:bg-slate-100'
					}`}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<button
			type="button"
			class="inline-flex items-center rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			onkeydown={(e) => e.key === 'Enter' && (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Toggle menu"
			aria-expanded={mobileMenuOpen}
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>

	{#if mobileMenuOpen}
		<div class="border-t border-slate-200 bg-white px-4 py-3 lg:hidden sm:px-6">
			<nav class="flex flex-col gap-1">
				{#each navLinks as link (link.path)}
					<a
						href={navHref(link.path)}
						onclick={closeMobileMenu}
						class={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
							isActive(link.path)
								? 'bg-blue-50 text-blue-800'
								: 'text-slate-700 hover:bg-slate-100'
						}`}
					>
						{link.label}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>