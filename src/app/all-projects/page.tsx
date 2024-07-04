"use client";
import { projects } from "@/data/projects";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundBeams } from "@/components/ui/background-beams";

interface Project {
	id: number;
	title: string;
	des: string;
	img: string;
	link: string;
	gitlink: string;
}
function AllProjects() {
	return (
		<div className="py-32  bg-black">
			<BackgroundBeams />
			<h1 className="heading my-10 text-center font-bold text-3xl md:text-6xl text-purple-500 ">
				<span className="text-purple">Projects</span> Works
			</h1>
			<div className="h-full w-full flex  flex-wrap  items-center justify-center gap-y-36 my-20">
				{projects.map(({ id, title, img, des, link, gitlink }: Project) => (
					<PinContainer title={link} href={link} key={id}>
						<div className="  m-0 tracking-tight text-slate-100/50 w-[20rem] h-auto ">
							<h3 className="max-w-xs pb-2  font-bold  text-base text-slate-100">{title}</h3>
							<div className="text-base m-0 p-0 font-normal">
								<span className="text-slate-400 ">{des}</span>
							</div>
							<img src={img} alt="img" className=" w-full h-[150px] mt-4 rounded-2xl " />
							{/* <div className="flex flex-1 w-full h-[150px] rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
							<div className="flex justify-between items-center mt-4">
								<a href={gitlink} className="px-4 py-2 rounded-xl text-md font-semibold dark:text-purple-700 ">
									Source Code →
								</a>
							</div>
						</div>
					</PinContainer>
				))}
			</div>
		</div>
	);
}

export default AllProjects;
