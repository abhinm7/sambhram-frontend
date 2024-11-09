import './SuccessPage.css';
import React from 'react';

const SuccessPage = () => {
    return (
        <>
            <div className="success-page">
                <div className="success-component">

                    <div className="flying-lantern">
                        <img src="https://oriental-decor.com/wp-content/uploads/2023/10/2545-w-900x900.png" alt="Flying Lantern" />
                    </div>
                    <div className="flying-lantern">
                        <img src="https://oriental-decor.com/wp-content/uploads/2023/10/2545-w-900x900.png" alt="Flying Lantern" />
                    </div>
                    <div className="success-up">
                        <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" alt="Checkmark" />
                        <h2>Registered successfully</h2>
                    </div>
                    <div className="success-down">
                        <div className="container">
                            <a className="button type--C">
                                <div className="button__line"></div>
                                <div className="button__line"></div>
                                <span className="button__text">View Ticket</span>
                                <div className="button__drow1"></div>
                                <div className="button__drow2"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuccessPage;
