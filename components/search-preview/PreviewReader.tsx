import Icon from "../icon/Icon";
import type { SearchResult } from "./types";
import styles from "./search-preview.module.css";

type PreviewReaderProps = {
	result: SearchResult;
};

export default function PreviewReader({ result }: PreviewReaderProps) {
	return (
		<article className={styles.demoReader} aria-label="Example extracted page" aria-live="polite" aria-atomic="true">
			<header>
				<div>
					<span>PDF page {result.page}</span>
					<h3>{result.file}</h3>
				</div>
				<Icon name="document" size={18} />
			</header>
			<div className={styles.readerPaper}>
				<span className={styles.paperKicker}>City & everyday life</span>
				<h4>{result.title}</h4>
				{result.text.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
				<span className={styles.paperPage}>{result.page}</span>
			</div>
			<p className={styles.readerFooter}>Extracted page text, right beside your results.</p>
		</article>
	);
}
