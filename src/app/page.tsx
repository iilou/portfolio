"use client";

import Image from "next/image";
import { Inter, Inconsolata } from "next/font/google";

import SectionMiniLabel from "./sectionMiniLabel";
import Subtitle from "./subtitle";
import SkillItem from "./skillItem";
import ProjectItem from "./projectItem";
import ContactItem from "./contactItem";

import React from "react";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

const vsf = Inconsolata({
	subsets: ["latin"],
	display: "swap",
});

export default function Home() {
	const imgSize = 40;
	const [aboutHover, setAboutHover] = React.useState(false);
	const [skillHover, setSkillHover] = React.useState(false);
	const [projHover, setProjHover] = React.useState(false);
	const [contactHover, setContactHover] = React.useState(false);
	return (
		<div className={inter.className}>
			<div className="mx-auto min-h-screen max-w-screen-xl">
				<div className="flex flex-wrap">
					<header className="pt-5 lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:pl-3 lg:pr-3 lg:pt-12">
						{/* name box */}
						<div className={"flex w-full flex-wrap gap-y-3 " + vsf.className}>
							<a className="mx-auto flex w-full justify-center pb-4 text-5xl font-semibold text-gray-700 lg:mt-12 lg:justify-start">
								{"<"}
								<div className="px-1 text-blue-900">a</div>
								{"> "}
								<div className="px-4 font-black text-gray-200">Marvin Li</div>
								{"</"}
								<div className="px-1 text-blue-900">a</div>
								{">"}
							</a>
							<div className="flex w-fit pl-6 text-base font-semibold text-gray-300 lg:w-full lg:pl-0 lg:pt-0">
								<div className="text-emerald-500">software</div>
								::
								<div className="text-yellow-200">engineer</div>
								<div className="text-yellow-400">{"(){"}</div>
							</div>
							<div className="photo flex w-fit pl-4 text-base font-semibold lg:items-end">
								<div
									className={`h-fit pb-4 pr-4 text-right text-fuchsia-400 lg:w-[90px] ${vsf.className}`}
								>
									return
								</div>
								<div className="h-16 w-16 rounded-lg bg-blue-300 lg:h-44 lg:w-44 lg:rounded-3xl"></div>
								<div
									className={`justify-right flex pb-4 pl-4 lg:w-[120px] ${vsf.className}`}
								>
									<div className="text-gray-300">;</div>
									<div className="text-yellow-400">{"}"}</div>
								</div>
							</div>
						</div>
						<div
							className={`py-3 pl-6 text-base font-bold text-green-600 transition-all lg:py-6 lg:pl-0 lg:text-lg ${vsf.className}`}
						>
							{
								"// Hi, I'm Marvin and I do (mostly) anything software related. "
							}
						</div>
						<div className="hidden w-full gap-2 pb-2 pt-8 lg:flex lg:flex-col">
							<SectionMiniLabel
								text="About"
								href="#About"
								active={aboutHover}
							/>
							<SectionMiniLabel
								text="Skills"
								href="#Technical Skills"
								active={skillHover}
							/>
							<SectionMiniLabel
								text="Projects"
								href="#Projects"
								active={projHover}
							/>
							<SectionMiniLabel
								text="Contact"
								href="#Contact"
								active={contactHover}
							/>
						</div>
						<div className="flex w-full gap-8 pl-6 pt-4 lg:pl-0">
							<a href="https://github.com/iilou" target="_blank">
								<Image
									src="/github.png"
									width={imgSize}
									height={imgSize}
									alt="image"
									style={{ borderRadius: "100%" }}
								/>
							</a>
							<a
								href="http://filedump.to/download/725d9ad9cedf4f558cac40b81f321240/resume_cv-4.pdf"
								target="_blank"
							>
								<Image
									src="/resume.png"
									width={imgSize}
									height={imgSize}
									alt="image"
									style={{ borderRadius: "100%" }}
								/>
							</a>
						</div>
					</header>
					<div className="w-full pb-96 lg:w-1/2 lg:pt-12">
						<div
							onMouseOver={() => {
								setAboutHover(true);
								console.log("T");
							}}
							onMouseLeave={() => {
								setAboutHover(false);
								console.log("F");
							}}
						>
							<Subtitle text={"About"} hover={aboutHover} />
							<div
								className={
									"rounded-lg px-8 pb-8 pt-8 text-base font-light text-slate-400/60 transition-all " +
									(aboutHover
										? "shadow-[inset_25px_-40px_10px_-40px_rgba(110,120,160,1)]"
										: "shadow-[inset_25px_40px_10px_-40px_rgba(110,120,160,1)]")
								}
							>
								<div>{`Hi, I'm Marvin and I'm a 19 year old software engineering
								currently studying at the University of Ottawa. Ever since high
								school, I've been highly passionate about software development,
								always looking for new opportunities to learn and grow.`}</div>
								<br />
								<div>{`I've
								worked on a variety of projects covering a wide range of topics,
								programming languages, technologies, and frameworks. For
								example, I've most recently worked on a Tetris AI using a
								Genetic Learning Algorithm Model in C++, a React website that
								visualizes data structures and algorithms, and an Android
								application for clients looking to rent. As a result, I'm
								confident in my ability to learn new technologies and adapt to
								new environments quickly.`}</div>
								<br />
								<div>{`I'm always looking for new
								opportunities to learn and grow, so if you have any questions or
								would like to get in touch, feel free to contact me.`}</div>
							</div>
						</div>
						<div
							onMouseOver={() => {
								setSkillHover(true);
							}}
							onMouseLeave={() => {
								setSkillHover(false);
							}}
						>
							<Subtitle text="Technical Skills" hover={skillHover} />
							<div
								className={
									"flex rounded-lg pt-1 transition-all " +
									(skillHover
										? "shadow-[inset_25px_-40px_10px_-40px_rgba(110,120,160,1)]"
										: "shadow-[inset_25px_40px_10px_-40px_rgba(110,120,160,1)]")
								}
							>
								<div className="relative grid w-max grid-flow-col gap-1 overflow-x-scroll rounded-lg py-2">
									<SkillItem skillName="C++" href="#tetris_ai" />
									<SkillItem skillName="Next" href="/" />
									<SkillItem skillName="React" href="/" />
									<SkillItem skillName="Python" href="/" />
									<SkillItem skillName="Java" href="/" />
									<SkillItem skillName="Tailwind" href="/" />
									<SkillItem skillName="Flask" href="/" />
									<SkillItem skillName="Javascript" href="/" />
									<SkillItem skillName="Android" href="/" />
									<SkillItem skillName="Firebase" href="/" />
								</div>
							</div>
						</div>
						<div
							onMouseOver={() => {
								setProjHover(true);
							}}
							onMouseLeave={() => {
								setProjHover(false);
							}}
						>
							<Subtitle text="Projects" hover={projHover} />
							<div
								className={
									"flex flex-col gap-1 rounded-lg pb-6 pt-8 transition-all " +
									(projHover
										? "shadow-[inset_25px_-40px_10px_-40px_rgba(110,120,160,1)]"
										: "shadow-[inset_25px_40px_10px_-40px_rgba(110,120,160,1)]")
								}
							>
								<ProjectItem
									title="Tetr.AI - Personal Project"
									description="
									Tetr.AI is a Tetris AI  using a Genetic Learning Algorithm Model that learns how to play 
									competitive Tetris using vanilla C++ to design the AI Model and the evaluation function and the SDL2 C library for the UI.\n
									This model uses a heuristic approach to judge the most optimal destination of a tetris 
									piece given a list of the bot’s future tetris pieces and a specific board state, and is able to process up to four unique upcoming pieces at once"
									repo="https://github.com/iilou/tetr.ai"
									link="https://github.com/iilou/tetr.ai/releases/tag/v1.0.0"
									skillsUsed="oC++ uMachine_Learning"
									picName="tetris_ai"
								/>
								<ProjectItem
									title="DSAV - Personal Project"
									description="
									DSAV is a React website that helps users visualize common data structures and algorithms.\n
									This program is designed specifically so that the user can create custom graphs and trees with 
									custom weights and values with incredible ease and speed.
									Then, various graph theory algorithms can be applied to the custom graphs.\n
									Every step of the algorithm is clearly visualized, represented by differently styled nodes and edges, and are easily traversable."
									repo="https://github.com/iilou/dsa_vis"
									link="https://iilou.github.io/dsa_vis"
									skillsUsed="oReact uData_Structures_&_Algorithms oJavascript"
									picName="dsa_vis"
								/>
								<ProjectItem
									title="Android Renting App - Team Project"
									description="I was the leader for a semester-long group project that built an Android application for clients looking to rent, landlords, and property managers to interact with."
									repo="https://github.com/SEG-2105/project-group-8"
									link="https://github.com/SEG-2105/project-group-8"
									skillsUsed="oJava oAndroid"
									picName="tetris_ai"
								/>
								<ProjectItem
									title="IPC Index - Personal Project"
									description="
									IPC Index is a Javascript+Flask website that fetches displays any user's profile in Honkai: Star Rail via. Mihomo API."
									repo="https://github.com/iilou/ipcindex"
									link="https://github.com/iilou/ipcindex"
									skillsUsed="oJavascript oFlask"
									picName="ipc_index"
								/>
							</div>
						</div>
						<div
							onMouseOver={() => {
								setContactHover(true);
							}}
							onMouseLeave={() => {
								setContactHover(false);
							}}
						>
							<Subtitle text="Contact" hover={contactHover} />
							<div
								className={`rounded-lg pb-9 pt-7 ${
									contactHover
										? "shadow-[inset_25px_-40px_10px_-40px_rgba(110,120,160,1)]"
										: "shadow-[inset_25px_40px_10px_-40px_rgba(110,120,160,1)]"
								}`}
							>
								<ContactItem label="Email" desc="li.marvin.nn@gmail.com" />
								<ContactItem
									label="Linkedin"
									desc="https://www.linkedin.com/in/marvin-li-08953b298"
								/>
								<ContactItem
									label="Github"
									desc="https://www.github.com/iilou"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
