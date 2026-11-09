import { Noto_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const NotoSans = Noto_Sans({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "PassagePin — Find the page you had in mind",
	description:
		"Search your PDF library by meaning. PassagePin finds relevant pages, keeps your documents on your computer and works offline. Free and open source.",
	applicationName: "PassagePin",
	keywords: ["PassagePin", "semantic search", "PDF", "search PDF", "find passage", "find in PDF", "open source", "free software"],
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" data-scroll-behavior="smooth" className={NotoSans.className}>
			<body>{children}</body>
		</html>
	);
}
