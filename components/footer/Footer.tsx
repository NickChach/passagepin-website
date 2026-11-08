import type { RepositoryProps } from "@/types";
import styles from "./footer.module.css";
import Logo from "../logo/Logo";

export default function Footer({ repository }: RepositoryProps) {
	return (
		<footer className={`${styles.footer} container`}>
			<a href="#" className="brand">
				<Logo width={28} height={28} />
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
