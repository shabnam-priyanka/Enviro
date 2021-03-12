import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { BookingContext } from '../Layout';

const BookingCard = (props) => {
    const { date, time } = props;

    const activeRouter = useRouter();
    const [bookingData, setBookingData] = useContext(BookingContext);

    const setAllBookingData = () => {
        const AllBookingData = { ...bookingData };
        AllBookingData.date = date;
        AllBookingData.bookingTime = time;
        setBookingData(AllBookingData);
    };

    if (bookingData.serviceName) {
        window.onbeforeunload = function () {
            if (bookingData.serviceName) {
                return 'If you reload this page, your previous action will be repeated';
            }
            // Don't return anything
            ('');
        };
    } else {
        ('');
    }

    return (
        <div className="booking-card">
            {bookingData.serviceName ? (
                <h4>{bookingData.serviceName}</h4>
            ) : (
                <h6 style={{ color: 'red' }}>Select your package from the booking page</h6>
            )}

            <h5>1 hr</h5>
            <hr />

            <h5>{date || bookingData.date}</h5>

            {time || bookingData.bookingTime ? (
                <h5>{time || bookingData.bookingTime}</h5>
            ) : (
                <h5 style={{ color: 'red' }}>Select your time</h5>
            )}

            {activeRouter.pathname === '/bookings_checkout_calendar' ? (
                <div>
                    {bookingData.serviceName && (time || bookingData.bookingTime) ? (
                        <Link href="/booking_checkout_form">
                            <a>
                                <button type="button" onClick={setAllBookingData}>
                                    Next
                                </button>
                            </a>
                        </Link>
                    ) : (
                        <button type="button" className="disabled">
                            Disabled
                        </button>
                    )}
                </div>
            ) : (
                <span>&larr;</span>
            )}
        </div>
    );
};

export default BookingCard;
