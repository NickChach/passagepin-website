"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "../icon/Icon";
import Logo from "../logo/Logo";

const examples = [
	{
		label: "Walkable streets",
		query: "what makes a neighborhood walkable?",
		results: [
			{
				file: "Streets for people.pdf",
				page: 8,
				score: "0.782",
				title: "A neighborhood at walking pace",
				text: [
					"A walkable neighborhood brings everyday destinations within a comfortable distance of home. A corner shop, a school, a small park: together, these places give people a reason to make a journey on foot.",
					"Distance is only part of the story. Continuous pavements, safe crossings and places to pause make the difference between a route that can be walked and one that people choose to walk.",
					"The most useful measure may be a simple one: can a person take care of their daily needs without first reaching for their car keys?",
				],
			},
			{
				file: "The changing city.pdf",
				page: 12,
				score: "0.714",
				title: "The value of a short journey",
				text: [
					"When housing, shops and public services share a neighborhood, short journeys become a practical part of daily life. A mix of uses keeps streets active at different hours.",
					"Small blocks offer more choices of route. They also make a walk feel connected: each corner reveals a new stretch of street, a doorway or a local destination.",
					"Planning for proximity begins with the everyday journeys of the people who already live there.",
				],
			},
			{
				file: "Urban field notes.pdf",
				page: 4,
				score: "0.658",
				title: "Notes from the pavement",
				text: [
					"On the quieter streets, the details became easier to notice: shade beside the bus stop, a bench halfway up the hill, a crossing where people actually wanted to cross.",
					"Walking revealed connections that were difficult to see on a map. The shortest route was not always the most comfortable, and the busiest street was not always the most welcoming.",
					"A good walking route is a sequence of small considerations, experienced one after another.",
				],
			},
		],
	},
	{
		label: "City trees",
		query: "how do trees help keep cities cool?",
		results: [
			{
				file: "The changing city.pdf",
				page: 26,
				score: "0.801",
				title: "A cooler street",
				text: [
					"A tree changes the experience of a street in two ways. Its canopy intercepts sunlight before it reaches the pavement, while water released through its leaves helps cool the surrounding air.",
					"Shade matters most where people spend time: along walking routes, at bus stops and beside places to sit. A continuous canopy can make a summer journey more comfortable than a series of isolated trees.",
					"Planting is only a beginning. Healthy roots, enough soil and long-term care determine whether a young tree becomes part of the neighborhood’s shelter.",
				],
			},
			{
				file: "Urban field notes.pdf",
				page: 19,
				score: "0.736",
				title: "Under the canopy",
				text: [
					"At midday, the shaded side of the square filled first. People moved chairs beneath the trees and waited for the bus along the edge of the canopy.",
					"Across the road, the exposed paving held the afternoon sun. The contrast made shade feel less like an amenity and more like a basic part of a usable public space.",
				],
			},
			{
				file: "Streets for people.pdf",
				page: 31,
				score: "0.682",
				title: "Designing for summer",
				text: [
					"Comfortable streets need protection from summer heat as well as space to move. Trees, sheltered seating and drinking water help people continue using public spaces during warmer weather.",
					"The location of shade should follow the way a street is used. A shaded crossing and a cool place to wait can be as valuable as a larger planted area nearby.",
				],
			},
		],
	},
	{
		label: "Public spaces",
		query: "why do cities need places to gather?",
		results: [
			{
				file: "Urban field notes.pdf",
				page: 23,
				score: "0.769",
				title: "Room for everyday life",
				text: [
					"The square had no single purpose. Children played near the steps, neighbors stopped to talk, and someone read on a bench beside the fountain. Its usefulness came from making room for all of them.",
					"Public gathering places allow people to share a city without an invitation or a purchase. They support the small, repeated encounters through which a place becomes familiar.",
					"The best spaces leave some things undecided. People bring the activity; the city provides the room.",
				],
			},
			{
				file: "The changing city.pdf",
				page: 38,
				score: "0.703",
				title: "A shared place",
				text: [
					"Libraries, parks and public squares give a neighborhood places where different lives can overlap. They make space for both planned events and casual meetings.",
					"Access is central to that role. A gathering place should be easy to reach, comfortable to stay in and welcoming to people with different needs.",
				],
			},
			{
				file: "Streets for people.pdf",
				page: 42,
				score: "0.644",
				title: "More than a route",
				text: [
					"A street can be a place to spend time as well as a route to somewhere else. A wider pavement, a place to sit and a little distance from traffic can invite people to linger.",
					"These small opportunities to pause give everyday social life a setting. Over time, a familiar street becomes a shared part of the neighborhood.",
				],
			},
		],
	},
];

