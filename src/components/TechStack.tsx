"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import GradientBorderButton from "./ui/GradientBorderButton";
import { techStacks } from "@/data/qualification";

function TechStack() {
	return (
		<div className=" w-full p-8 rounded-3xl h-auto mt-10 mb-20 px-1 md:px-20">
			<h1 className="text-5xl md:text-6xl font-bold text-center">
				Tech <span className="text-purple">Stack</span>{" "}
			</h1>
			<div className="flex flex-wrap  justify-center gap-6 mt-20">
				{techStacks.map(({ icon, techname }: { icon: string; techname: string }, index) => (
					<BackgroundGradient className="bg-black rounded-xl " containerClassName="w-fit rounded-xl ">
						<div className=" w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex flex-col justify-center items-center px-3 py-1 rounded-xl " key={index}>
							<Image src={icon} alt={techname} width={60} height={60} className="w-[40px] h-[60px] md:w-[60px] md:h-[60px] mb-2" />
							<p className="text-sm md:text-lg uppercase text-center">{techname}</p>
						</div>
					</BackgroundGradient>
				))}
			</div>
			{/* {techStacks.map(({ icon, techname }: { icon: string; techname: string }) => (
				<GradientBorderButton className="bg-black rounded-xl">
					<div className=" w-fit  flex flex-col justify-center items-center px-4 py-2 rounded-xl bg-black">
						<img src={icon} alt="LinkedIn" className="w-[80px] h-[80px] mb-2" />
						<p className="text-lg">{techname}</p>
					</div>
				</GradientBorderButton>
			))} */}
			{/* <GradientBorderButton className=" rounded-xl">
				<div className=" w-fit  flex flex-col justify-center items-center p-9 rounded-xl bg-black-100">
					<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-[40px] h-[40px] mb-2" />
					<p>LinkedIn</p>
				</div>
			</GradientBorderButton> */}
		</div>
	);
}

export default TechStack;
