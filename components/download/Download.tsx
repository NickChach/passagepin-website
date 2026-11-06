import Image from "next/image";
import Icon from "../icon/Icon";
import type { DownloadPropsType } from "@/types";
import styles from "./download.module.css";

export default function Download({ repository }: DownloadPropsType) {
	return (
		<section className="download-section container" id="download" aria-labelledby="download-title">
			<div className="download-panel">
				<div className="download-copy">
					<Image src="images/passagepin.svg" width={56} height={56} alt="PassagePin logo." />
					<h2 id="download-title" className={styles.h2}>
						<span>There’s more in your library.</span>
						<span>Go find it.</span>
					</h2>
					<p>Get PassagePin and give your PDFs a new way to be explored.</p>
					<a className="button" href={`${repository}/releases`} target="_blank">
						<Icon name="download" size={18} />
						View Linux downloads
					</a>
					<p className="system-note">Linux x86-64 · glibc 2.38 or newer</p>
				</div>
				<div className="download-details">
					<h3>Pick the package that suits you.</h3>
					<div>
						<span className="package-symbol">
							<Icon name="download" size={21} />
						</span>
						<p>
							<strong>AppImage</strong>
							<span>
								Make it executable, then launch.
								<br />
								Requires AppImage support, usually FUSE.
							</span>
						</p>
					</div>
					<div>
						<span className="package-symbol">
							<Icon name="folder" size={21} />
						</span>
						<p>
							<strong>Compressed archive</strong>
							<span>
								Extract and run the included app.
								<br />
								An alternative without the FUSE requirement.
							</span>
						</p>
					</div>
					<a href={`${repository}#run-the-bundled-executable-linux-x86-64`} target="_blank" className="cli-link">
						<Icon name="terminal" size={16} />
						Prefer the terminal? There’s a CLI, too.
						<Icon name="arrow" size={16} />
					</a>
				</div>
			</div>
		</section>
	);
}
