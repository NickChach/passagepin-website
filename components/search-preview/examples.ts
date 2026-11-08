import type { SearchExample } from "./types";

export const examples: SearchExample[] = [
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
