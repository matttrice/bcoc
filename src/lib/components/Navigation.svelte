<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import site from '$lib/data/site.json';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: `${base}/`, label: 'Home' },
		{ href: `${base}/about`, label: 'About' },
		{ href: `${base}/donate`, label: 'Donate' },
		{ href: `${base}/contact`, label: 'Contact' }
	];

	function isActive(href: string) {
		if (href === `${base}/`) return page.url.pathname === `${base}/` || page.url.pathname === base;
		return page.url.pathname.startsWith(href);
	}
</script>

<div class="navbar bg-base-100 shadow-lg sticky top-0 z-50">
	<div class="navbar-start">
		<div class="dropdown">
			<button 
				type="button" 
				class="btn btn-ghost lg:hidden" 
				onclick={() => mobileMenuOpen = !mobileMenuOpen}
				onkeydown={(e) => e.key === 'Enter' && (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle menu" 
				aria-expanded={mobileMenuOpen}>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
				</svg>
			</button>

			{#if mobileMenuOpen}
				<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
					{#each navLinks as link (link.href)}
						<li>
							<a 
								href={link.href} 
								class:active={isActive(link.href)}
								onclick={() => mobileMenuOpen = false}
							>
								{link.label}
							</a>
						</li>
					{/each}
					<li>
						<a 
							href={site.links.mbs} 
							target="_blank" 
							rel="noopener noreferrer"
							onclick={() => mobileMenuOpen = false}
						>
							📖 Master Bible Study
						</a>
					</li>
				</ul>
			{/if}
		</div>

		<!-- Logo + Name - Much Larger -->
		<a href="{base}/" class="btn btn-ghost gap-3 px-2">
			<img src="{base}/logo_sm.png" alt="{site.name} logo" class="h-9 w-9 rounded-full" />
			<span class="text-2xl font-bold hidden sm:inline tracking-tight">
				{site.shortName}
			</span>
		</a>
	</div>

	<!-- Desktop Navigation - Larger Text -->
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 gap-2 text-lg">   <!-- text-lg makes desktop links bigger -->
			{#each navLinks as link (link.href)}
				<li>
					<a 
						href={link.href} 
						class:active={isActive(link.href)}
						class="px-4 py-2 font-medium"
					>
						{link.label}
					</a>
				</li>
			{/each}
			<li>
				<a 
					href={site.links.mbs} 
					target="_blank" 
					rel="noopener noreferrer"
					class="px-4 py-2 font-medium"
				>
					📖 Master Bible Study
				</a>
			</li>
		</ul>
	</div>

	<div class="navbar-end">
		<a href="{base}/contact" class="btn btn-primary">Get In Touch</a>
	</div>
</div>