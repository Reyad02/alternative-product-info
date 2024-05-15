import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const details = useLoaderData();
    // console.log(details);
    const { _id, productName, productBrand, queryTitle, imgUrl, boycottReason, email, name, dateTime, recommendationCount } = details;
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const mes = date.getMonth() + 1;
    const dia = date.getDate();
    return (
        <div className="max-w-7xl mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="flex-1 p-2"><img src={imgUrl} className="rounded-2xl" alt="Album" /></figure>
                <div className="card-body flex-1 gap-0 space-y-0">
                    <h2 className="card-title">{productName}</h2>
                    <div>
                        <p><span className="text-[#727064]">Brand: </span>{productBrand}</p>
                        <p><span className="text-[#727064]">Title: </span>{queryTitle}</p>
                        <p><span className="text-[#727064]">Boycott Reason: </span>{boycottReason}</p>
                        <p><span className="text-[#727064]">Publish Date: </span>{dia + "/" + mes + "/" + year}</p>
                        <p><span className="text-[#727064]">Recommendation : </span>{recommendationCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;