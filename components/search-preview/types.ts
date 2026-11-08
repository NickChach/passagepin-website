export type SearchResult = {
	file: string;
	page: number;
	score: string;
	title: string;
	text: string[];
};

export type SearchExample = {
	label: string;
	query: string;
	results: SearchResult[];
};
