import React from "react";

interface GB {
	children?: React.ReactNode;
	className?: string;
}
function GradientBorderButton({ children, className }: GB) {
	return (
		<button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-xl p-px  leading-6 inline-block">
			<span className="absolute inset-0 overflow-hidden rounded-xl">
				<span className="absolute inset-0 rounded-lx bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-5 transition-opacity duration-500 group-hover:opacity-100" />
			</span>
			<div className={`relative flex space-x-2 items-center z-10  bg-zinc-950  ring-1 ring-white/10 ${className}`}>{children}</div>
			<span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-700/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
		</button>
	);
}

export default GradientBorderButton;
