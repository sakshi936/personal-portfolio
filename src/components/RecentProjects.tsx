"use client";
import { projects } from "@/data/projects";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface Project {
	id: number;
	title: string;
	des: string;
	img: string;
	iconLists?: string[];
	link: string;
	gitlink: string;
}
const RecentProject = projects.slice(0, 3);
function RecentProjects() {
	return (
		<div className="py-14 flex flex-col  " id="project">
			<h1 className="heading  text-center font-bold text-5xl md:text-6xl text-purple "> Projects</h1>
			<div className="h-full w-full flex  flex-wrap  items-center justify-center gap-y-28 py-20 ">
				{RecentProject.map(({ id, title, img, des, link, iconLists, gitlink }: Project) => (
					<PinContainer title="visit" href={link} key={id}>
						<div className=" tracking-tight text-slate-100/50 w-[16rem] md:w-[20rem] h-[20rem] ">
							<h3 className="max-w-xs pb-2  font-bold  text-base text-slate-100">{title}</h3>
							<div className="text-xs md:text-base font-normal text-slate-400">{des}</div>
							<Image src={img} alt="img" width={100} height={100} className=" w-full h-[150px] mt-4 rounded-2xl bg-white-100" />
							{/* <div className="flex flex-1 w-full h-[150px] rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple to-blue-500" /> */}
							<div className="flex justify-between items-center mt-4">
								<Link href={gitlink} className="px-4 py-2 rounded-xl text-base font-semibold dark:text-purple ">
									Source Code →
								</Link>
							</div>
						</div>
					</PinContainer>
				))}
			</div>
			<div className="flex justify-center mt-4">
				<Link href="/all-projects" className="w-fit">
					<MagicButton title="Show all Projects " icon={<FaLocationArrow />} position="right" />
				</Link>
			</div>
		</div>
	);
}

export default RecentProjects;
