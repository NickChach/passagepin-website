"use client";

import { useState, type ReactNode } from "react";
import Icon from "../icon/Icon";
import { examples } from "./examples";
import PreviewReader from "./PreviewReader";
import SearchResults from "./SearchResults";
import styles from "./search-preview.module.css";

type SearchDemoProps = {
	library: ReactNode;
};

export default function SearchDemo({ library }: SearchDemoProps) {
	const [selection, setSelection] = useState({ exampleIndex: 0, resultIndex: 0 });
	const current = examples[selection.exampleIndex];
	const result = current.results[selection.resultIndex];

	return (
		<>
			<section className={styles.exampleSwitcher}>
				<span>Explore an example:</span>
				<div className={styles.exampleOptions} role="group" aria-label="Example search topics">
					{examples.map((item, index) => (
						<button
							key={item.label}
							type="button"
							aria-pressed={selection.exampleIndex === index}
							onClick={() => setSelection({ exampleIndex: index, resultIndex: 0 })}
						>
							{item.label}
						</button>
					))}
				</div>
			</section>
			<section className={styles.appWindow}>
				<div className={styles.windowBar}>
					<span className={styles.windowDots} aria-hidden="true">
						<i />
						<i />
						<i />
					</span>
					<span>PassagePin</span>
					<span className={styles.windowExample}>Interactive preview</span>
				</div>
				<div className={styles.appBody}>
					{library}
					<div className={styles.appWorkspace}>
						<div className={styles.appSearchHeader}>
							<h2>Find a passage</h2>
							<div className={styles.demoQuery}>
								<Icon name="search" />
								<p>{current.query}</p>
								<span>Example search</span>
							</div>
							<p className={styles.searchHint}>Search by subject, idea, or question.</p>
						</div>
						<div className={styles.demoResultsHeading}>
							<strong>{current.results.length} ranked pages</strong>
							<span>Choose a result to read the passage</span>
						</div>
						<div className={styles.readingLayout}>
							<SearchResults
								results={current.results}
								selectedIndex={selection.resultIndex}
								onSelect={(resultIndex) => setSelection({ ...selection, resultIndex })}
							/>
							<PreviewReader result={result} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
