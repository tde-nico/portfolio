import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = ({ isMobile }) => {
	if (isMobile) {
		var n = 5;
		var shuffled = technologies.sort(function(){ return 0.5 - Math.random() });
		var techs = shuffled.slice(0,n);
	}
	else {
		var techs = technologies;
	}

	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{techs.map((tech) => (
				<div className="w-28 h-28" key={tech.name}>
					<BallCanvas icon={tech.icon}/>
				</div>
			))}
		</div>
	)
}

export default SectionWrapper(Tech, "");