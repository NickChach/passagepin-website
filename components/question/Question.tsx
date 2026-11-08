import type { QuestionPropsType } from "../../types";
import Icon from "../icon/Icon";

export default function Question({ question, answer }: QuestionPropsType) {
	return (
		<details>
			<summary>
				{question}
				<Icon name="plus" size={18} />
			</summary>
			<p>{answer}</p>
		</details>
	);
}
