"use client";

import { Binoculars } from "@phosphor-icons/react/dist/ssr/Binoculars";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";
import { User } from "@phosphor-icons/react/dist/ssr/User";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ButtonLinkProps {
    title: string,
    url: string
}

export function ButtonLink({title, url}:ButtonLinkProps) {
	const pathName = usePathname();
	const activeLink = pathName === url;

	return (
		<Link href={!activeLink ? url : ""} className={`${!activeLink ? "text-gray-400 font-normal": "text-gray-100 font-bold cursor-not-allowed relative"}  hover:text-gray-100 flex gap-3 my-2 mx-3 text-base`}>

			{activeLink && <div className="flex absolute -left-5 w-1 h-6 bg-gradient-to-b from-emerald-300 to-violet-400 rounded-full" />}

			{url.includes("/home") && <ChartLineUp size={24} />}
			{url.includes("/explore") && <Binoculars size={24} />}
			{url.includes("/profile") && <User size={24} />}

			{title}
		</Link>
	);
}