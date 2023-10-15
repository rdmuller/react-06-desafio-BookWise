import { HeaderTitle } from "@/components/HeaderTitle";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";

export default function Home() {
	return (
		<div>
			<HeaderTitle icon={ChartLineUp} title="Início" />
		</div>
	);
}