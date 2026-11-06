import SearchPreview from "../components/search-preview/SearchPreview";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Privacy from "@/components/privacy/Privacy";
import FAQ from "@/components/faq/FAQ";
import Download from "@/components/download/Download";
import Footer from "@/components/footer/Footer";

const repository: string = "https://github.com/NickChach/passagepin";

export default function Home() {
	return (
		<>
			<Header repository={repository} />
			<main id="main">
				<Hero />
				<SearchPreview />
				<HowItWorks />
				<Privacy />
				<FAQ repository={repository} />
				<Download repository={repository} />
			</main>
			<Footer repository={repository} />
		</>
	);
}
