import type { FooterPropsType } from "@/types";
import Image from "next/image";

export default function Footer({ repository }: FooterPropsType) {
	return (
		<footer className="site-footer container">
			<a href="#" className="brand">
				<Image src="/passagepin.svg" width={28} height={28} alt="" />
				<span>PassagePin</span>
			</a>
			<p>A little closer to what you’re looking for.</p>
			<div>
				<a href={repository}>Source code</a>
				<a href={`${repository}/blob/main/LICENSE`}>MIT License</a>
			</div>
		</footer>
	);
}
