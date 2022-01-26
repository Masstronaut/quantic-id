<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		return {
			props: { id }
		};
	}
</script>

<script>
	export let id;
</script>
