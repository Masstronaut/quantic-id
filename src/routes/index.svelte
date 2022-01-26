<script context="module">
</script>

<script>
	import TextInput from '../components/TextInput.svelte';
	import StudentID from '../components/id.svelte';
	import Button from '../components/Button.svelte';

	/*************************************************************************************
	 *    Add your own name, id number, graduation date, and photo link to create an ID   *
	 *************************************************************************************/
	let imageUrl = 'https://randomuser.me/api/portraits/med/men/96.jpg';
	let name = 'Travis Cox';
	let id = 'greenostrich849';
	let date = 'February 2023';

	const onSubmit = async () => {
		let requestBody = {
			name,
			date,
			imageUrl,
			student_id: id,
			imageUrl: imageUrl
		};
		console.log(requestBody);
		const response = await fetch(`/api/newstudent.json`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		if (response.ok) {
			const json = await response.json();
			window.location = `/student/${json[0].id}`;
			console.log(json);
		}
	};
</script>

<div class="container">
	<div class="content">
		<div class="form">
			<h1>Create your digital Quantic student ID</h1>

			<TextInput id="name" label="Name" bind:value={name} required={true} />
			<TextInput id="studentid" label="Student ID number" bind:value={id} required={true} />
			<TextInput id="date" label="Graduation date" bind:value={date} required={true} />
			<TextInput
				id="imageUrl"
				label="Link to profile photo"
				bind:value={imageUrl}
				required={true}
			/>
			<Button on:click={onSubmit} primary>Create</Button>
		</div>

		<div class="preview">
			<StudentID {name} {id} {date} photoURL={imageUrl} />
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: var(--font-size-5);
		color: hsl(var(--color-white));
		margin-bottom: var(--spacing-5);
	}
	.container {
		background-image: linear-gradient(135deg, #ff4d63, #fff);
		height: 100vh;
		display: grid;
		justify-content: center;
		align-content: center;
	}
	.form {
		margin: var(--spacing-4);
	}
	.content {
		display: flex;
		align-items: center;
	}
</style>
