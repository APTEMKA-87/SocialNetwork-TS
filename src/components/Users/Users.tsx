import React from 'react';
import styles from './users.module.css';
import {UsersPropsType} from './UsersContainer';

export let Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgT03-9KI-FAAGe6qPJCzkQ9Lv7GH7hgmgzg&usqp=CAU',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'Boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgT03-9KI-FAAGe6qPJCzkQ9Lv7GH7hgmgzg&usqp=CAU',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'Boss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgT03-9KI-FAAGe6qPJCzkQ9Lv7GH7hgmgzg&usqp=CAU',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'Boss',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}