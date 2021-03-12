// import Image from 'next/image';

const WeBuildForYou = () => (
    <div className="container-xl">
        <section className="WeBuildForYou-content-area">
            <h1 className="WeBuildForYou-maine-title">WHAT CAN WE BUILD FOR YOU?</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4s justify-content-center">
                <div className="col">
                    <div className="weDo_cards card">
                        <img className="img-fluid" src="https://i.imgur.com/E0oqKFA.jpg" alt="" />
                        <h1>KITCHEN</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="weDo_cards card">
                        <img src="https://i.imgur.com/xRalC1J.jpg" alt="" />
                        <h1>BATHROOM</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="weDo_cards card">
                        <img src="https://i.imgur.com/X0Px34M.jpg" alt="" />
                        <h1>ROOF INSTALLATION</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="weDo_cards card">
                        <img src="https://i.imgur.com/8w1IfQM.jpg" alt="" />
                        <h1>ATTIC INSULATION</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="weDo_cards card">
                        <img src="https://i.imgur.com/lVsngMv.jpg" alt="" />
                        <h1>WINDOWS & DOORS</h1>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default WeBuildForYou;
