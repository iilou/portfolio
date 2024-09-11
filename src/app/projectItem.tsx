import Image from "next/image";

import SkillButton from "./skillButton";

export default function ProjectItem({
	title,
	description,
	repo,
	link,
	skillsUsed,
	picName,
}: {
	title: string;
	description: string;
	repo: string;
	link: string;
	skillsUsed: string;
	picName: string;
}) {
	return (
		<div
			id={picName}
			className={`rounded-lg px-8 py-3 transition-all hover:bg-slate-700/40 hover:shadow-[inset_-1px_1px_0_0_rgba(140,160,180,0.1)] hover:drop-shadow-xl ${skillsUsed
				.split(" ")
				.map((str) => {
					return str.slice(1, str.length).toLowerCase();
				})
				.join(" ")}`}
		>
			<div className="flex gap-x-6">
				<div className="flex h-fit flex-col gap-2">
					<div className="relative z-[200] mt-3 h-[160px] w-[240px]">
						<Image
							src={"/projects/" + picName + ".png"}
							layout={"fill"}
							style={{
								objectFit: "cover",
								borderRadius: "17px",
								boxShadow: "inset 0 0 0 200px #243c5a77",
							}}
							alt={title + " icon"}
						/>
						<a
							className="absolute h-[160px] w-[240px] rounded-[17px] bg-[#00000074] transition-all hover:bg-[#00000022]"
							href={repo}
							target="_blank"
						></a>
					</div>
					<a
						className="text-[10px] italic text-amber-300/80"
						href={repo}
						target="_blank"
					>
						{"-> " + repo}
					</a>
				</div>
				<div className="w-auto">
					<div className="flex w-full flex-col">
						<div className="text-xl font-extrabold text-gray-100/80">
							{title}
						</div>
						<a
							className="mb-2 text-xs font-semibold italic text-emerald-300/70"
							href={link}
							target="_blank"
						>
							{link}
						</a>
						<p className="text-justify text-[11px] font-semibold text-gray-400">
							{description.split("\\n").map((subStr, i) => {
								return (
									<>
										{i == 0 ? (
											<></>
										) : (
											<>
												<br />
												<br />
											</>
										)}
										{subStr}
									</>
								);
							})}
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-start gap-2 pt-4">
				{skillsUsed.split(" ").map((skill, i) => {
					const u = skill.at(0) != "u";
					skill = skill.slice(1, skill.length);
					return (
						<SkillButton
							key={i}
							href={u ? "#" + skill : ""}
							inner={skill.split("_").join(" ")}
						/>
					);
				})}
			</div>
		</div>
	);
}
