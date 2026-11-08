import Icon from "../icon/Icon";
import type { SearchResult } from "./types";
import styles from "./search-preview.module.css";

type SearchResultsProps = {
	results: SearchResult[];
	selectedIndex: number;
	onSelect: (index: number) => void;
};

export default function SearchResults({ results, selectedIndex, onSelect }: SearchResultsProps) {
	return (
		<ol className={styles.demoResults} aria-label="Example matching pages">
			{results.map((result, index) => (
				<li key={`${result.file}:${result.page}`}>
					<button
						type="button"
						aria-current={index === selectedIndex ? "true" : undefined}
						onClick={() => onSelect(index)}
					>
						<span className={styles.resultPosition}>{index + 1}</span>
						<Icon name="document" size={21} />
						<span className={styles.resultDetails}>
							<strong>{result.file}</strong>
							<span>City & everyday life</span>
							<span className={styles.resultMeta}>
								PDF page {result.page}
								<span>Similarity {result.score}</span>
							</span>
						</span>
						</button>
				</li>
			))}
		</ol>
	);
}
