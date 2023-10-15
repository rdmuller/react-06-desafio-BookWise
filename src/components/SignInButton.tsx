"use client";

import Image from "next/image";
import { ComponentProps, ElementRef, forwardRef } from "react";

export type ButtonProps = ComponentProps<"button"> & {
    icon: "google" | "github" | "guest"
}

export const SignInButton = forwardRef<ElementRef<"button">, ButtonProps>(
	({icon, children, ...props}: ButtonProps, ref) => {
		return (
			<button className="flex flex-row gap-5 align-middle items-center bg-gray-600 hover:bg-gray-500 px-6 py-5 text-gray-200 text-lg font-bold leading-base rounded-lg w-[23.25rem]" {...props} ref={ref}>
				{icon === "google" && <Image src="/google-icon.svg" width={32} height={32} alt="" />}
				{icon === "github" && <Image src="/github-icon.svg" width={32} height={32} alt="" />}
				{children}
			</button>
		);
	}
);

SignInButton.displayName = "Button";