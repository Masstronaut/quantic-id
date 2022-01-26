import { supabase } from '$lib/supabase';

export async function get({ params }) {
	const { id } = params;
	if (false) {
		return {
			body: {
				"name": "Jane Smith",
				"id": id,
				"date": "February 2023",
				"imageUrl": "https://ca.slack-edge.com/T01QM9YHE80-U02NX39PQ0J-a9d466c6c244-48",
			}
		};
	}
	const { data, error, status } = await supabase
		.from("students")
		.select("*")
		.eq("id", id)
		.single();
	if (error && status !== 406) throw error;
	if (data) {
		return { body: data };
	}
}