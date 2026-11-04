import type { HeaderPropsType } from "../../types";

import Image from "next/image";
import Icon from "../icon/Icon";

export default function Header({ repository }: HeaderPropsType) {
	return (
		<header className="site-header">
			<div className="container header-inner">
				<a className="skip-link" href="#main">
					Skip to content
				</a>
				<a href="#" className="brand" aria-label="PassagePin home">
					<Image src="images/passagepin.svg" width={36} height={36} alt="PassagePin logo." priority />
					<span>PassagePin</span>
				</a>
				<nav aria-label="Main navigation">
					<a href="#how-it-works">How it works</a>
					<a href="#questions">FAQs</a>
					<a href={repository} className="github-nav">
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
