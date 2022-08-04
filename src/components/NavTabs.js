import React, { useState } from 'react'
import useWindowSize from '../hooks/useWindowSize';
import navTabData from '../utils/navTabData'

const NavTabs = () => {
    const [tab, setTab] = useState(navTabData[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [more, setMore] = useState(false)
    const [width] = useWindowSize()

    return (
        <section className='navtabs'>
            <nav>
                {
                    navTabData.map((item, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => { setTab(item); setSelectedIndex(index) }}
                                className={(index === selectedIndex) && 'line-effect'}
                            >
                                {item.title}
                            </button>
                        )
                    })
                }
            </nav>
            <article>
                <h2>{tab.title}</h2>
                <p>{tab.content}</p>
                <p>{tab.content2}</p>
                {more && <>
                <p>{tab.content3}</p>
                <p>{tab.content4}</p>
                <p>{tab.content5}</p>
                </>}
                {width > 768 && <>
                <p>{tab.content3}</p>
                <p>{tab.content4}</p>
                <p>{tab.content5}</p>
                </>}
                <br />
            </article>
            {
                width < 768 &&
                <div className="btn-container">
                    {
                        more
                            ? <button
                                onClick={() => setMore(!more)}>
                                ÖZET GÖSTER<span>-</span>
                            </button>
                            : <button
                                onClick={() => setMore(!more)}>
                                YAZININ DEVAMI<span>+</span>
                            </button>
                    }
                </div>
            }

        </section>

    )
}

export default NavTabs