import { HeaderTitle } from "@/components/HeaderTitle";
import LastRatings from "./components/LastRatings";
import PopularBooks from "./components/PopularBooks";

export default async function Home() {
	return (
		<div className="flex flex-col gap-10 flex-1">
			<HeaderTitle icon="CharLineUp" title="Início" />
			<div className="flex flex-row">
				<LastRatings />
				<PopularBooks />
			</div>
		</div>
	);
}