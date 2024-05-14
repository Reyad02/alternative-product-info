import axios from "axios";
import { useEffect, useState } from "react";
import QueriesCard from "./QueriesCard";

const Queries = () => {
    const [loadedData, setLoadedData] = useState([]);
    const [searchedQueries, setSearchedQueries] = useState([]);
    const [layout, setLayout] = useState(1);
    const setLayout2 = () => {
        setLayout(2);
    }

    const setLayout3 = () => {
        setLayout(3);
    }

    const setLayout1 = () => {
        setLayout(1);
    }


    const getValue = e => {
        const searchQuery = e.target.value;

        axios.get('http://localhost:3000/getRecentQueries', {
            params: {
                getRecentQueries: searchQuery
            }
        })
            .then(function (response) {
                setSearchedQueries(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get('http://localhost:3000/queries')
            .then(response => {
                setLoadedData(response.data);
                setSearchedQueries(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto mb-12">
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-4">Queries</h2>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" name="searchQuery" className="grow" onInput={getValue} placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <div className="mx-auto mt-4">
                    <button onClick={setLayout1} className="btn mr-4">Layout 1</button>
                    <button onClick={setLayout2} className="btn mr-4">Layout 2</button>
                    <button onClick={setLayout3} className="btn">Layout 3</button>

                </div>
                <div className={`grid ${(layout === 1 && 'grid-cols-1') || (layout === 2 && 'grid-cols-2') || 'grid-cols-3'} gap-16 mx-auto max-w-7xl mt-8 `}>
                    {
                        searchedQueries.map(card => <QueriesCard key={card._id} cardData={card} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Queries;
