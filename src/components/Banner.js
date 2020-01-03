import React from 'react';

export default function({children, title, subtitle}) {
    return(
        <div className="banner">
            <h2>{title}</h2>
            <div>
                <p>{subtitle}</p>
                {children}
            </div>
        </div>
    )
}