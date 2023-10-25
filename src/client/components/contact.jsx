import React from "react";

const Contact = () => {
    return (
        <section>
            <h1>Contact Will for future porjects</h1>
            <form action="/submit" method="post">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />
                
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label for="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required />

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <input type="submit" value="Submit" />
            </form>
        </section>
    )
}

export default Contact