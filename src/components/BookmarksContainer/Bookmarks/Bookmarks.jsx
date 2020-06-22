import React from 'react'

export const Bookmarks = props => {
    return (
        <div>
            {!props.favoritesList.length
                ? <p>You have not added anything to your favorites.</p>
                : props.favoritesList.map(el => (
                    <div>{el}</div>
                ))
            }
        </div>
    )
}
