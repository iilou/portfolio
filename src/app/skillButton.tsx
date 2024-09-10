export default function SkillButton({
	href,
	inner,
}: {
	href: string;
	inner: string;
}) {
	return (
		<a
			className="w-fit rounded-md bg-emerald-800/40 px-4 pb-[2px] pt-[3px] text-sm font-semibold text-emerald-300/50 transition-all"
			href={href == "" ? undefined : href}
		>
			{inner}
		</a>
	);
}
