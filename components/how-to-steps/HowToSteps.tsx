import type { HowToStepsPropsType } from "@/types";
import Icon from "../icon/Icon";

export default function HowToSteps({ number, name, title, description }: HowToStepsPropsType) {
	return (
		<li className="step">
			<div className="step-top">
				<span>{number}</span>
				<Icon name={name} size={25} />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}
