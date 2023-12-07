"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { ComponentProps, ElementRef, forwardRef } from "react";

export type ButtonProps = ComponentProps<"button"> & {
    serviceToConnect: "google" | "github" | "guest"
}

export const SignInButton = forwardRef<ElementRef<"button">, ButtonProps>(
	({serviceToConnect, children, ...props}: ButtonProps, ref) => {

		function handleLogin() {
			switch (serviceToConnect) {
			case "github":
				signIn("github", { callbackUrl: "/home" });
				break;
			case "google":
				signIn("google", {callbackUrl: "/home" });
				break;
			}
		}

		return (
			<button className="flex flex-row gap-5 align-middle items-center bg-gray-600 hover:bg-gray-500 px-6 py-5 text-gray-200 text-lg font-bold leading-base rounded-lg w-[23.25rem]" {...props} ref={ref} onClick={handleLogin}>
				{serviceToConnect === "google" && <Image src="/google-icon.svg" width={32} height={32} alt="" />}
				{serviceToConnect === "github" && <Image src="/github-icon.svg" width={32} height={32} alt="" />}
				{children}
			</button>
		);
	}
);

SignInButton.displayName = "ButtonSignIn";