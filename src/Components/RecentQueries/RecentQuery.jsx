
const RecentQuery = ({ query }) => {
    const { productName, productBrand, queryTitle, imgUrl, boycottReason, email, name, dateTime, recommendationCount } = query;
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const mes = date.getMonth() + 1;
    const dia = date.getDate();
    return (
        <div className="card bg-base-100 shadow-xl overflow-hidden">
            <figure className="h-full">
                <div className="h-full">
                    <img className="rounded-3xl h-full " src={imgUrl} alt={productBrand} />
                    <div className="p-2 px-4 rounded-full absolute text-black bg-[#7AB2B2] border-none outline-none top-0 right-0">
                        {productBrand}
                    </div>

                </div>
            </figure>
            <div className="card-body gap-0 ">
                <p className="badge badge-ghost">{productName}</p>
                <h2 className="font-semibold ">{queryTitle}</h2>
                <p>Reason: {boycottReason}</p>
                <p className="text-[#727064]">{email}</p>
                <p className="text-[#727064]">{dia + "/" + mes + "/" + year}</p>
            </div>
        </div>
    );
};

export default RecentQuery;