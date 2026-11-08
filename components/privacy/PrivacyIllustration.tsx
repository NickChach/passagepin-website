import Icon from "../icon/Icon";
import Logo from "../logo/Logo";
import styles from "./privacy.module.css";

const fileTypes = ["Books", "Papers", "Reports"];

export default function PrivacyIllustration() {
	return (
		<section className={styles.localIllustration} aria-label="PDF documents and search stay together on your computer">
			<div className={styles.localMachine}>
				<div className={styles.machineTop}>
					<span className="status-dot" />
					Your computer
					<Icon name="lock" size={15} />
				</div>
				<div className={styles.machineContent}>
					<div className={styles.miniFiles}>
						{fileTypes.map((fileType) => (
							<span key={fileType}>
								<Icon name="document" size={22} />
								{fileType}
							</span>
						))}
					</div>
					<div className={styles.localConnector} aria-hidden="true">
						<span />
						<span />
						<span />
					</div>
					<div className={styles.localApp}>
						<Logo width={40} height={40} />
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
	);
}
