<script context="module">
	export async function load({ params }) {
		const id = params.id;
		return {
			props: { id }
		};
	}
</script>

<script>
	export let id;
</script>

Hi {id}.
