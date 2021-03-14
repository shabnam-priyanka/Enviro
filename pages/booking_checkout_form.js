// import Router from 'next/router';
import emailjs from 'emailjs-com';
import Head from 'next/head';
import React, { useContext } from 'react';
import { BookingContext } from '../components/Layout';
import BookingCard from '../components/ShareComponents/CheckoutCard';

const booking_checkout_form = () => {
    const [bookingData, setBookingData] = useContext(BookingContext);


    const sendEmail = (e) => {
        e.preventDefault();

        // console.log(e.target)
        emailjs.sendForm('service_4xbvinj', 'template_g5g82e9', e.target, 'user_bOfceydq85aQa6WDLc22l')
            .then((result) => {
                if (result) {
                    alert("✅Your message has been sent successfully✅")
                    document.getElementById("form1").reset();
                }
                console.log(result.text);
            }, (error) => {
                if (error) {
                    alert("⚠Sorry, your message could not be sent. Please try again🔄")
                }
                console.log(error.text);
            });
    }

    return (
        <>
            <Head>
                <title>Ottawa-Reno || Checkout-form</title>
            </Head>
            <section className="checkout-form-area">
                <div className="container-xl">
                    <div className="row booking-checkout-form">
                        <div className="col-md-7">
                            {/* form starts */}
                            <h3 className='mt-4 mb-4 text-center'>Customer Information</h3>
                            <form onSubmit={sendEmail}  id="form1">
                                <div className="row">
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First name *"
                                            name="firstName"
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last name *"
                                            name="lastName"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Email *"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPhoneNumber"
                                            placeholder="Phone Number *"
                                            name="phone"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        name="address"
                                        placeholder="Address *"
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputCity"
                                            name="city"
                                            placeholder="City *"
                                            required
                                        />
                                    </div>

                                    <div className="form-group col-md-6">

                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputZip"
                                            name="postalCode"
                                            placeholder="Postal Code *"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputCity"
                                            name="service"
                                            placeholder="Service *"
                                            required
                                            defaultValue={bookingData.serviceName}
                                        />
                                    </div>

                                    <div className="form-group col-md-4">

                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputZip"
                                            name="date"
                                            placeholder="Date *"
                                            required
                                            defaultValue={bookingData.date}
                                        />
                                    </div>
                                    <div className="form-group col-md-4">

                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputZip"
                                            name="time"
                                            placeholder="Time *"
                                            required
                                            defaultValue={bookingData.bookingTime}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-group">
                                        <label className="textarea-label" htmlFor="exampleFormControlTextarea1">
                                            Detail Message
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            name="message"
                                            required
                                            rows="3"
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                            </button>
                            </form>
                            <br />
                            <p>* Required Info</p>
                            <br />

                        </div>
                        <div className="col-md-5">
                            <BookingCard />
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                // .form-control::placeholder {
                //     color: black;
                //   }
                  .form-control{
                      color: black;
                      font-weight: 600;
                  }
                  .form-control:focus {
                    background-color: #E8F0FE;
                  }
                  textarea{
                      background: none;
                  }
                  .textarea-label{
                      color: black;
                      font-weight: 600;
                  }
                `}
            </style>
        </>
    );
};

export default booking_checkout_form;
