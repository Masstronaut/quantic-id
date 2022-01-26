<script>
	import StudentID from '../components/id.svelte';

	/*************************************************************************************
	 *    Add your own name, id number, graduation date, and photo link to create an ID   *
	 *************************************************************************************/
	let photoURL = 'https://ca.slack-edge.com/T01QM9YHE80-U02NX39PQ0J-a9d466c6c244-48';
	let name = 'Jane Smith';
	let id = 'Q123456789123456789';
	let date = 'February 2023';
</script>

<div class="container">
	<StudentID {name} {id} {date} {photoURL} />
</div>

<style>
	.container {
		background-image: linear-gradient(135deg, #ff4d63, #fff);
		height: 100vh;
		display: grid;
		justify-content: center;
		align-content: center;
	}
</style>
