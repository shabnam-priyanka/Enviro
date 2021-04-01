import { useRouter } from 'next/router';

const Footer = () => {
    const activeRouter = useRouter();
    return (
        <footer>
            <div className="container-xl">
                {activeRouter.pathname === '/' ? (
                    <div>
                        <iframe
                            className="w-100"
                            style={{ height: '400px' }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.9745465278656!2d-75.70656808444572!3d45.36950867909986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce06695d5204d1%3A0xdc14410676cf59f3!2s900%20Dynes%20Rd%2C%20Ottawa%2C%20ON%20K2C%200J5!5e0!3m2!1sen!2sca!4v1617241894754!5m2!1sen!2sca"
                            allowFullScreen=""
                            loading="lazy"
                        />
                    </div>
                ) : (
                    ''
                )}

                <br />
                <div className="text-center">
                    {/* <a href="https://facebook.com/ottawa.reno.92" target="_blank">
                        <img src="/facebook.png" alt="" className="facebook" />
                    </a> */}

                    <p>900 Dynes Rd, Unit  </p>
                    <p>101 K Ottawa, ON </p>
                    <h5>Phone : 613-485-4177 </h5>
                    <h5>Email : Enviroottawa@gmail.com</h5>
                </div>
                <p className="text-center p-3 mt-0 mb-0">
                    Copyright Enviro-Home-Services {new Date().getFullYear()}{' '}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
