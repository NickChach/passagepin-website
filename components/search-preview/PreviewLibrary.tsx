import Icon from "../icon/Icon";
import Logo from "../logo/Logo";
import styles from "./search-preview.module.css";

export default function PreviewLibrary() {
	return (
		<aside className={styles.appSidebar} aria-label="Example library">
			<div className={styles.previewBrand}>
				<Logo width={30} height={30} />
				<strong>PassagePin</strong>
			</div>
			<div className={styles.sidebarLabel}>Your library</div>
			<div className={styles.sampleLibrary}>
				<Icon name="folder" size={19} />
				<div>
					<strong>City & everyday life</strong>
					<span>Example PDF library</span>
				</div>
			</div>
			<div className={styles.libraryInfo}>
				<span>Documents</span>
				<strong>3 PDFs</strong>
			</div>
			<div className={styles.indexedState}>
				<Icon name="check" size={13} /> Indexed and searchable
			</div>
			<div className={styles.sampleFiles}>
				{["Streets for people", "The changing city", "Urban field notes"].map((name) => (
					<span key={name}>
						<Icon name="document" size={14} />
						{name}
					</span>
				))}
			</div>
			<div className={styles.localState}>
				<span className="status-dot" /> Built for local search
				<span>
					<Icon name="lock" size={12} /> Your data stay on your computer
				</span>
			</div>
		</aside>
	);
}
