import Icon from "../icon/Icon";
import styles from "./hero.module.css";

export default function Hero() {
	return (
		<article className={`${styles.hero} container`} aria-labelledby="hero-title">
			<hgroup>
				<p className={styles.releaseNote}>
					<span className="status-dot" />A little less searching. A lot more reading.
				</p>
				<h1 id="hero-title" className={styles.h1}>
					<span>Find the page </span>
					<span>you had in mind.</span>
				</h1>
			</hgroup>
			<section className={styles.heroDescription}>
				<p>You remember the idea. PassagePin finds the passage.</p>
				<p>Search your PDF library by meaning, even when the words escape you.</p>
			</section>
			<div className={styles.heroActions}>
				<a
					className="button"
					href="https://github.com/NickChach/passagepin/releases/download/v1.0.0/PassagePin-1.0.0-x86_64.AppImage"
				>
					<Icon name="download" size={18} />
					Get PassagePin for Linux
				</a>
				<a className="text-link" href="#preview">
					See it in action
					<Icon name="arrow" size={17} />
				</a>
			</div>
			<p className={styles.heroNote}>Free & open source. Your data stay yours.</p>
		</article>
	);
}
