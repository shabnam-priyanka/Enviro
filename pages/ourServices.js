import Link from 'next/link';
import React, { useContext } from 'react';
import { BookingContext } from '../components/Layout';

const service = [
    {
        id: 0,
        name: 'Kitchen Renovation',
        img: 'https://i.imgur.com/Fo63mwk.jpg',
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
        img: 'https://i.imgur.com/JdP4fwX.jpg',
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


const ourServices = () => {
    const [bookingData, setBookingData] = useContext(BookingContext);
    const serviceNameSetCheckout = (serviceName) => {
        const AllBookingData = { ...bookingData };
        AllBookingData.serviceName = serviceName;
        setBookingData(AllBookingData);
    };

    return (
        <div>
            {
                service.map(sr =>
                    <div key={sr.id} style={{backgroundImage: `url(${sr.img})`}} className="ourServiceCard d-flex align-items-center justify-content-center">
                        <div>
                            <h5>{sr.name}</h5>
                            <Link  href="/bookings_checkout_calendar">
                                <a onClick={() => serviceNameSetCheckout(sr.name)}>
                                    <button>Book for Consultation</button>
                                </a>
                            </Link>
                        </div>
                    </div>
                    // <div className="card ourServiceText">
                    // <img className="card-img ourservice" src={sr.img} alt="Card image"/>
                    // <div className="card-img-overlay">
                    //     <h5 className="card-title">{sr.name} </h5>
                    //     <Link href="/bookings_checkout_calendar">
                    //         <a>
                    //             <button className="someReno_card-btn">Book for Consultation</button>
                    //         </a>
                    //     </Link>
                    // </div>
                    // </div>
                )
            }
        </div>
    );
};

export default ourServices;