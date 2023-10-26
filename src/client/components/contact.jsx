import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xe3qcy5', 'template_kbyhour', form.current, 'w8q4DxDU9-lZcVbn1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section>
      <div className="container">
        <h2 className="--text-center">Contact Will</h2>
        <form ref={form} onSubmit={sendEmail} className="--form-control --card --flex-center --dir-column" >
          <input type="text" placeholder="Full Name" name="user_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea name="message" cols={30} rows={10}></textarea>
          <button type="submit" className="--btn --btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

//  const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default Contact