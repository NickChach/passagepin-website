import type { CSSProperties, ReactNode } from "react";
import type { IconName } from "@/types";

type IconProps = {
	name: IconName;
	size?: number;
	style?: CSSProperties;
};

const paths: Record<IconName, ReactNode> = {
	search: (
		<>
			<circle cx="10.5" cy="10.5" r="6.5" />
			<path d="m16 16 4.5 4.5" />
		</>
	),
	folder: <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />,
	document: (
		<>
			<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
			<path d="M14 3v6h6M8 13h8M8 17h6" />
		</>
	),
	download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4" />,
	arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
	lock: (
		<>
			<rect x="5" y="10" width="14" height="11" rx="2" />
			<path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" />
		</>
	),
	check: <path d="m5 12 4 4L19 6" />,
	github: (
		<path d="M9 20c-4 1-4-2-6-2m12 4v-4a3.5 3.5 0 0 0-1-2.5c3.4-.4 7-1.7 7-7A5.4 5.4 0 0 0 19.5 5a5 5 0 0 0-.1-3.5S18.1 1.1 15 3a13.4 13.4 0 0 0-6 0C5.9 1.1 4.6 1.5 4.6 1.5A5 5 0 0 0 4.5 5 5.4 5.4 0 0 0 3 8.5c0 5.3 3.6 6.6 7 7A3.5 3.5 0 0 0 9 18v4" />
	),
	terminal: (
		<>
			<rect x="3" y="4" width="18" height="16" rx="2" />
			<path d="m7 9 3 3-3 3m6 0h4" />
		</>
	),
	plus: <path d="M12 5v14M5 12h14" />,
};

export default function Icon({ name, size = 20, style }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			style={style}
		>
			{paths[name]}
		</svg>
	);
}
