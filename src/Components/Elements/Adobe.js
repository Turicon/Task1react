import React from 'react'
import { Images } from "../Images"
const Adobe = () => {
    return (
        <div className='adobe'>
     
            <div className='adobe_header_area'>
                <div className='adobe_header'>
                    <div>
                        <img src={Images.adobe} />
                        <div className='link'>https://www.adobe.com</div>
                    </div>
                    <div className='rating_area'>
                        <img src={Images.letter} />
                        <div className='rating'>
                            <p>3.5</p>
                            <p>Local rating</p>
                        </div>
                        <div className='rating'>
                            <p>3.5</p>
                            <p>Local rating</p>
                        </div>
                    </div>
                </div>
                <div className='adobe_desc'>
                    <h2>   Adobe: Creative, marketing and document management ...</h2>
                    <p>
                        Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.
                    </p>
                </div>
                <div className='adobe_tags'>
                    <span>adobe</span>
                    <span>design</span>
                    <span>creative</span>
                    <span>designer</span>
                    <span>photoshop</span>
                    <span>illustrator</span>
                </div>
            </div>
        </div>
    )
}

export default Adobe