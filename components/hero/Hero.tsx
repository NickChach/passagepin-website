import Icon from "../icon/Icon";
import styles from "./hero.module.css";

export default function Hero() {
	return (
		<article className="hero container" aria-labelledby="hero-title">
			<hgroup>
				<p className="release-note">
					<span className="status-dot" />A little less searching. A lot more reading.
				</p>
				<h1 id="hero-title" className={styles.h1}>
					<span>Find the page </span>
					<span>you had in mind.</span>
				</h1>
			</hgroup>
			<section className="hero-description">
				<p>You remember the idea. PassagePin finds the passage.</p>
				<p>Search your PDF library by meaning, even when the words escape you.</p>
			</section>
			<div className="hero-actions">
				<a className="button" href="#download">
					<Icon name="download" size={18} />
					Get PassagePin for Linux
				</a>
				<a className="text-link" href="#preview">
					See it in action
					<Icon name="arrow" size={17} />
				</a>
			</div>
			<p className="hero-note">Free & open source. Your data stay yours.</p>
		</article>
	);
}
