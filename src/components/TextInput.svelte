<script>
	export let id;
	export let label;
	export let required = false;
	export let inputProps = {};
	export let labelProps = {};
	/* to get the value back out, use 
	`bind:value={yourVarHere}` as a prop in the parent component */
	export let value = '';
</script>

<div class="input__container">
	<input
		{required}
		type="text"
		name={id}
		{id}
		placeholder=" "
		bind:value
		on:input
		on:click
		{...inputProps}
	/>
	<label for={id} {...labelProps}>{label}</label>
</div>

<style>
	.input__container {
		position: relative;
		margin: var(--spacing-3) 0 var(--spacing-4);
	}
	input {
		background: hsl(var(--color-gray-50));
		box-shadow: var(--shadow-medium);
		border-radius: var(--corner-radius-primary);
		border: 1px solid hsl(var(--color-gray-100));
		transition: all 0.2s;
		color: hsl(var(--color-gray-600));
		width: calc(100% - var(--spacing-3));
		padding: var(--spacing-3);
		padding-top: var(--spacing-4);
		padding-left: var(--spacing-4);
		font-size: var(--font-size-4);
	}
	label {
		position: absolute;
		/* Offset the top & left based on the border, padding, and margin
		 of the input element */
		left: calc(var(--spacing-4) + 1px);
		top: calc(var(--spacing-4) + 1px);
		font-size: var(--font-size-4);
		color: hsl(var(--color-gray-500));
		pointer-events: none;
		transition: transform 0.3s ease, font-size 0.3s ease;
	}
	label::first-letter {
		text-transform: capitalize;
	}
	input:focus + label,
	input:not(:placeholder-shown) + label {
		transform-origin: top left;
		transform: translateY(-100%);
		font-size: var(--font-size-1);
	}
	input:focus {
		--color-shadow: hsl(var(--color-primary-500));
		box-shadow: var(--shadow-medium);
		border: 1px solid hsla(var(--color-primary-300));
		background: hsl(var(--color-primary-50));
		color: hsl(var(--color-gray-800));
	}
</style>
