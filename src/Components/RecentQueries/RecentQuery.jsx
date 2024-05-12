
const RecentQuery = ({ query }) => {
    const { productName, productBrand, queryTitle, imgUrl, boycottReason, email, name, dateTime, recommendationCount } = query;
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const mes = date.getMonth() + 1;
    const dia = date.getDate();
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="rounded-3xl " src={imgUrl} alt={productBrand} /></figure>
            <div className="card-body gap-0">
                <h2 className="card-title">{queryTitle}</h2>
                <p>{productName}</p>
                <p>Brand: {productBrand}</p>
                <p>Reason: {boycottReason}</p>
                <p>{dia+"/"+mes+"/"+year}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default RecentQuery;