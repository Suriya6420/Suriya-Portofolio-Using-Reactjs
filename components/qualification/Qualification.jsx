/* eslint-disable no-unused-vars */
import React from 'react';
import './qualification.css';

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification 🧑🏻‍🎓</h2>
        <span className="section__subtitle">My Personel Journey 🚗</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Master of Computer Applications🎓</h3>
                            <span className="qualification__subtitle">Psna College of Engineering and Technology - Dindigul</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__round"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__round"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Bachelor of Computer Science🎓</h3>
                            <span className="qualification__subtitle">Sourashtra College - Madurai</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2021
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">HSC🧪</h3>
                            <span className="qualification__subtitle">Pasumalai Higher Secondary School - Madurai</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__round"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__round"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">SSLC🧪</h3>
                            <span className="qualification__subtitle">Pasumalai Higher Secondary School - Madurai</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2015 - 2016
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification