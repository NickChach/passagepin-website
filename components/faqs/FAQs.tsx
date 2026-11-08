import type { RepositoryProps } from "@/types";
import Question, { type QuestionProps } from "../question/Question";
import styles from "./faqs.module.css";

const questions: QuestionProps[] = [
	{
		question: "Does PassagePin need an internet connection?",
		answer: "The packaged desktop app includes the search model and runtime. After downloading the app, you can index and search your library offline. Your PDF contents and search queries stay on your computer by design.",
	},
	{
		question: "Can I search scanned PDFs?",
		answer: "PassagePin searches text contained in your PDFs. Image-only scans need OCR first, using a separate tool. Once a scan has a readable text layer, you can add it to your library and update the index.",
	},
	{
		question: "Which languages does it work best with?",
		answer: "The current search model is intended for English. Other languages will produce results, but their search quality has not been validated.",
	},
	{
		question: "What happens when my files change?",
		answer: 'Click "Check for changes" in the app, then update your index. PassagePin processes added and changed PDFs, reuses work where it can and removes deleted files from the index. You decide when to update.',
	},
	{
		question: "Is it available for Windows or macOS?",
		answer: "The current desktop packages target Linux x86-64 with glibc 2.38 or newer. Windows and macOS packages will become available in a future release.",
	},
];

export default function FAQs({ repository }: RepositoryProps) {
	return (
		<article className={`${styles.questionsSection} container`} id="questions" aria-labelledby="questions-title">
			<div>
				<h2 id="questions-title" className={styles.h2}>
					<span>A few things </span>
					<span>you might be wondering.</span>
				</h2>
				<p>
					More details, build instructions and the CLI live in the{" "}
					<a href={repository} target="_blank">
						project documentation
					</a>
					.
				</p>
			</div>
			<div>
				{questions.map(({ question, answer }) => (
					<Question key={question} question={question} answer={answer} />
				))}
			</div>
		</article>
	);
}