export default function SearchPreview() {
	const [example, setExample] = useState(0);
	const [selected, setSelected] = useState(0);
	const current = examples[example];
	const result = current.results[selected];

	function chooseExample(index: number) {
		setExample(index);
		setSelected(0);
	}

	return (
		<article className="container">
			<div className="preview-section" id="preview" aria-label="Interactive PassagePin example">
				<section className="example-switcher">
					<span>Explore an example:</span>
					<div className="example-options" role="group" aria-label="Example search topics">
						{examples.map((item, index) => (
							<button key={item.label} type="button" aria-pressed={example === index} onClick={() => chooseExample(index)}>
								{item.label}
							</button>
						))}
					</div>
				</section>
				<section className="app-window">
					<div className="window-bar">
						<span className="window-dots" aria-hidden="true">
							<i />
							<i />
							<i />
						</span>
						<span>PassagePin</span>
						<span className="window-example">Interactive preview</span>
					</div>
					<div className="app-body">
						<aside className="app-sidebar" aria-label="Example library">
							<div className="preview-brand">
								<Logo width={30} height={30} priority={false} />
								<strong>PassagePin</strong>
							</div>
							<div className="sidebar-label">Your library</div>
							<div className="sample-library">
								<Icon name="folder" size={19} />
								<div>
									<strong>City & everyday life</strong>
									<span>Example PDF library</span>
								</div>
							</div>
							<div className="library-info">
								<span>Documents</span>
								<strong>3 PDFs</strong>
							</div>
							<div className="indexed-state">
								<Icon name="check" size={13} /> Indexed and searchable
							</div>
							<div className="sample-files">
								{["Streets for people", "The changing city", "Urban field notes"].map((name) => (
									<span key={name}>
										<Icon name="document" size={14} />
										{name}
									</span>
								))}
							</div>
							<div className="local-state">
								<span className="status-dot" /> Built for local search
								<span>
									<Icon name="lock" size={12} /> Your data stay on your computer
								</span>
							</div>
						</aside>
						<div className="app-workspace">
							<div className="app-search-header">
								<h2>Find a passage</h2>
								<div className="demo-query">
									<Icon name="search" />
									<p>{current.query}</p>
									<span>Example search</span>
								</div>
								<p className="search-hint">Search by subject, idea, or question.</p>
							</div>
							<div className="demo-results-heading">
								<strong>3 ranked pages</strong>
								<span>Choose a result to read the passage</span>
							</div>
							<div className="reading-layout">
								<ol className="demo-results" aria-label="Example matching pages">
									{current.results.map((item, index) => (
										<li key={item.file}>
											<button
												type="button"
												aria-current={index === selected ? "true" : undefined}
												onClick={() => setSelected(index)}
											>
												<span className="result-position">{index + 1}</span>
												<Icon name="document" size={21} />
												<span className="result-details">
													<strong>{item.file}</strong>
													<span>City & everyday life</span>
													<span className="result-meta">
														PDF page {item.page}
														<span>Similarity {item.score}</span>
													</span>
												</span>
											</button>
										</li>
									))}
								</ol>
								<article className="demo-reader" aria-label="Example extracted page" aria-live="polite" aria-atomic="true">
									<header>
										<div>
											<span>PDF page {result.page}</span>
											<h3>{result.file}</h3>
										</div>
										<Icon name="document" size={18} />
									</header>
									<div className="reader-paper">
										<span className="paper-kicker">City & everyday life</span>
										<h4>{result.title}</h4>
										{result.text.map((paragraph) => (
											<p key={paragraph}>{paragraph}</p>
										))}
										<span className="paper-page">{result.page}</span>
									</div>
									<p className="reader-footer">Extracted page text, right beside your results.</p>
								</article>
							</div>
						</div>
					</div>
				</section>
				<p className="preview-caption">
					An interactive illustration with sample documents and rankings. Your real searches run locally in the desktop app.
				</p>
			</div>
		</article>
	);
}
