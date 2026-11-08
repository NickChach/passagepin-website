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

export type PrivacyPointPropsType = {
	privacyPoint: string;
};

export type HowToStepPropsType = {
	number: number;
	name: IconName;
	title: string;
	description: string;
};

export type FAQsPropsType = HeaderPropsType;

export type QuestionObject = {
	question: string;
	answer: string;
};

export type QuestionPropsType = QuestionObject;

export type DownloadPropsType = HeaderPropsType;

export type FooterPropsType = HeaderPropsType;

export type LogoPropsType = {
	width: number;
	height: number;
	priority: boolean;
};

export type StepObject = {
	number: number;
	name: IconName;
	title: string;
	description: string;
};

export type MiniFilePropsType = {
	type: string;
};
