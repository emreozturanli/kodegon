import React from 'react'
import data from '../utils/data'
import SingleCard from './SingleCard'
import Masonry from 'react-masonry-css'

const Projects = () => {

    const breakpointColumnsObj = {
        default: 4,
        1350: 3,
        1024: 2,
        768: 1,
    };

    return (
        <section className='projects'>
            <h2>Suspendisse Tempus</h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    data.map((e, i) => <SingleCard key={i} {...e} />)
                }
            </Masonry>
        </section>
    )
}

export default Projects