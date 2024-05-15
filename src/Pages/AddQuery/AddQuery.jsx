import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const AddQuery = () => {
    const { user } = useContext(AuthContext);
    const handleAddbtn = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const queryTitle = form.queryTitle.value;
        const imgUrl = form.imgUrl.value;
        const boycottReason = form.boycottReason.value;
        const email = user.email;
        const name = user.displayName;
        const recommendationCount = 0;
        const dateTime = Date.now();
        // console.log(dateTime);
        // console.log(user);
        const data = { productName, productBrand, queryTitle, imgUrl, boycottReason, email, name, dateTime, recommendationCount };
        axios.post('http://localhost:3000/addProducts', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="max-w-7xl mx-auto mb-12">
            <div className="my-4 text-center rounded-md max-w-7xl py-4 space-y-4 mx-auto bg-gradient-to-r from-[#CDE8E5] to-[#7AB2B2]">
                <p className='text-5xl font-bold text-black'>Query Form</p>
            </div>
            <div>
                <form className="space-y-4" onSubmit={handleAddbtn}>
                    <div className="flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 flex-1">
                            <input type="text" className="grow" placeholder="Product Name" name="productName" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 flex-1">
                            <input type="text" className="grow" placeholder="Product Brand" name="productBrand" />
                        </label>
                    </div>
                    <div className="flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 flex-1">
                            <input type="text" className="grow" placeholder="Title" name="queryTitle" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 flex-1">
                            <input type="text" className="grow" placeholder="Image URL" name="imgUrl" />
                        </label>
                    </div>
                    <div className="">
                        <input name="boycottReason" type="text" placeholder="Boycotting Reason" className="input text-base input-bordered input-lg w-full pl-4 " />
                    </div>
                    <div className="flex justify-center">
                        <input className="btn text-center" type="submit" value="Add" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddQuery;