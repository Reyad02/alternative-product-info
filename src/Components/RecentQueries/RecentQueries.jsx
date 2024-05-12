import axios from "axios";
import { useEffect, useState } from "react";
import RecentQuery from "./RecentQuery";

const RecentQueries = () => {
    const [queries, setQueries] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/getRecent')
            .then(function (response) {
                setQueries(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl mt-8">
            {
                queries.map(query => <RecentQuery key={query._id} query={query}></RecentQuery>)
            }
        </div>
    );
};

export default RecentQueries;