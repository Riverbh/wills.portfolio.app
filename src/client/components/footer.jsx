import React from "react";

import classes from "./footer.module.css"

const Footer = () => {

    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Rivers Website. All rights reserved.</p>
        </footer>
    )


}

export default Footer