"use client";

import { signOut } from "next-auth/react";
import { SignOut } from "@phosphor-icons/react/dist/ssr/SignOut";
import { ComponentProps, ElementRef, forwardRef } from "react";

type SignOutButtonProps = ComponentProps<"button">

export const SignOutButton = forwardRef<ElementRef<"button">, SignOutButtonProps>(
	({...props}: SignOutButtonProps, ref) => {

		return (
			<button onClick={() => signOut()} ref={ref} {...props}>
				Logout
				<SignOut className="text-danger" size={28} />
			</button>
		);	
	}
);
	
SignOutButton.displayName = "ButtonSignOut";