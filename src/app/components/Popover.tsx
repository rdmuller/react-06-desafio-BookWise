import { ReactNode } from "react";
import { X } from "@phosphor-icons/react/dist/ssr/X";

interface PopoverProps {
    children: ReactNode,
    onClosePopover: () => void,
}

export function Popover({ children, onClosePopover }:PopoverProps) {
	function handleClosePopover() {
		onClosePopover();
	}

	return (
		<div className="flex flex-row fixed w-[90rem] mx-auto h-screen top-0 bottom-0 right-0 left-0 z-[1] bg-opacity-60 bg-black animate-darken">
			<div className="flex flex-1" onClick={handleClosePopover}></div>
			<div className="flex flex-col h-screen w-[41.5rem] bg-gray-800 animate-slide-in-right px-12 pt-6 overflow-y-auto">
				<div className="flex flex-row-reverse mb-2">
					<button className="text-purple-100 cursor-pointer rounded p-2 hover:bg-gray-500" onClick={handleClosePopover}>
						<X size={24} />
					</button>
				</div>
				{children}
			</div>
		</div>
	);
}