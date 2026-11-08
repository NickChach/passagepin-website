import Icon from "../icon/Icon";
import type { IconName, RepositoryProps } from "@/types";
import styles from "./download.module.css";
import Logo from "../logo/Logo";

type DownloadPackage = {
	name: string;
	icon: IconName;
	instructions: string;
	requirements: string;
};

const packages: DownloadPackage[] = [
	{
		name: "AppImage",
		icon: "download",
		instructions: "Make it executable, then launch.",
		requirements: "Requires AppImage support, usually FUSE.",
	},
	{
		name: "Compressed archive",
		icon: "folder",
		instructions: "Extract and run the included app.",
		requirements: "An alternative without the FUSE requirement.",
	},
];

export default function Download({ repository }: RepositoryProps) {
	return (
		<section className={`${styles.downloadSection} container`} id="download" aria-labelledby="download-title">
			<div className={styles.downloadPanel}>
				<div className={styles.downloadCopy}>
					<Logo width={56} height={56} />
					<h2 id="download-title" className={styles.h2}>
						<span>There’s more in your library.</span>
						<span>Go find it.</span>
					</h2>
					<p>Get PassagePin and give your PDFs a new way to be explored.</p>
					<a className="button" href={`${repository}/releases`} target="_blank">
						<Icon name="download" size={18} />
						View Linux downloads
					</a>
					<p className={styles.systemNote}>Linux x86-64 · glibc 2.38 or newer</p>
				</div>
				<div className={styles.downloadDetails}>
					<h3>Pick the package that suits you.</h3>
					{packages.map((item) => (
						<div key={item.name}>
							<span className={styles.packageSymbol}>
								<Icon name={item.icon} size={21} />
							</span>
							<p>
								<strong>{item.name}</strong>
								<span>
									{item.instructions}
									<br />
									{item.requirements}
								</span>
							</p>
						</div>
					))}
					<a href={`${repository}#run-the-bundled-executable-linux-x86-64`} target="_blank" className={styles.cliLink}>
						<Icon name="terminal" size={16} />
						Prefer the terminal? There’s a CLI, too.
						<Icon name="arrow" size={16} />
					</a>
				</div>
			</div>
		</section>
	);
}
