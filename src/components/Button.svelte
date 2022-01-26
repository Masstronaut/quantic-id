<script>
	export let href = null;
	export let primary = false;
	export let disabled = false;
	// available sizes: s, m, l
	export let size = 'm';
</script>

<button
	on:click
	{href}
	class={`Button Button-${size}${primary ? ' button-primary' : ''}`}
	{disabled}><slot /></button
>

<style>
	.Button {
		border-radius: var(--corner-radius-primary);
		color: hsl(var(--color-primary));
		cursor: pointer;
		width: min-content;
		white-space: nowrap;
		transition: all 0.25s;
	}
	.Button:not(.button-primary) {
		border: 3px solid hsl(var(--color-primary));
	}
	.Button-s {
		padding: var(--spacing-1) var(--spacing-2);
		font-size: var(--font-size-3);
	}
	.Button-m {
		padding: var(--spacing-2) var(--spacing-3);
		font-size: var(--font-size-4);
	}
	.Button-l {
		padding: var(--spacing-3) var(--spacing-4);
		font-size: var(--font-size-5);
	}
	.button-primary {
		color: white;
		background: #ff4d63;
		--shadow-color: hsl(var(--color-primary));
		box-shadow: var(--shadow-small);
	}
	.button-primary:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-medium);
	}
	.button-primary:active {
		transform: translateY(-2px);
		box-shadow: var(--shadow-xsmall);
	}

	.Button:disabled
	/*,	.Button[disabled='true'] */ {
		cursor: not-allowed;
		color: hsl(var(--color-gray-500));
		background: hsl(var(--color-gray-200));
		--shadow-color: hsl(var(--color-gray-200));
		box-shadow: none;
	}
</style>
