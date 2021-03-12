import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
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
        img: 'https://i.imgur.com/h2wf4Pm.jpg',
    },
    {
        id: 2,
        name: 'Bedroom Renovation',
        img: 'https://i.imgur.com/USd6hoJ.jpg',
    },
    {
        id: 3,
        name: 'Bathroom Renovation',
        img: 'https://i.imgur.com/scTHpKs.jpg',
    },
    {
        id: 4,
        name: 'Family Room',
        img: 'https://i.imgur.com/WpfPL3h.jpg',
    },
    {
        id: 5,
        name: 'Porches & Decks',
        img: 'https://i.imgur.com/JJIRHgq.jpg',
    },
    {
        id: 6,
        name: 'Stairs & Railings',
        img: 'https://i.imgur.com/Jwo106q.jpg',
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

const BookOnline = () => {
    const [bookingData, setBookingData] = useContext(BookingContext);
    const serviceNameSetCheckout = (serviceName) => {
        const AllBookingData = { ...bookingData };
        AllBookingData.serviceName = serviceName;
        setBookingData(AllBookingData);
    };

    const bookingList = book.map((booking) => (
        <div key={booking.id} className="col">
            <div className="card bookServiceCards">
                <Image
                    alt="Renovations img"
                    src={booking.img}
                    layout="responsive"
                    width={700}
                    height={475}
                    priority
                />
                <div className="card-body">
                    <h5 className="card-title text-truncate">{booking.name}</h5>
                    <hr />
                    <div onClick={() => serviceNameSetCheckout(booking.name)}>
                        <Link href="/bookings_checkout_calendar">
                            <a>
                                <button>Book for Consultation</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .card-title {
                    font-size: 20px !important;
                    font-weight: bold !important;
                }

                hr {
                    background-color: #fff;
                }

                button {
                    border: none;
                    padding: 5px;
                    width: 100%;
                    font-weight: bold;
                    background-color: #efefef;
                    border-radius: 3px;
                }
                button:hover {
                    background: #efba8e;
                }
            `}</style>
        </div>
    ));

    return (
        <div className="container-xl">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {bookingList}
            </div>
        </div>
    );
};

export default BookOnline;
