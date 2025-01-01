

const Footer = () =>{

    const h3style = "text-[#878787] font-normal text-xs pb-4"

    return(
        <div className="text-xs font-semibold bg-[rgba(0,0,0,0.88)] text-white">
            <div className="flex container-h3 justify-between pb-10 p-12">
                <div className="flex gap-20 ">
                    <div>
                        <h3 className={h3style }>ABOUT</h3>
                        <div>
                            <p>Contact Us</p>
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Flipkart Stories</p>
                            <p>Press</p>
                            <p>Corporate Information</p>
                        </div>
                    </div>
                    <div>
                        <h3 className={h3style }>GROUP COMPANIES</h3>
                        <div>
                            <p>Myntra</p>
                            <p>Cleartrip</p>
                            <p>Shopsy</p>
                        </div>
                    </div>
                    <div>
                        <h3 className={h3style }>HELP</h3>
                        <div>
                            <p>Payments</p>
                            <p>Shipping</p>
                            <p>Cancellation & Returns</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                    <div>
                        <h3 className={h3style }>CONSUMER POLICY</h3>
                        <div>
                            <p>Cancellation & Returns</p>
                            <p>Terms Of Use</p>
                            <p>Security</p>
                            <p>Privacy</p>
                            <p>Sitemap</p>
                            <p>Grievance Redressal</p>
                            <p>EPR Compliance</p>
                        </div>
                    </div>
                </div>

                <div className="border-r-[1px] border-[rgb(50,59,80)]"></div>

                <div className="flex w-2/6 gap-10  right-0">
                    <div>
                        <div>
                            <h3 className={h3style }>Mail Us:</h3>
                            <p>
                                Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahali Village, Bengaluru, 560103, Karnataka, India
                            </p>
                        </div>
                        <div>
                            <h3 className={h3style }>Social:</h3>
                        </div>
                    </div>
                    <div>
                        <h3 className={h3style }>Registered Office Address:</h3>
                        <p>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru,560103, Karnataka, India <br />CIN : U51109KA2012PTC066107 <br /> Telephone: XXXXX XXXXX</p>
                    </div>
                </div>
            </div>

            <div className="w-full border-b-[1px] border-[rgb(48,54,67)]"></div>
            
            <div className="grid grid-flow-col pb-6 pt-6 lg:gap-28 px-10">
                <div className="flex gap-2">
                    <img className="max-h-4" src="/images/Footer/Become a Seller.svg" alt="" />
                    <p>Become a Seller</p>
                </div>
                <div className="flex">
                    <img className="max-h-4" src="/images/Footer/Advertise.svg" alt="" />
                    <p>Advertise</p>
                </div>  
                <div className="flex">
                    <img className="max-h-4" src="/images/Footer/Gift Cards.svg" alt="" />
                    <p>Gift Cards</p>
                </div> 
                <div className="flex">
                    <img className="max-h-4" src="/images/Footer/Help Center.svg" alt="" />
                    <p>Help Center</p>
                </div>            
                <p>&copy; 2007-2025 Flipkart.com</p>
                <p><img className="" src="/images/Footer/Cards.svg" alt="image" /></p>
            </div>
        </div>
    )
}

export default Footer;