import type { LogoPropsType } from "@/types";
import Image from "next/image";

export default function Logo({ width, height, priority }: LogoPropsType) {
	return <Image src="images/passagepin.svg" width={width} height={height} alt="PassagePin logo." priority={priority} />;
}
