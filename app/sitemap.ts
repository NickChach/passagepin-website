export default function sitemap() {
	const baseUrl: string = "https://www.passagepin.com";

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1,
		},
	];
}
