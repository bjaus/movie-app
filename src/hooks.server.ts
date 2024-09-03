import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.apiKey = process.env.API_KEY
	event.locals.accessToken = process.env.ACCESS_TOKEN
	return resolve(event)
}

