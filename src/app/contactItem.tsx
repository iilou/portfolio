import React from "react";

export default function ContactItem({
	label,
	desc,
}: {
	label: string;
	desc: string;
}) {
	const [copied, setCopied] = React.useState(false);
	return (
		<div
			onClick={() => {
				navigator.clipboard.writeText(desc);
				setCopied(true);
				setTimeout(() => {
					setCopied(false);
				}, 750);
			}}
			className={`flex w-full px-8 text-lg font-extralight text-fuchsia-300/80 transition-all hover:bg-slate-700/40 hover:shadow-[inset_-1px_1px_0_0_rgba(140,160,180,0.1)] hover:drop-shadow-xl`}
		>
			<div className="h-[52px] w-40 pr-8 leading-[52px]">{label} - </div>
			<div className="h-[52px] w-72 overflow-x-scroll text-nowrap text-sm leading-[52px]">
				{desc}
			</div>
			<div
				className={`${copied ? "block" : "hidden"} m-auto h-[52px] pl-3 text-center font-extrabold leading-[52px] text-fuchsia-300/70 transition-all`}
			>
				Copied !
			</div>
		</div>
	);
}
