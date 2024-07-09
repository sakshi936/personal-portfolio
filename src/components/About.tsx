import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function About() {
	return (
		<div className="mt-3 mb-10 py-10 px-1 md:px-14" id="about">
			<h1 className="text-5xl md:text-6xl font-semibold text-center ">
				{" "}
				<span className="text-purple">About</span> Me
			</h1>

			<div className="flex ">
				<Image src="/coding2.svg" alt="me" width={500} height={500} className="hidden md:block" />
				<div className="px-4 md:px-10 py-20  md:py-28">
					<h1 className="text-xl font-semibold ">I&apos;m Sakshi&#44;</h1>
					<p className="text-slate-400 mt-3">
						{" "}
						A dedicated and passionate developer on a journey to master Full Stack Web Development. With a solid foundation in Computer Applications, I&apos;m continuously expanding
						my skill set to include both frontend and backend technologies.My focus is on designing and developing websites and applications that integrate functionality
						effortlessly.
					</p>
					<h2 className="mt-5 text-lg font-medium text-purple mb-5">Working to be better than yesterday!</h2>

					<div className="w-fit">
						<Link href="#project">
							<MagicButton title="View Projects" icon={<FaArrowDown />} position="right" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
