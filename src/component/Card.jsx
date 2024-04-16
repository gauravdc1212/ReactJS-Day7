import React from 'react'

const Card = (props) => {
    const { title, description, price, brand, category, thumbnail } = props;
    return (
        <div className='border mb-3'>
            <div className="card border border-dark" style={{ width: " 30rem", height: "33rem" }}>
                <img src={thumbnail} className="card-img-top mx-4" alt="..." style={{ width: "25rem", height: '20rem' }} />
                <div className="card-body">
                    <h5 className="card-title text-danger">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className='d-flex flex-column'>
                        <div>Price: {price}</div>
                        <div>Brand: {brand}</div>
                        <div>category: {category}</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
