import Image from "next/image";
import Icon from "./components/ui-icon";
import SearchPreview from "./components/search-preview";

const repository = "https://github.com/NickChach/passagepin";
const releases = `${repository}/releases`;

const questions = [
  { question: "Does PassagePin need an internet connection?", answer: "The packaged desktop app includes the search model and runtime. After downloading the app, you can index and search your library offline. Your PDF contents and search queries stay on your computer." },
  { question: "Can I search scanned PDFs?", answer: "PassagePin searches text contained in your PDFs. Image-only scans need OCR first, using a separate tool. Once a scan has a readable text layer, you can add it to your library and update the index." },
  { question: "Which languages does it work best with?", answer: "The current search model is intended for English. Other languages may produce results, but their search quality has not been validated." },
  { question: "What happens when my files change?", answer: "Use Check for changes in the app, then update your index. PassagePin processes added and changed PDFs, reuses work where it can, and removes deleted files from the index. You decide when to update." },
  { question: "Is it available for Windows or macOS?", answer: "The current desktop packages target Linux x86-64 with glibc 2.38 or newer. Windows and macOS packages have not yet been validated. Check GitHub Releases for the available builds." },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header"><div className="container header-inner">
        <a href="#" className="brand" aria-label="PassagePin home"><Image src="/passagepin.svg" width={36} height={36} priority alt="" /><span>PassagePin</span></a>
        <nav aria-label="Main navigation"><a href="#how-it-works">How it works</a><a href="#questions">FAQs</a><a href={repository} className="github-nav"><Icon name="github" size={17} />GitHub</a></nav>
        <a className="button button-small" href="#download"><Icon name="download" size={16} />Get PassagePin</a>
      </div></header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="release-note"><span className="status-dot" />A little less searching. A lot more reading.</div>
          <h1 id="hero-title">Find the page<br />you had in mind.</h1>
          <p className="hero-description">You remember the idea. PassagePin finds the passage.<br className="desktop-break" /> Search your PDF library by meaning, even when the words escape you.</p>
          <div className="hero-actions"><a className="button" href="#download"><Icon name="download" size={18} />Get PassagePin for Linux</a><a className="text-link" href="#preview">See it in action<Icon name="arrow" size={17} /></a></div>
          <p className="hero-note">Free & open source. Your library stays yours.</p>
        </section>
        <div className="container"><SearchPreview /></div>
        <section className="how-section container" id="how-it-works" aria-labelledby="how-title">
          <div className="section-intro"><h2 id="how-title">From a folder of PDFs<br />to the right page.</h2><p>Books, papers, reports, and all the things you saved for later. Put them to work in three steps.</p></div>
          <div className="steps">
            <article className="step"><div className="step-top"><span>1</span><Icon name="folder" size={25} /></div><h3>Bring your library</h3><p>Choose a folder of PDFs. Keep separate libraries for different projects, subjects, or collections.</p></article>
            <article className="step"><div className="step-top"><span>2</span><Icon name="search" size={25} /></div><h3>Follow an idea</h3><p>Index your library, then describe what you’re looking for. Search for a subject, not just an exact phrase.</p></article>
            <article className="step"><div className="step-top"><span>3</span><Icon name="document" size={25} /></div><h3>Get back to reading</h3><p>Explore ranked pages and read their text beside the results. Open the original PDF in your own viewer.</p></article>
          </div>
        </section>
        <section className="privacy-section" aria-labelledby="privacy-title"><div className="container privacy-inner">
          <div className="privacy-copy"><div className="privacy-icon"><Icon name="lock" size={25} /></div><h2 id="privacy-title">Your reading.<br />Your computer.</h2><p>Your documents don’t need to go anywhere for you to find something in them. PassagePin indexes and searches on your machine, with the search model included in the app.</p><ul className="privacy-points"><li><Icon name="check" size={17} />No document uploads</li><li><Icon name="check" size={17} />No account or API key</li><li><Icon name="check" size={17} />Works offline after download</li></ul></div>
          <div className="local-illustration" aria-label="PDF documents and search stay together on your computer"><div className="local-machine"><div className="machine-top"><span className="status-dot" />Your computer<Icon name="lock" size={15} /></div><div className="machine-content"><div className="mini-files"><span><Icon name="document" size={22} />Books</span><span><Icon name="document" size={22} />Papers</span><span><Icon name="document" size={22} />Reports</span></div><div className="local-connector" aria-hidden="true"><span /><span /><span /></div><div className="local-app"><Image src="/passagepin.svg" width={40} height={40} alt="" /><div><strong>PassagePin</strong><span>A search engine for your library</span></div><Icon name="search" size={22} /></div><p>Everything you need. Right here.</p></div></div><div className="machine-base" /></div>
        </div></section>
        <section className="questions-section container" id="questions" aria-labelledby="questions-title"><div><h2 id="questions-title">A few things<br />you might be wondering.</h2><p>More details, build instructions, and the CLI live in the <a href={repository}>project documentation</a>.</p></div><div className="questions-list">{questions.map(({ question, answer }) => <details key={question}><summary>{question}<Icon name="plus" size={18} /></summary><p>{answer}</p></details>)}</div></section>
        <section className="download-section container" id="download" aria-labelledby="download-title"><div className="download-panel"><div className="download-copy"><Image src="/passagepin.svg" width={56} height={56} alt="" /><h2 id="download-title">There’s more in your library.<br />Go find it.</h2><p>Get PassagePin and give your PDFs a new way to be explored.</p><a className="button" href={releases}><Icon name="download" size={18} />View Linux downloads</a><p className="system-note">Linux x86-64 · glibc 2.38 or newer</p></div><div className="download-details"><h3>Pick the package that suits you.</h3><div><span className="package-symbol"><Icon name="download" size={21} /></span><p><strong>AppImage</strong><span>Make it executable, then launch.<br />Requires AppImage support, usually FUSE.</span></p></div><div><span className="package-symbol"><Icon name="folder" size={21} /></span><p><strong>Compressed archive</strong><span>Extract and run the included app.<br />An alternative without the FUSE requirement.</span></p></div><a href={`${repository}#run-the-bundled-executable-linux-x86-64`} className="cli-link"><Icon name="terminal" size={16} />Prefer the terminal? There’s a CLI, too.<Icon name="arrow" size={16} /></a></div></div></section>
      </main>
      <footer className="site-footer container"><a href="#" className="brand"><Image src="/passagepin.svg" width={28} height={28} alt="" /><span>PassagePin</span></a><p>A little closer to what you’re looking for.</p><div><a href={repository}>Source code</a><a href={`${repository}/blob/main/LICENSE`}>MIT License</a></div></footer>
    </>
  );
}
