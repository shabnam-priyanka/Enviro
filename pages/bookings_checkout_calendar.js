import Head from 'next/head';
import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BookingContext } from '../components/Layout';
import BookingCard from '../components/ShareComponents/CheckoutCard';

const morning = [
    { time: '7:00am', date: '2021-3-18' },
    { time: '8:00am', date: '2021-3-18' },
    { time: '9:00am', date: '2021-3-18' },
    { time: '10:30am', date: '2021-3-18' },
    { time: '11:00am', date: '2021-3-18' },
];

const afternoon = [
    { time: '12:00pm', date: '2021-3-18' },
    { time: '1:00pm', date: '2021-3-18' },
    { time: '2:00pm', date: '2021-3-18' },
    { time: '3:00pm', date: '2021-3-18' },
    { time: '4:00pm', date: '2021-3-18' },
    { time: '5:00pm', date: '2021-3-18' },
];

const evening = [
    { time: '6:00pm', date: '2021-3-18' },
    // { time: '7:00pm', date: '2021-3-18' },
];

const bookings_checkout_calendar = () => {
    const { bookingData, setBookingData } = useContext(BookingContext);

    const [time, setTime] = useState('');

    const [value, onChange] = useState(new Date());

    const today = value;
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const morningDates = morning.map((morn) => (
        <button onClick={() => setTime(`${morn.time} Morning`)} key={morn.time} className="time-cards">
            {morn.time}
        </button>
    ));

    const afternoonDates = afternoon.map((afte) => (
        <button
            onClick={() => setTime(`${afte.time} Afternoon`)}
            key={afte.time}
            className="time-cards"
        >
            {afte.time}
        </button>
    ));

    const eveningDates = evening.map((eve) => (
        <button onClick={() => setTime(`${eve.time} Evening`)} key={eve.time} className="time-cards">
            {eve.time}
        </button>
    ));

    return (
        <>
        <Head>
                <title>Ottawa-Reno || Checkout-calendar</title>
            </Head>
            <div className="checkout_calendar_area d-flex align-items-center">
                <section className="container-xl">
                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="text-center">{date}</h5>
                            <div className="d-flex justify-content-center">
                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                    showFixedNumberOfWeeks
                                />
                            </div>
                            <div className="row row-cols-2 row-cols-sm-3 g-4text-center mt-5">
                                <div className="col">
                                    <h5 className="text-center">Morning</h5>
                                    {morningDates}
                                    <div className="time-SundayOff">Sunday off</div>
                                </div>
                                <div className="col">
                                    <h5 className="text-center">Afternoon</h5>
                                    {afternoonDates}
                                    <div className="time-SundayOff">Sunday off</div>
                                </div>
                                <div className="col">
                                    <h5 className="text-center">Evening</h5>
                                    {eveningDates}
                                    <div className="time-SundayOff">Sunday off</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <BookingCard time={time} date={date} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default bookings_checkout_calendar;