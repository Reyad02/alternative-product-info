import { Link } from "react-router-dom";

const MyCards = ({ cardData }) => {
    const {_id, productName, productBrand, queryTitle, imgUrl, boycottReason, email, name, dateTime, recommendationCount } = cardData;

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
                <div className="flex gap-2">
                <Link to={`/details/${_id}`} className="btn">View Details</Link>
                <button className="btn">Update</button>
                <button className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyCards;