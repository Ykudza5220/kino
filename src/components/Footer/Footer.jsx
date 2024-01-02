import React from "react";
import "./Footer.css"


const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>For Business</h4>
                        <a href="/exployer">
                            <p>Exployer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb_fotter-links-div">
                        <h4>Resources</h4>
                        <a href="/resoures">
                            <p>Resourse Center</p>
                        </a>
                        <a href="/resoures">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resoures">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Partners</h4>
                        <a href="/exployer">
                            <p>Кинотеатр Пионер</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Follow us</h4>
                        <div className="socialmedia">
                      
                        </div>
                    </div>
                </div>


                <hr></hr> 
                <div className="sb_footer-below">
                    <div className="sb_footer copyright">
                        <p>
                            @2023 WATCHIT.All Rights.All videos and shows on this platform are trademarks of,and all related and content
                        </p>

                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>Terms&Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;