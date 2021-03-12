import Link from 'next/link';
import React, { useContext } from 'react';
import { BookingContext } from '../Layout';

const book = [
    {
        id: 0,
        name: 'Kitchen Renovation',
        img: 'https://i.imgur.com/smK2dB1.jpg',
    },
    {
        id: 1,
        name: 'Living Room Renovation',
        img: 'https://i.imgur.com/kMGgJ8h.jpg',
    },
    {
        id: 2,
        name: 'Bedroom Renovation',
        img: 'https://i.imgur.com/5EdHODZ.jpg',
    },
    {
        id: 3,
        name: 'Bathroom Renovation',
        img:
            'https://i.imgur.com/dyjDuLh.jpg',
    },
    {
        id: 4,
        name: 'Family Room',
        img: 'https://i.imgur.com/fV9Bcj7.jpg',
    },
    {
        id: 5,
        name: 'Porches & Decks',
        img: 'https://i.imgur.com/JJIRHgq.jpg',
    },
    {
        id: 6,
        name: 'Stairs & Railings',
        img: 'https://i.imgur.com/TKI0key.jpg',
    },
    {
        id: 7,
        name: 'Pergolas & Gazebos',
        img: 'https://i.imgur.com/ArYRpwE.jpg',
    },
    {
        id: 8,
        name: 'Roof Top',
        img: 'https://i.imgur.com/X0Px34M.jpg',
    },
    {
        id: 9,
        name: 'HVAC Services',
        img: 'https://i.imgur.com/k4jXA7y.jpg',
    },
    {
        id: 10,
        name: 'Attic Insulation',
        img: 'https://i.imgur.com/8w1IfQM.jpg',
    },
];



const SomeRenovations = () => {

    const [bookingData, setBookingData] = useContext(BookingContext);
    const serviceNameSetCheckout = (serviceName) => {
        const AllBookingData = { ...bookingData };
        AllBookingData.serviceName = serviceName;
        setBookingData(AllBookingData);
    };


    const bookingList = book.slice(0, 5).map((booking) => (
        <div key={booking.id} className="col">
            <div className="card" style={{ background: '#E4E5E9' }}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={booking.img} />
                </div>
                <div className="card-content">
                    <h5 className="someReno_card-title text-truncate">{booking.name}</h5>
                    <hr />
                    <span className="card-title activator grey-text text-darken-4">
                        <i className="material-icons right">view more</i>
                    </span>

                    <div onClick={() => serviceNameSetCheckout(booking.name)}>
                        <Link href="/bookings_checkout_calendar">
                            <a>
                                <button className="someReno_card-btn">Book for Consultation</button>
                            </a>
                        </Link>
                    </div>

                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        <h5 className="text-truncate">{booking.name}<i className="material-icons right">close</i></h5>
                    </span>
                    <hr />
                    <p>
                        Here is some more information about this product that is only
                        revealed once clicked on.
                                </p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container-xl">
            <section className="someRenovations-area">
                <h3 className="someRenovations">Some of Our Renovations</h3>
                <hr className="someRenoHr" />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4s justify-content-center">
                    {bookingList}
                </div>
            </section>
        </div>
    );
};

export default SomeRenovations;
