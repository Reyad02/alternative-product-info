import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import MyCards from "./MyCards";

const MyQueries = () => {
    const { user } = useContext(AuthContext);
    const [userCards, setUserCards] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/getData', {
            params: {
                email: user?.email
            },
            withCredentials: true
        })
            .then(response => {
                // console.log(response.data);
                setUserCards(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [user])

    return (
        <div className="max-w-7xl mx-auto mb-12">
            <div className="my-4 text-center rounded-md max-w-7xl py-4 space-y-4 mx-auto bg-gradient-to-r from-purple-400 to-pink-400">
                <p className='text-5xl font-bold text-black'>Query Form</p>
                <Link className="btn" to="/addQuery">Add your query</Link>
            </div>
            <div className="text-center">
                <h2 className="text-5xl font-bold">Own Queries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl mt-8">
                    {
                        userCards.map(card => <MyCards key={card._id} cardData={card} setUserCards={setUserCards} userCards={userCards} ></MyCards>)
                    }
                </div>
            </div>

        </div>
    );
};

export default MyQueries;