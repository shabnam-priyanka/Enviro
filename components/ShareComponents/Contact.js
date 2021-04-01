import emailjs from 'emailjs-com';
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        console.log(e.target);
        emailjs.sendForm('service_4xbvinj', 'template_g5g82e9', e.target, 'user_bOfceydq85aQa6WDLc22l').then(
            (result) => {
                if (result) {
                    alert('✅Your message has been sent successfully✅');
                    document.getElementById("form2").reset();
                }
                console.log(result.text);
            },
            (error) => {
                if (error) {
                    alert('⚠Sorry, your message could not be sent. Please try again🔄');
                }
                console.log(error.text);
            }
        );
    };

    const isJustMob = useMediaQuery({
        query: '(min-device-width: 700px)'
      })

    return (
        <div className="contact-area d-flex align-items-center">
            <section className="container-xl">
                <div className="row">
                    <div className="col-md text-center">
                        {isJustMob? <h2>Contact Us</h2>: <h5>Contact Us</h5> }
                        
                        <h5> Enviroottawa@gmail.com</h5>

                        {/* <h6> 1+ (613)-485-4117</h6> */}
                        {/* <img src="https://i.imgur.com/xsIKyi0.png" alt="" /> */}
                        <img className="Enviro img-fluid" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.15752-9/159905222_980154072791686_7362051105737484981_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=V34AoZVUMBUAX9AZMQB&_nc_ht=scontent-ort2-1.xx&oh=2bccc169500bc3458b38eec242751292&oe=606F8914" alt="" />
                    </div>
                    <div className="col-md">
                        <h2 className="contact-head_line">SEND US A MESSAGE</h2>
                        <div className="row">
                            <form onSubmit={sendEmail}  id="form2" className="col s12">
                                <div className="row mb-0">
                                    <div className="input-field col s6">
                                        <input
                                            name="firstName"
                                            required
                                            id="first_name"
                                            type="text"
                                            className="validate"
                                        />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            name="lastName"
                                            required
                                            id="last_name"
                                            type="text"
                                            className="validate"
                                        />
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="row mb-0">
                                    <div className="input-field col s6">
                                        <input
                                            name="phone"
                                            required
                                            id="phone"
                                            type="text"
                                            className="validate"
                                        />
                                        <label htmlFor="phone">phone</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            name="address"
                                            required
                                            id="Address"
                                            type="text"
                                            className="validate"
                                        />
                                        <label htmlFor="Address">Address</label>
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="input-field col s12">
                                        <input
                                            name="subject"
                                            required
                                            id="subject"
                                            type="text"
                                            className="validate"
                                        />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="input-field col s12">
                                        <input
                                            name="email"
                                            required
                                            id="email"
                                            type="email"
                                            className="validate"
                                        />
                                        <label htmlFor="email">email</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea
                                            name="message"
                                            type="text"
                                            id="textarea1"
                                            required
                                            className="materialize-textarea"
                                        />
                                        <label htmlFor="textarea1">Type your message here</label>
                                    </div>
                                </div>

                                <button
                                    className="btn contact-submit-btn "
                                    type="submit"
                                    value="Send"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
