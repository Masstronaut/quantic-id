import { supabase } from '$lib/supabase';

export async function get({ params }) {
	const { id } = params;
	supabase.from("students").select();
}