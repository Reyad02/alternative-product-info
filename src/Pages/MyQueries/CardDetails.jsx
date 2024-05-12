import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const details = useLoaderData();
    // console.log(details);
    const {_id, productName, productBrand, queryTitle, imgUrl, boycottReason, email, name, dateTime, recommendationCount } = details;

    return (
        <div className="max-w-7xl mx-auto">
            <p>{productName}</p>
            <p>{productBrand}</p>
            <img src={imgUrl} alt="" />
        </div>
    );
};

export default CardDetails;