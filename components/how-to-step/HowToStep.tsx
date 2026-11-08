import type { IconName } from "@/types";
import Icon from "../icon/Icon";
import styles from "./how-to-step.module.css";

export type HowToStepProps = {
	number: number;
	name: IconName;
	title: string;
	description: string;
};

export default function HowToStep({ number, name, title, description }: HowToStepProps) {
	return (
		<li className={styles.step}>
			<div className={styles.stepTop}>
				<span>{number}</span>
				<Icon name={name} size={25} />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}
