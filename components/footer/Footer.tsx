import type { FooterPropsType } from "@/types";
import Image from "next/image";
import styles from "./footer.module.css";
import Logo from "../logo/Logo";

export default function Footer({ repository }: FooterPropsType) {
	return (
		<footer className={`${styles.footer} container`}>
			<a href="#" className="brand">
				<Logo width={28} height={28} priority={false} />
				<span>PassagePin</span>
			</a>
			<p>A little closer to what you’re looking for.</p>
			<div>
				<a href={repository} target="_blank">
					Source code
				</a>
				<a href={`${repository}/blob/main/LICENSE`} target="_blank">
					MIT License
				</a>
				Built by{" "}
				<a href="https://www.nickchachlioutis.gr" target="_blank">
					Nova Constant
				</a>
			</div>
		</footer>
	);
}
