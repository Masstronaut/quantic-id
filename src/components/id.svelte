<script>
	import QuanticLogoSVG from './quanticLogo.svelte';
	export let photoURL;
	export let name;
	export let id;
	export let date;
</script>

<div class="card">
	<QuanticLogoSVG />
	<div class="profile">
		<img class="profile-photo" src={photoURL} alt="" />
		<div class="profile-info">
			<p class="profile-name">{name}</p>
			<p class="profile-id">{id}</p>
		</div>
		<div class="dates">
			<p>Graduation</p>
			<p>{date}</p>
		</div>
	</div>
	<div class="student">Student</div>
</div>

<style>
	.profile {
		display: flex;
	}
	.profile-info,
	.dates {
		margin-left: 10px;
		display: flex;
		flex-direction: column;
		line-height: 1;
		justify-content: space-around;
	}
	.dates {
		justify-self: flex-end;
		text-align: right;
		margin-left: auto;
	}
	p {
		margin: 0;
		font-size: var(--font-size-3);
	}
	.profile-photo {
		border-radius: 10px;
		border: 1px solid white;
	}
	.card {
		width: 400px;
		background: #ff4d63;
		padding: 10px 10px 0 10px;
		border-radius: 15px;
		font-family: sans-serif;
		color: white;
	}
	.student {
		overflow: hidden;
		width: calc(100% + 20px);
		height: 40px;
		transform: translateX(-10px);
		background: white;
		color: #ff4d63;
		margin-top: 50px;
		padding-top: 10px;
		margin-bottom: none;
		border-radius: 0 0 14px 14px;
		text-align: center;
		font-weight: 700;
		font-size: 24px;
		vertical-align: center;
	}
</style>
