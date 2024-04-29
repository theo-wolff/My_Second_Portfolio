import "./Experiences.css";

import React from 'react';

const Experiences = () => {
    return (
        <>
        <div className="experiences-global-container">
            <h2 className='experiences-title'>My experiences</h2>
            <div className='experiences-title-bar'></div>
            <div className='experiences'>
                <div className='experiences-container'>
                    <div className='experiences-items'>
                        <div className='experiences-item'>
                            <div className="experiences-item-title">ASML: Software Intern</div>
                            <div className="experiences-item-date">April-August 2024</div>
                            <div className="experiences-item-content">PERT modernization</div>
                        </div>
                        <div className='experiences-bar'>
                            <div className="experiences-bar-head"></div>
                            <div className="experiences-bar-body"></div>
                        </div>
                        <div className='experiences-empty'><p>test</p></div>
                    </div>
                    <div className='experiences-items'>
                        <div className='experiences-item'>
                            <div className="experiences-item-title">Ravensburger: Salesman / Animator</div>
                            <div className="experiences-item-date">July 2023</div>
                            <div className="experiences-item-content">
                                <p>Inventory management, shelf replenishment</p>
                                <p>Product sales and customer advice</p>
                            </div>
                        </div>
                        <div className='experiences-bar'>
                            <div className="experiences-bar-head"></div>
                            <div className="experiences-bar-body"></div>
                        </div>
                        <div className='experiences-empty'><p>test</p></div>
                    </div>
                    <div className='experiences-items'>
                        <div className='experiences-item'>
                            <div className="experiences-item-title"></div>
                            <div className="experiences-item-date"></div>
                            <div className="experiences-item-content"></div>
                        </div>
                        <div className='experiences-bar'>
                            <div className="experiences-bar-head"></div>
                            <div className="experiences-bar-body"></div>
                        </div>
                        <div className='experiences-empty'><p>test</p></div>
                    </div>
                </div>




                {/* Personnal experiences */}
                <div className='experiences-container'>
                    <div className='experiences-items'>
                        <div className='experiences-item'>
                            <div className="experiences-item-title"></div>
                            <div className="experiences-item-date"></div>
                            <div className="experiences-item-content"></div>
                        </div>
                        <div className='experiences-bar'>
                            <div className="experiences-bar-head"></div>
                            <div className="experiences-bar-body"></div>
                        </div>
                        <div className='experiences-empty'><p>test</p></div>
                    </div>
                    <div className='experiences-items'>
                        <div className='experiences-item'>
                            <div className="experiences-item-title"></div>
                            <div className="experiences-item-date"></div>
                            <div className="experiences-item-content"></div>
                        </div>
                        <div className='experiences-bar'>
                            <div className="experiences-bar-head"></div>
                            <div className="experiences-bar-body"></div>
                        </div>
                        <div className='experiences-empty'><p>test</p></div>
                    </div>
                    <div className='experiences-items'>
                        <div className='experiences-item'>
                            <div className="experiences-item-title"></div>
                            <div className="experiences-item-date"></div>
                            <div className="experiences-item-content"></div>
                        </div>
                        <div className='experiences-bar'>
                            <div className="experiences-bar-head"></div>
                            <div className="experiences-bar-body"></div>
                        </div>
                        <div className='experiences-empty'><p>test</p></div>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
}

export default Experiences
