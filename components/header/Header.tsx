import type { RepositoryProps } from "../../types";
import Icon from "../icon/Icon";
import Logo from "../logo/Logo";
import styles from "./header.module.css";

export default function Header({ repository }: RepositoryProps) {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.headerInner}`}>
				<a id={styles.skipLink} href="#main">
					Skip to content
				</a>
				<a href="#" className="brand" aria-label="PassagePin home">
					<Logo width={36} height={36} preload={true} />
					<span>PassagePin</span>
				</a>
				<nav aria-label="Main navigation">
					<a href="#how-it-works">How it works</a>
					<a href="#questions">FAQs</a>
					<a href={repository} className={styles.github} target="_blank">
						<Icon name="github" size={17} />
						GitHub
					</a>
				</nav>
				<a
					className="button button-small"
					href="https://github.com/NickChach/passagepin/releases/download/v1.0.0/PassagePin-1.0.0-x86_64.AppImage"
				>
					<Icon name="download" size={16} />
					Get PassagePin
				</a>
			</div>
		</header>
	);
}
