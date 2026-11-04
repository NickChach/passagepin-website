import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "PassagePin — Find the page you had in mind",
	description:
		"Search your PDF library by meaning. PassagePin finds relevant pages, keeps your documents on your computer, and works offline. Free and open source for Linux.",
	applicationName: "PassagePin",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
