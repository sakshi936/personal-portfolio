"use client";

import { FaAlignRight, FaArrowDown, FaLocationArrow } from "react-icons/fa";
import MagicButton from "../ui/MagicButton";
import { Spotlight } from "../ui/Spotlight";
import Typewriter from "typewriter-effect";
import { sociallist } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

function Hero() {
	return (
		<div className="pb-20  h-screen ">
			<div>
				{/* <Spotlight className="-left-24 -top-16 h-[90vh]  hidden md:block" fill="white" />
				<Spotlight className=" top-10 left-1/3 h-[90vh] hidden md:block" fill="purple" />
				<Spotlight className=" -top-2 left-44 h-[90vh] hidden md:block" fill="blue" /> */}

				<Spotlight className="top-10 left-full h-[70vh]  hidden md:block" fill="purple" />
			</div>

			<div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-start ">
				<Spotlight className=" left-60 -top-0" fill="purple" />
				<Spotlight className=" left-30 -top-0 " fill="blue" />

				<div className="absolute pointer-events-none inset-0  flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

				<div className="flex flex-col justify-center items-start pl-10 md:pl-[15rem] m-0">
					<div className="flex justify-center items-end">
						<Image src="/images/waving-hand.gif" alt="hy" width={50} height={50} className="w-[50px]" />
						<h3 className="text-2xl font-semibold">Hi There&#44; </h3>
					</div>
					<h1 className="text-6xl font-extrabold">I&apos;m Sakshi Pandey</h1>
					<div>
						<h2 className="text-lg md:text-3xl flex gap-3 mt-7">
							I am into
							<Typewriter
								options={{
									strings: ["Frontend Development", "Backend Development"],
									autoStart: true,
									loop: true,
									deleteSpeed: 50,
									delay: 50,
									wrapperClassName: "text-violet-700 dark:text-violet-600 text-lg md:text-2xl font-medium",
									cursorClassName: "text-violet-700 dark:text-violet-600 text-lg md:text-2xl",
								}}
							/>
						</h2>
					</div>
					<Link href="#about" className="flex justify-center mt-4">
						<MagicButton title="About me " icon={<FaArrowDown />} position="right" />
					</Link>
					<div className="flex gap-4 mt-8 md:hidden">
						{sociallist.map((social, index) => (
							<div className="bg-purple w-fit p-3 rounded-full hover:animate-bounce" key={index}>
								<Link href={`${social.link}`}>
									<Image src={`${social.icon}`} alt={`${social.alt}`} width={20} height={20} />
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
