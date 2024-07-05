"use client";
import { projects } from "@/data/projects";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

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
						<div className="  m-0 tracking-tight text-slate-100/50 w-[16rem] md:w-[20rem] h-[20rem] ">
							<h3 className="max-w-xs pb-2  font-bold  text-base text-slate-100">{title}</h3>
							<div className="text-sm md:text-base m-0 p-0 font-normal text-slate-400">{des}</div>
							<Image src={img} alt="img" width={100} height={100} className=" w-full h-[150px] mt-4 rounded-2xl bg-white-100" />
							{/* <div className="flex flex-1 w-full h-[150px] rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple to-blue-500" /> */}
							<div className="flex justify-between items-center mt-4">
								<a href={gitlink} className="px-4 py-2 rounded-xl text-base font-semibold dark:text-purple ">
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
