import type { MiniFilePropsType } from "../../types";
import Icon from "../icon/Icon";

export default function MiniFile({ type }: MiniFilePropsType) {
	return (
		<span>
			<Icon name="document" size={22} />
			{type}
		</span>
	);
}
