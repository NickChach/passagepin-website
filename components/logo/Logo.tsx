import Image from "next/image";

type LogoProps = {
	width: number;
	height: number;
	alt?: string;
	preload?: boolean;
};

export default function Logo({ width, height, alt = "", preload = false }: LogoProps) {
	return <Image src="/images/passagepin.svg" width={width} height={height} alt={alt} preload={preload} />;
}
