import Head from 'next/head';
import About from '../components/Home/About';

const AboutUs = () => {
    return (
        <div>
            <Head>
                <title>Ottawa-Reno || About page</title>
            </Head>
            
            <About />
        </div>
    );
};

export default AboutUs;