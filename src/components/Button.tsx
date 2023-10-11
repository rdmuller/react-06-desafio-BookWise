"use client";

import Image from "next/image";
import { GithubLogo, RocketLaunch } from "phosphor-react";
import { ComponentProps, ElementRef, forwardRef } from "react";

export type ButtonProps = ComponentProps<"button"> & {
    icon: "google" | "github" | "guest"
}

export const Button = forwardRef<ElementRef<"button">, ButtonProps>(
	({icon, children, ...props}: ButtonProps, ref) => {
		return (
			<button className="flex flex-row gap-5 align-middle bg-gray-600 px-6 py-5 text-gray-200 rounded-lg" {...props} ref={ref}>
				{icon === "google" && <Image src="/google.svg" width={20} height={20} alt="" />}
				{icon === "github" && <GithubLogo size={20}  weight="fill" />}
				{icon === "guest" && <RocketLaunch size={20} />}
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";