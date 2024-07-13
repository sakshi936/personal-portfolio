import React from "react";
import { sociallist } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
function Social() {
	return (
		// <div className="w-[4rem]   fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden lg:flex flex-col gap-3 z-20">
		<div className="w-[4rem]   fixed bottom-0 hidden lg:flex flex-col gap-3 z-20 pb-5 pl-3">
			{sociallist.map((social, index) => (
				<div className=" bg-purple w-fit p-3 rounded-full hover:animate-bounce" key={index}>
					<Link href={`${social.link}`}>
						<Image src={`${social.icon}`} alt={`${social.alt}`} width={60} height={60} />
					</Link>
				</div>
			))}
		</div>
	);
}

export default Social;
