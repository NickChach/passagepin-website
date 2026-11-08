import Icon from "../icon/Icon";
import Logo from "../logo/Logo";
import MiniFile from "../mini-file/MiniFile";
import PrivacyPoint from "../privacy-point/PrivacyPoint";
import styles from "./privacy.module.css";

export default function Privacy() {
	const privacyPoints: string[] = ["No document uploads", "No account or API key", "Works offline after download"];
	const fileTypes: string[] = ["Books", "Papers", "Reports"];

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
						{privacyPoints.map((privacyPoint) => {
							return <PrivacyPoint key={privacyPoint} privacyPoint={privacyPoint} />;
						})}
					</ul>
				</section>
				<section className={styles.localIllustration} aria-label="PDF documents and search stay together on your computer">
					<div className={styles.localMachine}>
						<div className={styles.machineTop}>
							<span className="status-dot" />
							Your computer
							<Icon name="lock" size={15} />
						</div>
						<div className={styles.machineContent}>
							<div className={styles.miniFiles}>
								{fileTypes.map((fileType) => {
									return <MiniFile key={fileType} type={fileType} />;
								})}
							</div>
							<div className={styles.localConnector} aria-hidden="true">
								<span />
								<span />
								<span />
							</div>
							<div className={styles.localApp}>
								<Logo width={40} height={40} priority={false} />
								<div>
									<strong>PassagePin</strong>
									<span>A search engine for your library</span>
								</div>
								<Icon name="search" size={22} />
							</div>
							<p>Everything you need. Right here.</p>
						</div>
					</div>
					<div className={styles.machineBase} />
				</section>
			</div>
		</article>
	);
}
