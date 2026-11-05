import HowToSteps from "../how-to-steps/HowToSteps";
import styles from "./how-it-works.module.css";

export default function HowItWorks() {
	return (
		<article className="how-section container" id="how-it-works" aria-labelledby="how-title">
			<hgroup className="section-intro">
				<h2 id="how-title" className={styles.h2}>
					<span>From a folder of PDFs </span>
					<span>to the right page.</span>
				</h2>
				<p>Books, papers, reports and all the things you saved for later. Put them to work in three steps.</p>
			</hgroup>
			<ol className={`steps ${styles.ol}`}>
				<HowToSteps
					number={1}
					name="folder"
					title="Bring your library"
					description="Select a folder of PDFs. Keep separate libraries for different projects, subjects or PDF collections."
				/>
				<HowToSteps
					number={2}
					name="search"
					title="Follow an idea"
					description="Index your library, then describe what you’re looking for. Search for a subject, not just an exact phrase."
				/>
				<HowToSteps
					number={3}
					name="document"
					title="Get back to reading"
					description="Explore ranked pages and read their text beside the results. Open the original PDF in your own viewer."
				/>
			</ol>
		</article>
	);
}
