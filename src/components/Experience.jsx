import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
	<VerticalTimelineElement
		contentStyle={{ background: '#1d1836', color: '#fff', boxShadow: '0 4px 0 #383e56' }}
		contentArrowStyle={{ borderRight: '7px solid #232631' }}
		date={experience.date}
		iconStyle={{ background: experience.iconBg, boxShadow: '0 0 0 4px #484e66' }}
		icon={
			<div>
				<img
					src={experience.icon}
					alt={experience.name}
					className="w-[60%] h-[60%] object-contain"
				/>
			</div>
		}
	>
		<div>
			<h3 className="text-white text-[24px] font-bold">
				{experience.title}
			</h3>
		</div>
	</VerticalTimelineElement>
)

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>
					What I have done so far
				</p>
				<h2 className={styles.sectionHeadText}>
					Experience
				</h2>
			</motion.div>
			<div className="mt-20 flex flex-col">
				<VerticalTimeline lineColor="#1d1836">
					{experiences.map((experience, index) =>(
						<ExperienceCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	)
}

export default SectionWrapper(Experience, "experience")