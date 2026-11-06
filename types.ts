import type { CSSProperties } from "react";

export type HeaderPropsType = {
	repository: string;
};

export type IconName = "search" | "folder" | "document" | "download" | "arrow" | "lock" | "check" | "github" | "terminal" | "plus";

export type IconPropsType = {
	name: IconName;
	size?: number;
	style?: CSSProperties;
};

export type HowToStepsPropsType = {
	number: number;
	name: IconName;
	title: string;
	description: string;
};

export type FAQPropsType = {
	repository: string;
};

export type QuestionObject = {
	question: string;
	answer: string;
};

export type DownloadPropsType = {
	repository: string;
};

export type FooterPropsType = {
	repository: string;
};
