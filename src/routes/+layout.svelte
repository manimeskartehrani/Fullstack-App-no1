<script>
	export let data;
	import { goto, invalidate, invalidateAll } from '$app/navigation';
	import '../app.css';

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	// session is null, if session is null we have no user.if it's not null, we have a user

	supabase.auth.onAuthStateChange(async (event, session) => {
		if (event === 'SIGNED_IN') {
			invalidateAll();
		}
		if (event === 'SIGNED_OUT') {
			await goto('login');
			invalidateAll();
		}
	});
</script>

<!-- Navbar -->
<div class=" bg-base-300 fixed left-0 right-0 top-0 justify-between">
	<div class="navbar mx-auto max-w-3xl justify-between">
		<!-- left side of navbar -->
		<div>
			<a href="/" class="btn btn-ghost text-xl">PokePage</a>
			{#if session !== null}
				<a href="/{session.user.email}" class="btn btn-ghost">My Page</a>
			{/if}
		</div>

		<!-- right side of navbar -->
		<div>
			{#if session == null}
				<button on:click={() => goto('./login')}>Login</button>
			{:else}
				<span class="ml-2 mr-2 text-lg text-white">{session.user.email}</span>
				<button
					on:click={async () => {
						await supabase.auth.signOut();
					}}>Logout</button
				>
			{/if}
		</div>
	</div>
</div>

<slot></slot>
