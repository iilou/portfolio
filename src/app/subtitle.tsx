export default function Subtitle({
	text,
	hover,
}: {
	text: string;
	hover: boolean;
}) {
	return (
		<div
			id={text}
			className={
				"z-[400] mb-1 mt-5 w-full rounded-lg px-8 pb-1 pt-4 text-3xl font-extrabold text-blue-200/50 transition-all " +
				(hover
					? "sticky top-0 bg-slate-800/40 shadow-[inset_25px_30px_7px_-30px_rgba(110,120,160,1)]"
					: "relative shadow-[inset_25px_-30px_7px_-30px_rgba(110,120,160,1)]")
			}
		>
			{text}
		</div>
	);
}
