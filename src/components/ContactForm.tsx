import React from "react";

function ContactForm() {
	// const handleSubmit = (e) => {
	// 	const data = {
	// 	  name: e.target.name.value,
	// 	  email: e.target.email.value,
	// 	  message: e.target.message.value,
	// 	};

	// 	fetch('/', {
	// 	  method: 'POST',
	// 	  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	// 	  body: encode({ 'form-name': 'contact-form', ...data }),
	// 	})
	// 	  .then(() => alert('Success!'))
	// 	  .catch((error) => alert(error));

	// 	e.preventDefault();
	//   };

	return (
		<div>
			<form name="contact" action={"/success"} method="POST" data-netlify="true">
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
