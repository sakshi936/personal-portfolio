"use client";

import { qualifications } from "@/data/qualification";
import React from "react";
import { Button } from "./ui/moving-border";
import Image from "next/image";

interface qualifications {
	id: number;
	degree: string;
	des: string;
	thumbnail: string;
	yearOfcompletion: string;
	completed: string;
}
function Qualification() {
	return (
		<div className=" py-20 w-full  px-1 md:px-14">
			<div className="text-center">
				<h1 className="text-5xl md:text-6xl  font-bold">
					My <span className="text-purple">Education</span>
				</h1>
				<p className="text-md text-white mt-3">Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</p>
			</div>

			<div className="w-full mt-20 grid lg:grid-cols-4 grid-cols-1 gap-5">
				{qualifications.map(({ id, degree, des, thumbnail, yearOfcompletion, completed }: qualifications) => (
					<Button
						key={id}
						duration={Math.floor(Math.random() * 10000) + 10000}
						borderRadius="1.75rem"
						style={{
							background: "rgb(4,7,29)",
							backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
							borderRadius: `calc(1.75rem* 0.96)`,
						}}
						className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
					>
						<div className=" p-5  md:flex justify-center items-center gap-11">
							<Image src={thumbnail} alt={`thumbnail`} width={100} height={100} className=" w-[100px] h-[100px] hidden md:block" />
							<div className="text-left ">
								<h2 className="text-4xl font-semibold text-white ">{degree}</h2>
								<p className="text-sm text-slate-400 mt-2 font-medium">{des}</p>
								<p className="mt-1 text-sm">
									{yearOfcompletion} | {completed}
								</p>
							</div>
						</div>
					</Button>
				))}
			</div>
		</div>
	);
}

export default Qualification;
