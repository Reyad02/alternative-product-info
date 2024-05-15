import axios from "axios";
import { useLoaderData } from "react-router-dom";

const UpdateMyQuery = () => {
    const cardData = useLoaderData()
    const { _id, productName, productBrand, queryTitle, imgUrl, boycottReason, email, name, dateTime, recommendationCount } = cardData;

    const handleUpdateBtn = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const queryTitle = form.queryTitle.value;
        const imgUrl = form.imgUrl.value;
        const boycottReason = form.boycottReason.value;
        const dataToSend = { productName, productBrand, queryTitle, imgUrl, boycottReason }
        // console.log(dataToSend);
        axios.put(`http://localhost:3000/update/${_id}`, dataToSend)
            .then(response => {
                // Handle the response
                console.log(response)
            })
            .catch(error => {
                // Handle errors
                console.log(error)
            });
    }
    return (
        <div className="max-w-7xl mx-auto mb-12">
            <div className="my-4 text-center rounded-md max-w-7xl py-4 space-y-4 mx-auto bg-gradient-to-r from-[#CDE8E5] to-[#7AB2B2]">
                <p className='text-5xl font-bold text-black'>Query Form</p>
            </div>
            <div>
                <form className="space-y-4" onSubmit={handleUpdateBtn}>
                    <div className="flex gap-4">
                        <div className="flex flex-col flex-1 ">
                            <span className="block  font-medium text-slate-700">Product:</span>
                            <label className="input input-bordered flex items-center gap-2 flex-1">
                                <input type="text" className="grow py-3" defaultValue={productName} name="productName" />
                            </label>
                        </div>
                        <div className="flex flex-col flex-1 ">
                            <span className="block font-medium text-slate-700">Brand:</span>
                            <label className="input input-bordered flex items-center gap-2 flex-1">
                                <input type="text" className="grow py-3" defaultValue={productBrand} name="productBrand" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col flex-1 ">
                            <span className="block font-medium text-slate-700">Query:</span>
                            <label className="input input-bordered flex items-center gap-2 flex-1">
                                <input type="text" className="grow py-3" defaultValue={queryTitle} name="queryTitle" />
                            </label>
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className="block font-medium text-slate-700">Image URL:</span>
                            <label className="input input-bordered flex items-center gap-2 flex-1">
                                <input type="text" className="grow py-3" defaultValue={imgUrl} name="imgUrl" />
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <span className="block font-medium text-slate-700">Boycott Reason:</span>
                        <input name="boycottReason" type="text" defaultValue={boycottReason} className="input text-base input-bordered input-lg w-full pl-4 " />
                    </div>
                    <div className="flex justify-center">
                        <input className="btn text-center" type="submit" value="Update" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateMyQuery;