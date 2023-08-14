import React from 'react';
import './MainContent.css'; // Make sure to adjust the path based on your project structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faFilm} from '@fortawesome/free-solid-svg-icons';
const MainContent = () => {
    return (
        <div className="main-content">
            <div className="image-grid">
                <img src='./src/assets/image1.jpg' alt="Image 1" className='first'/>
                <img src='./src/assets/image2.jpg' alt="Image 2"className='first' />
                <img src='./src/assets/image3.jpg' alt="Image 3" />
                <img src='./src/assets/image4.jpg' alt="Image 4" />
                <img src='./src/assets/image5.jpg' alt="Image 5" />
                <img src='./src/assets/image8.jpg' alt="Image 8" />
                <img src='./src/assets/image6.jpg' alt="Image 6" />
                <img src='./src/assets/image7.jpg' alt="Image 7" />
                {/* You now have 7 images in the grid */}
            </div>
            <br />
            <hr  color='black' height = '5px'/>
            <FontAwesomeIcon icon={faFilm} flip size="2xl" className='reel-icon'/>
            <span className='Shraddha' >Reels:</span>
            <div className="Reel-Section">
                <a href="../src/reels.html">
            <div className='vide'>
            <img src='./src/assets/reel.png' alt="Image 7" /><br />
            </div>
                </a>
                <a href="../src/reels.html">
            <div className='vide'>
            <img src='./src/assets/reel2.png' alt="Image 7" /><br />
            </div>
                </a>
            </div>
        <a href= "../src/bot.html" target='_blank' ><img src="../src/assets/bot.png" alt=""  className='Chat-bot'/></a>

        </div>
    );
};

export default MainContent;
