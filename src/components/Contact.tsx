"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

function Contact() {
	// const [state, handleSubmit] = useForm("xpwazpyn");

	// if (state.succeeded) {
	// 	toast("thanks for connecting!🤝");
	// }
	return (
		<div className="mt-20 pt-10 py-5 px-1 md:px-20 " id="contact">
			<h1 className="text-5xl md:text-6xl font-bold text-center">
				<span className="text-purple">Contact</span> Me
			</h1>

			<div className="flex justify-center items-center bg-black md:bg-black mt-1 md:mt-16 py-3 px-3 rounded-3xl shadow-md shadow-slate-900">
				<div className=" hidden md:block w-fit  ">
					<Image src="/Contact.svg" alt="img" width={70} height={70} className=" w-[70rem] h-auto  rounded-3xl" />
				</div>

				<div className=" leading-7 px-1 md:px-10 pt-10  ">
					<h1 className="text-2xl ">Get in Touch </h1>
					<p className="text-md text-slate-400  ">
						My inbox is always open&#44; Whether you have a question&#44; an idea&#44; or just want to say &quot;hi&quot;👋&#44; feel free to drop a message, I&apos;m excited to hear
						from you!👂 <br />
						🎉 Let&apos;s connect and create something amazing together 🤝
					</p>

					<form name="contact" method="POST" data-netlify="true" className="mt-8 flex flex-col justify-center items-end gap-y-4">
						<input id="fullname" type="text" name="Fullname" placeholder="FullName*" required className="bg-slate-900 w-full rounded-lg px-3 py-2 " />

						<input id="email" type="email" name="email" placeholder="Email*" required className="bg-slate-900 w-full rounded-lg px-3 py-2 " />
						{/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
						<textarea id="message" name="message" required placeholder="Message*" className="bg-slate-900 w-full rounded-lg px-3 py-2 " />
						{/* <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
						<button type="submit" className="bg-purple hover:bg-violet-800 px-5 py-1 rounded-lg text-gray-300 flex justify-center items-center gap-2 ">
							Send
							<FaLocationArrow />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
