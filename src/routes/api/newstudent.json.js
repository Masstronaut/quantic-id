import { supabase } from "$lib/supabase";

export async function post({ request }) {
	//get response body from post
	//add to database
	const req = await request.json();
	const name = req.name;
	const date = req.date;
	const student_id = req.student_id;
	const imageUrl = req.imageUrl

	console.log(req);
	const { data, error } = await supabase
		.from('students')
		.insert([
			{
				name: name,
				date: date,
				student_id: student_id,
				imageUrl: imageUrl
			},
		])

	if (error) throw error;
	if (data) {
		return { body: data };
	}
}