import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Recommendations = () => {
    const { user } = useContext(AuthContext);
    const [recommendations, setRecommendations] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/getrecommendations/${user?.email}`, {withCredentials: true})
            .then(response => {
                console.log(response.data);
                setRecommendations(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }, [user])
    return (
        <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Recommended Person</th>
                            <th>Product Name</th>
                            <th>Recommended Product</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            recommendations.length> 0 ?
                            recommendations.map(myRecommendation => <tr key={myRecommendation._id}>
                                <td>{myRecommendation.recommendedEmail}</td>
                                <td>{myRecommendation.productName}</td>
                                <td>{myRecommendation.RecommendProductName}</td>
                                <td>{myRecommendation.RecommendReason}</td>
                            </tr>) : <tr className="text-3xl"><td>No Recommendation Found</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Recommendations;