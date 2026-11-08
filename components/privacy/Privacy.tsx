import Icon from "../icon/Icon";
import PrivacyIllustration from "./PrivacyIllustration";
import styles from "./privacy.module.css";

const privacyPoints = ["No document uploads", "No account or API key", "Works offline after download"];

export default function Privacy() {
	return (
		<article className={styles.privacySection} aria-labelledby="privacy-title">
			<div className={`container ${styles.privacyInner}`}>
				<section className={styles.privacyCopy}>
					<div className={styles.privacyIcon}>
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
					<ul className={styles.privacyPoints}>
						{privacyPoints.map((point) => (
							<li key={point}>
								<Icon name="check" size={17} />
								{point}
							</li>
						))}
					</ul>
				</section>
				<PrivacyIllustration />
			</div>
		</article>
	);
}
