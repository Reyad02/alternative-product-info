import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import EachCardRecommendation from "./EachCardRecommendation";

const EachCardDetails = () => {
    const details = useLoaderData();
    const { user } = useContext(AuthContext);
    const [recommendations, setRecommendations] = useState([]);

    const { _id, productName, productBrand, queryTitle, imgUrl, boycottReason, email, name, dateTime, recommendationCount } = details;
    const handleRecommendation = (e) => {
        e.preventDefault();
        const form = e.target;
        const RecommendProductName = form.RecommendProductName.value;
        const RecommendTitle = form.RecommendTitle.value;
        const RecommendReason = form.RecommendReason.value;
        const RecommendImgUrl = form.RecommendImgUrl.value;
        // console.log(_id, RecommendImgUrl, RecommendProductName, RecommendReason, RecommendTitle)
        const queryId = _id;
        const userEmail = email;
        const userName = name;
        const recommendedEmail = user.email;
        const recommendedName = user.displayName;
        const recommendedDateTime = Date.now();
        const data = { queryId, queryTitle, productName, userEmail, userName, recommendedEmail, recommendedName, recommendedDateTime, RecommendImgUrl, RecommendProductName, RecommendReason, RecommendTitle }
        axios.post('http://localhost:3000/addRecommendation', data)
            .then(function (response) {
                const prevRecommendations = recommendations;
                setRecommendations([...prevRecommendations, data])
                // console.log(response);
                axios.put(`http://localhost:3000/increaseCount/${_id}`, {})
                    .then(response => {
                        // console.log(response)

                        // setRecommendations(prevRecommendations => [...prevRecommendations, data]);

                    })
                    .catch(error => {
                        // Handle errors
                        console.log(error)
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/recommendatedDetail/${_id}`)
            .then(response => {
                console.log(response.data)
                setRecommendations(response.data);
            })
            .catch(error => {
                // Handle errors
                console.log(error)
            });
    }, [_id])

    return (
        <div className="max-w-7xl mx-auto">
            <div className="hero  bg-base-300 rounded-2xl">
                <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                    <div className="text-center space-y-2 flex-1 ">
                        <h1 className="text-2xl font-bold">{productName}</h1>
                        <p className="">Brand: {productBrand}</p>
                        <p>User: {email}</p>
                        <p>Reason: {boycottReason}</p>
                    </div>
                    <div className="card flex-1 w-full max-w-sm bg-transparent rounded-3xl  shadow-2xl bg-base-100">
                        <img className="rounded-3xl" src={imgUrl} alt="" />
                    </div>
                </div>
            </div>

            {/* <img src={imgUrl} alt="" /> */}
            {/* <p>{productName}</p>
            <p>{productBrand}</p>
            <p>User: {email}</p> */}
            {/* <p>Posted at: {dateTime}</p> */}
            <div className="mt-4 space-y-4">
                <p>Add Your Recommendation:</p>
                <form className="space-y-4" onSubmit={handleRecommendation}>
                    <div className="flex gap-4">
                        <label className="input input-bordered rounded-lg flex items-center gap-2 flex-1">
                            <input type="text" className="grow" placeholder="Recommended Product Name" name="RecommendProductName" />
                        </label>
                        <label className="input input-bordered rounded-lg flex items-center gap-2 flex-1">
                            <input type="text" className="grow" placeholder="Recommendation Title" name="RecommendTitle" />
                        </label>
                    </div>
                    <div className="flex gap-4">
                        <label className="input input-bordered flex rounded-lg items-center gap-2 flex-1">
                            <input type="text" className="grow" placeholder="Image URL" name="RecommendImgUrl" />
                        </label>
                    </div>
                    <div className="flex gap-4">
                        <label className="input input-bordered flex rounded-lg items-center gap-2 flex-1">
                            <input type="text" className="grow" placeholder="Reason" name="RecommendReason" />
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <input className="btn text-center" type="submit" value="Recommended" />
                    </div>
                </form>
                <div>
                    <p className="font-bold mb-4">Recommendations:</p>
                    <div className="space-y-8 border rounded-xl pl-4">
                        {
                            recommendations.map(recommendation => <EachCardRecommendation key={recommendation._id} recommendation={recommendation} recommendations={recommendations} setRecommendations={setRecommendations}></EachCardRecommendation>)
                        }
                    </div>
                    {/* <div className="flex items-center border border-red-300" key={recommendation._id}>
                        <div>
                            <p>{recommendation.RecommendTitle}</p>
                            <p>{recommendation.RecommendProductName}</p>
                            <p>{recommendation.RecommendReason}</p>
                        </div>
                        <div>
                            <img src={recommendation.RecommendImgUrl} className="w-1/2" alt="" />
                        </div>
                    </div> */}
                </div>
            </div>


        </div>
    );
};

export default EachCardDetails;