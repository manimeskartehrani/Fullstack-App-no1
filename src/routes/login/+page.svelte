<script lang="ts">
	export let data;
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	console.log(supabase);
	console.log(session);
</script>

<div class="hero bg-base-300 min-h-screen">
	<div class="hero-content w-[800px]">
		<div class="flex flex-col">
			<p>Create an account or login below!</p>
			<!-- Supabase Auth UI -->
			<Auth
				supabaseClient={supabase}
				theme="dark"
				appearance={{
					theme: ThemeSupa,
					style: {
						input: 'width: 400px'
					}
				}}
			/>
		</div>
	</div>
</div>
