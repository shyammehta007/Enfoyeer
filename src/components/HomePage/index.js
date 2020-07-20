import React from 'react'
import { Link } from 'react-router-dom'
import 'styles/HomePage.css'

const profileCard = (user, image) => {

    const { id, name } = user

    return (
        <Link to={`/detail/${id}`} className='link'>
            <div className='linkContainer' key={id}>
                <img src={image} alt='profile' className='profileImage' />
                <div className='linkText'>
                    {name}
                </div>
            </div >
        </Link>
    )

}

const HomePage = (props) => {
    const { props: { users = [], images = [] } } = props
    if (!users.length || !images.length) { return null }
    return (
        <div className='profileContainer'>
            {users.map((user) => {
                const { id } = user
                const image = images[id % 10]
                return (
                    profileCard(user, image)
                )
            })}
        </div>
    )
}
export default HomePage