import Image from "next/image";

interface AvatarProps {
    src: string
}

export function Avatar({ src }:AvatarProps) {
	return <Image className="rounded-full border-emerald-300 border w-10 h-10" width={40} height={40} src={String(src)} alt="" />;
}