import React from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { FaRegFolder } from 'react-icons/fa';

const SingleCard = ({ title, author, content, date, image }) => {
    const [width] = useWindowSize()

    return (
        <div className='card'>
            <img src={image} alt={title} />
            <div className="info-container">
                <div className="info-header">
                    <h4>{title}</h4>
                    <h5>{author}</h5>
                </div>

                {width > 768 && <p className='content'>{content}</p>}
                <div className='info-footer'>
                    {width > 768 &&  <FaRegFolder/>}
                    <p className='date'>{date}</p>
                    <span>⟶</span>
                </div>

            </div>
        </div>
    )
}

export default SingleCard