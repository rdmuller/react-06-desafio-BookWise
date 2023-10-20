import { HeaderTitle } from "@/components/HeaderTitle";
import LastRatings from "./components/LastRatings";

export default async function Home() {
	return (
		<div className="flex flex-col gap-10 flex-1">
			<HeaderTitle icon="CharLineUp" title="Início" />
			<LastRatings />
		</div>
	);
}