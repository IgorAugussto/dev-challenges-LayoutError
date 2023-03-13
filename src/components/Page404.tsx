import React from 'react';
import scarecrow from '../assets/img/Scarecrow.png';

const Page = () => {
    return (
        <main>
            <body>
                <div className='not-found'>
                    <h6>404 NOT FOUND</h6>
                </div>
                <div className='container'>
                    <img className='image' src={scarecrow} alt="Scarerow" />
                    <h2 className='text1-h'>I have bad news for you</h2>
                    <p className='text2-p'>The page you are looking
                        for might be removed or temporarily unavailable</p>
                    <p />
                    <button className='btn'>Back to homepage</button>
                </div>
            </body>
            <footer>
                <div className='footer'>
                    <p>Created by <span className="name-bold">IgorAugusto</span> - devChallenges.io</p>
                </div>
            </footer>
        </main>
    )
}

export default Page;