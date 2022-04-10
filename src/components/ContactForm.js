// import { useRef } from "react";
// import emailjs, { init } from "@emailjs/browser";
// init(process.env.REACT_APP_EMAILJS_ID);

const ContactForm = () => {
	// const form = useRef();

	// const sendEmail = (e) => {
	//   e.preventDefault();
	//   const formMessage = document.querySelector(".form-message");

	//   emailjs
	//     .sendForm(
	//       "service_vhum8l9",
	//       "template_b5o7zlj",
	//       form.current,
	//       process.env.REACT_APP_EMAILJS_ID
	//     )
	//     .then(
	//       (result) => {
	//         form.current.reset();
	//         formMessage.innerHTML = "<p className='success'>Message sent!</p>";
	//         setTimeout(() => {
	//           formMessage.innerHTML = "";
	//         }, 2500);
	//       },
	//       (error) => {
	//         formMessage.innerHTML =
	//           "<p className='error'>An error has occurred, please try again.</p>";
	//         setTimeout(() => {
	//           formMessage.innerHTML = "";
	//         }, 2500);
	//       }
	//     );
	// };

	return (
		<div className='contact-form'>
			<h2>contactez nous</h2>
			<p>
				Si vous souhaitez en savoir plus sur notre travail et nos
				forfaits, veuillez nous contacter ici :
			</p>
			<form
				/* ref={form} onSubmit={sendEmail} */ className='form-content'
			>
				<input
					type='text'
					id='name'
					name='name'
					required
					autoComplete='off'
					placeholder='Nom'
				/>
				<input
					type='email'
					id='email'
					name='email'
					required
					autoComplete='off'
					placeholder='Email'
				/>
				<input
					type='text'
					id='phone'
					name='phone'
					required
					autoComplete='off'
					placeholder='Téléphone'
				/>
				<textarea
					id='message'
					name='message'
					required
					placeholder='Écrivez votre demande...'
				/>
				<input type='submit' value='Envoyer' className='button hover' />
			</form>

			<div className='form-message'></div>
		</div>
	);
};

export default ContactForm;
