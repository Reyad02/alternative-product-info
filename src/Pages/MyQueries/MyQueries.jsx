
const MyQueries = () => {
    const handleAddbtn = e =>{
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const queryTitle = form.queryTitle.value;
        const imgUrl = form.imgUrl.value;
        const boycottReason = form.boycottReason.value;
        // console.log(productName, productBrand, queryTitle, imgUrl, boycottReason);
    }
    return (
        <div className="max-w-7xl mx-auto mb-12">
            <div className="my-4 text-center rounded-md max-w-7xl py-4 space-y-4 mx-auto bg-gradient-to-r from-purple-400 to-pink-400">
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
                        <textarea className="textarea textarea-bordered h-24 w-full text-base" placeholder="Boycotting Reason" name="boycottReason"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <input className="btn text-center" type="submit" value="Add" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default MyQueries;