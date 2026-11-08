import Icon from "../icon/Icon";
import styles from "./question.module.css";

export type QuestionProps = {
	question: string;
	answer: string;
};

export default function Question({ question, answer }: QuestionProps) {
	return (
		<details className={styles.question}>
			<summary>
				{question}
				<Icon name="plus" size={18} />
			</summary>
			<p>{answer}</p>
		</details>
	);
}
