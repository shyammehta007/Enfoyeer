import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'styles/DedicatedPage.css'
import Aos from 'aos';
import "aos/dist/aos.css"

const DedicatedPage = (props) => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    const {
        props: {
            target: { match }
        }
    } = props
    const detailPageId = match.params.id
    const { props: { users = [], images = [] } } = props
    if (!users.length || !images.length) { return null }
    const userData = users[detailPageId % 10];
    const profilePicture = images[detailPageId % 10]

    const Content = () => {
        const {
            name,
            username,
            address: {
                city
            },
            company: {
                name: comapnyName,
                catchPhrase,
                bs
            }
        } = userData

        return (
            <div className='gridContainer'>
                <div className='textGrid'>
                    <div data-aos='fade-up' className='boxes'>
                        <div className='size first'>
                            <div className='gridText'>
                                Name:<span className='input'>{name}</span><br />
                            ({username})
                        </div>
                            <div className='gridText'>
                                City:<span className='input'>{city}</span>
                            </div>
                        </div>

                    </div>
                    <div data-aos='fade-up' className='boxes'>
                        <div className='size'>
                            <div className='gridText'>
                                Company: <span className='input'>{comapnyName}</span>
                            </div>
                            <div className='gridText'>
                                Moto: <span className='input'>{catchPhrase}</span>
                            </div>
                            <div className='gridText'>
                                Speciality: <span className='input'>{bs}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            <div className='detailPage'>
                <Link to='/' className='backLink'>
                    <div className='backArrow'>&#x2B05;</div>
                </Link>
                <Content />
                <img src={profilePicture} className='backgroundImage' />
            </div>
            {Footer(userData)}
        </Fragment>
    )
}

const Footer = user => {
    const {
        email,
        phone,
        website
    } = user

    return (
        <div className='footerContainer'>
            <div className='footerTitle'>CONTACT</div>
            <div className='footerContent'>
                <ul className='list'>
                    <li className='items'>E-mail: <span className='answer'>{email}</span> </li>
                    <li className='items'>Phone: <span className='answer'>{phone}</span> </li>
                    <li className='items'>Web-site: <span className='answer'>{website}</span> </li>
                </ul>
            </div>
        </div>
    )
}
export default DedicatedPage

//21E6