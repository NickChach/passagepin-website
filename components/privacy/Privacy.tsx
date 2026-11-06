import Image from "next/image";
import Icon from "../icon/Icon";
import styles from "./privacy.module.css";

export default function Privacy() {
	return (
		<article className="privacy-section" aria-labelledby="privacy-title">
			<div className="container privacy-inner">
				<section className="privacy-copy">
					<div className="privacy-icon">
						<Icon name="lock" size={25} />
					</div>
					<h2 id="privacy-title" className={styles.h2}>
						<span>Your reading.</span>
						<span>Your computer.</span>
					</h2>
					<p>
						Your documents don’t need to go anywhere for you to find something in them. PassagePin indexes and searches on your
						machine, with the search model included in the app.
					</p>
					<ul className="privacy-points">
						<li>
							<Icon name="check" size={17} />
							No document uploads
						</li>
						<li>
							<Icon name="check" size={17} />
							No account or API key
						</li>
						<li>
							<Icon name="check" size={17} />
							Works offline after download
						</li>
					</ul>
				</section>
				<section className="local-illustration" aria-label="PDF documents and search stay together on your computer">
					<div className="local-machine">
						<div className="machine-top">
							<span className="status-dot" />
							Your computer
							<Icon name="lock" size={15} />
						</div>
						<div className="machine-content">
							<div className="mini-files">
								<span>
									<Icon name="document" size={22} />
									Books
								</span>
								<span>
									<Icon name="document" size={22} />
									Papers
								</span>
								<span>
									<Icon name="document" size={22} />
									Reports
								</span>
							</div>
							<div className="local-connector" aria-hidden="true">
								<span />
								<span />
								<span />
							</div>
							<div className="local-app">
								<Image src="images/passagepin.svg" width={40} height={40} alt="PassagePin logo." />
								<div>
									<strong>PassagePin</strong>
									<span>A search engine for your library</span>
								</div>
								<Icon name="search" size={22} />
							</div>
							<p>Everything you need. Right here.</p>
						</div>
					</div>
					<div className="machine-base" />
				</section>
			</div>
		</article>
	);
}
