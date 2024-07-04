import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Image from "next/image";
import Qualification from "@/components/Qualification";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto p-2 md:px-13 ">
			<div className="max-w-7xl w-full">
				<Hero />
				<About />
				<TechStack />
				<RecentProjects />
				<Qualification />
				<Contact />
			</div>
		</main>
	);
}
