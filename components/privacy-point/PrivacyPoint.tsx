import type { PrivacyPointPropsType } from "../../types";
import Icon from "../icon/Icon";

export default function PrivacyPoint({ privacyPoint }: PrivacyPointPropsType) {
	return (
		<li>
			<Icon name="check" size={17} />
			{privacyPoint}
		</li>
	);
}
