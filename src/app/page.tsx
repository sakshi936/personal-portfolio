import Hero from "@/components/pages/Hero";
import RecentProjects from "@/components/pages/RecentProjects";
import Image from "next/image";
import Qualification from "@/components/pages/Qualification";
import TechStack from "@/components/pages/TechStack";
import Contact from "@/components/pages/Contact";
import About from "@/components/pages/About";

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
