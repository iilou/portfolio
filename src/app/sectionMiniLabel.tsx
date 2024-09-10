export default function SectionMiniLabel({
	text,
	href,
	active,
}: {
	text: string;
	href: string;
	active: boolean;
}) {
	return (
		<a className="flex w-full" href={href}>
			<div
				className={`flex items-center gap-4 transition-all ${active ? "w-64" : "w-44 hover:w-80"}`}
			>
				<div
					className={`h-[2px] w-full ${active ? "bg-cyan-300" : "bg-cyan-800"} `}
				></div>
				<div
					className={`text-base font-semibold ${active ? "text-cyan-200" : "text-cyan-700"} transition-all`}
				>
					{text}
				</div>
			</div>
		</a>
	);
}
