
const EachCardRecommendation = ({ recommendation }) => {
    const { queryId, recommendedEmail, recommendedName, recommendedDateTime, RecommendImgUrl, RecommendProductName, RecommendReason, RecommendTitle } = recommendation;
    return (
        <div className="flex items-center border border-red-300" key={recommendation._id}>
            <div>
                <p>{RecommendTitle}</p>
                <p>{RecommendProductName}</p>
                <p>{RecommendReason}</p>
            </div>
            <div>
                <img src={RecommendImgUrl} className="w-1/2" alt="" />
            </div>
        </div>
    );
};

export default EachCardRecommendation;