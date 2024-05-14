import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyRecommendations = () => {
    const { user } = useContext(AuthContext);
    const [myRecommendations, setMyRecommendations] = useState([]);

    const handleDelete = (id, queryId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/deleteMyRecommendations/${id}`)
                    .then(response => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        axios.put(`http://localhost:3000/decrease/${queryId}`)
                            .then(response => {
                                console.log(response.data);
                                // setMyRecommendations(response.data);
                                const filteredCards = myRecommendations.filter(tr => tr._id !== id);
                                setMyRecommendations(filteredCards);
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });


                    })
                    .catch(error => {
                        console.error('Error deleting user:', error);
                    });
            }
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3000/myRecommendations', {
            params: {
                email: user?.email
            },
            withCredentials: true
        }).then(response => {
            console.log(response.data);
            setMyRecommendations(response.data);
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
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myRecommendations.map(myRecommendation => <tr key={myRecommendation._id}>
                                <th>{myRecommendation.RecommendProductName}</th>
                                <td>{myRecommendation.productName}</td>
                                <td>{myRecommendation.queryTitle}</td>
                                <td><button className="btn" onClick={() => handleDelete(myRecommendation._id, myRecommendation.queryId)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRecommendations;