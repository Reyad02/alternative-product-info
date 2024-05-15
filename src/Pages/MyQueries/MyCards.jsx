import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCards = ({ cardData, setUserCards, userCards }) => {
    const { _id, productName, productBrand, queryTitle, imgUrl, boycottReason, email, name, dateTime, recommendationCount } = cardData;
    const handleDelete = (id) => {
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
                axios.delete(`http://localhost:3000/delete/${_id}`)
                    .then(response => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const filteredCards = userCards.filter(card => card._id !== id);
                        setUserCards(filteredCards);

                    })
                    .catch(error => {
                        console.error('Error deleting user:', error);
                    });
            }
        })
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="h-full "><img className="rounded-3xl " src={imgUrl} alt={productBrand} /></figure>
            <div className="card-body gap-1 text-left ">
                <h2 className="card-title">{queryTitle}</h2>
                <p>{productName}</p>
                <p>Brand: {productBrand}</p>
                <p>Reason: {boycottReason}</p>
                {/* <p>{dia + "/" + mes + "/" + year}</p> */}
                <p>{email}</p>
                <div className="flex gap-2">
                    <Link to={`/details/${_id}`} className="btn">View Details</Link>
                    <Link to={`/details_update/${_id}`} className="btn">Update</Link>
                    <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyCards;