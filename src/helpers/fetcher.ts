export const test = ''
export const fetcher = (url: string) =>
	fetch(url)
		.then(res => res.json())
		.catch(err => console.error(`error fetching data: ${err}`))