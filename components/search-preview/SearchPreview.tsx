import PreviewLibrary from "./PreviewLibrary";
import SearchDemo from "./SearchDemo";
import styles from "./search-preview.module.css";

export default function SearchPreview() {
	return (
		<article className="container">
			<div id="preview" aria-label="Interactive PassagePin example">
				<SearchDemo library={<PreviewLibrary />} />
				<p className={styles.previewCaption}>
					An interactive illustration with sample documents and rankings. Your real searches run locally in the desktop app.
				</p>
			</div>
		</article>
	);
}
