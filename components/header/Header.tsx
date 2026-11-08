import type { HeaderPropsType } from "../../types";
import Icon from "../icon/Icon";
import Logo from "../logo/Logo";
import styles from "./header.module.css";

export default function Header({ repository }: HeaderPropsType) {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.headerInner}`}>
				<a id={styles.skipLink} href="#main">
					Skip to content
				</a>
				<a href="#" className="brand" aria-label="PassagePin home">
					<Logo width={36} height={36} priority={true} />
					<span>PassagePin</span>
				</a>
				<nav aria-label="Main navigation">
					<a href="#how-it-works">How it works</a>
					<a href="#questions">FAQs</a>
					<a href={repository} className={styles.github}>
						<Icon name="github" size={17} />
						GitHub
					</a>
				</nav>
				<a className="button button-small" href="#download">
					<Icon name="download" size={16} />
					Get PassagePin
				</a>
			</div>
		</header>
	);
}
