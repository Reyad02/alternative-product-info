import axios from "axios";
import { useEffect, useState } from "react";
import QueriesCard from "./QueriesCard";

const Queries = () => {
    const [loadedData, setLoadedData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/queries')
            .then(response => {
                console.log(response.data);
                setLoadedData(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])
    return (
        <div className="max-w-7xl mx-auto mb-12">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Own Queries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl mt-8">
                    {
                        loadedData.map(card => <QueriesCard key={card._id} cardData={card}  ></QueriesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Queries;