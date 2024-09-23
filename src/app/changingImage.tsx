import Image from "next/image";
import React from "react";

export default function ChangingImage({
	srcList,
	altList,
	num,
	widthList,
	heightList,
	styleList,
	className,
	delay,
}: {
	srcList: string[];
	altList: string[];
	num: number;
	widthList: number;
	heightList: number;
	styleList: React.CSSProperties;
	className: string;
	delay: number;
}) {
	const [current, setCurrent] = React.useState(0);
	React.useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((current) => (current + 1) % num);
		}, delay);

		return () => clearInterval(interval);
	}, []);

	return (
		<Image
			src={srcList[current]}
			alt={altList[current]}
			width={widthList}
			height={heightList}
			style={styleList}
			className={className}
		/>
	);
}
