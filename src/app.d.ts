// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

// Type declarations for mdsvex markdown imports
declare module '*.md' {
	import type { Component } from 'svelte';
	const component: Component;
	export default component;
}
