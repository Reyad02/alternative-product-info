import axios from "axios";
import { useEffect, useState } from "react";
import QueriesCard from "./QueriesCard";

const Queries = () => {
    const [loadedData, setLoadedData] = useState([]);
    const [searchedQueries, setSearchedQueries] = useState([]);

    const getValue = e => {
        const searchQuery = e.target.value;

        axios.get('http://localhost:3000/getRecentQueries', {
            params: {
                getRecentQueries: searchQuery
            }
        })
            .then(function (response) {
                // console.log(response);
                setSearchedQueries(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        axios.get('http://localhost:3000/queries')
            .then(response => {
                // console.log(response.data);
                setLoadedData(response.data);
                setSearchedQueries(response.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])
    return (
        <div className="max-w-7xl mx-auto mb-12">
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-4">Queries</h2>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" name="searchQuery" className="grow" onInput={getValue} placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl mt-8">
                    {
                        searchedQueries.map(card => <QueriesCard key={card._id} cardData={card}  ></QueriesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Queries;