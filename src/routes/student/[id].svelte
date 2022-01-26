<script context="module">
	export async function load({ params, fetch }) {
		const id = params.id;
		const res = await fetch(`/api/id/${id}.json`);
		if (res.ok) {
			return {
				props: { student: await res.json() }
			};
		} else {
			return {
				props: { student: null }
			};
		}
	}
</script>

<script>
	import StudentID from '../../components/id.svelte';
	export let student;
</script>

<StudentID
	name={student.name}
	id={student.student_id}
	photoURL={student.imageUrl}
	date={student.date}
/>
