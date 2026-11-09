export default function robots() {
	const baseUrl = "https://www.passagepin.com";

	return {
		rules: {
			userAgent: "*",
			allow: ["/"],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
