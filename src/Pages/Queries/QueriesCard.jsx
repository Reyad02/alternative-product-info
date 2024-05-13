import React from 'react';
import { Link } from 'react-router-dom';

const QueriesCard = ({ cardData }) => {
    const { _id, productName, productBrand, queryTitle, imgUrl, boycottReason, email, name, dateTime, recommendationCount } = cardData;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="rounded-3xl " src={imgUrl} alt={productBrand} /></figure>
            <div className="card-body gap-1 text-left ">
                <h2 className="card-title">{queryTitle}</h2>
                <p>{productName}</p>
                <p>Brand: {productBrand}</p>
                <p>Reason: {boycottReason}</p>
                {/* <p>{dia + "/" + mes + "/" + year}</p> */}
                <p>{email}</p>
                <p>Total Recommendation {recommendationCount}</p>
                <div className='flex justify-center'>
                    <Link to={`/cardDetail/${_id}`}>Recommend</Link>
                </div>
                
            </div>
        </div>
    );
};

export default QueriesCard;