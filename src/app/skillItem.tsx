import Image from "next/image";

import SkillButton from "./skillButton";

export default function SkillItem({
	skillName,
	href,
}: {
	skillName: string;
	href: string;
}) {
	return (
		<a
			className="relative flex h-full w-fit flex-col gap-3 rounded-md px-5 pb-1 pt-7 transition-all hover:bg-slate-700/40 hover:shadow-[inset_-1px_1px_0_0_rgba(140,160,180,0.1)]"
			id={skillName}
			href={href}
		>
			<div className="relative mx-auto h-[70px] w-[70px]">
				<Image
					src={"/skills/" + skillName.toLowerCase() + ".png"}
					layout={"fill"}
					style={{ objectFit: "contain", borderRadius: "100px" }}
					alt={skillName + " icon"}
				/>
			</div>
			<div className="relative mx-auto w-fit">
				<SkillButton href="" inner={skillName} />
			</div>
		</a>
	);
}
