import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
	return (
		<div className="bg-black-100  flex flex-col justify-center items-center h-screen">
			<div className="mt-8">
				<Image src={"/images/404.svg"} alt="404Error" width={600} height={600} />
			</div>
			<div className="text-xl">
				Go back to{" "}
				<Link href="/" className=" text-purple  font-semibold">
					Home
				</Link>
			</div>
		</div>
	);
}
