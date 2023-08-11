import React from 'react';
import Card from './Card';


export default function CardList({photos}) {
    return (
        <div>
          {
            photos.map((photo, i) => {
                return(
                    <Card
                    key={photos[i].id}
                    id={photos[i].userId}
                    userId={photos[i].userId}
                    title={photos[i].title}
                    />
                )
            }
            )

            }
        
            </div>

    )

}