import React from "react";

function ContactForm() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const myForm = event.target as HTMLFormElement;
		const formData = new FormData(myForm);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData as any).toString(),
		})
			.then(() => alert("Form successfully submitted"))
			.catch((error) => alert(error));
	};

	return (
		<div>
			<form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
				<input type="hidden" name="form-name" value="contact" />
				<p>
					{/* <input type="text" name="name" id="name" /> <br /> */}
					<label htmlFor="name"> Name: </label> <br />
					<input type="text" name="name" id="name" />
				</p>
				<p>
					<label htmlFor="email"> Your Email: </label> <br />
					<input type="email" name="email" id="email" />
				</p>
				<p>
					<label htmlFor="message"> Message: </label> <br />
					<textarea name="message" id="message"></textarea>
				</p>
				<p>
					<button type="submit" className=" bg-violet-700  px-4 rounded-md">
						Send
					</button>
				</p>
			</form>
		</div>
	);
}

export default ContactForm;
