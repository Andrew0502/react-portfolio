  import React from "react";

function Footer() {
    return (
        <>
        <footer style={{ height: "5px", background: "goldenrod" }}></footer>
            <footer class="footer mt-auto py-3"
                style={{
                backgroundColor: "#363695",
                textAlign: "center",
                color: "white",
                }}
            >
                <div class="container">
            <p>By: Andrew Gregory Christian Marcus</p>
            <p>423-309-8896</p>
            <a
            style={{ color: "goldenrod" }}
            href="mailto:agcmarcus@gmail.com?Subject=Website%20Enquiry"
            target="_top"
            >
            agcmarcus@gmail.com
            </a>
            </div>
        </footer>
        </>
    )
}
    
export default Footer;


{/* <body class="d-flex flex-column h-100"> */}