import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const EachCardRecommendation = ({ recommendation }) => {
    const { queryId, recommendedEmail, recommendedName, recommendedDateTime, RecommendImgUrl, RecommendProductName, RecommendReason, RecommendTitle } = recommendation;
    const { user } = useContext(AuthContext);
    const date = new Date(recommendedDateTime);
    const year = date.getFullYear();
    const mes = date.getMonth() + 1;
    const dia = date.getDate();
    return (
        <div className="flex gap-8 items-center" key={recommendation._id}>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={user.photoURL || "https://www.w3schools.com/howto/img_avatar.png"} />
                    </div>
                </div>
                <div className="chat-header">
                    {recommendedName || recommendedEmail}
                </div>
                <div className="chat-bubble">
                    <div>
                        <p>{RecommendProductName}</p>
                        <p>{RecommendReason}</p>
                    </div>
                    <div>
                        <img src={RecommendImgUrl} alt="" className="w-24 rounded-lg" />
                    </div>
                </div>
                <div className="chat-footer opacity-50">
                    {dia + "/" + mes + "/" + year}
                </div>
            </div>
        </div>
    );
};

export default EachCardRecommendation;