import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Signup = () => {
    const { registration, updateInfo } = useContext(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        const pass = form.pass.value;
        registration(email, pass).then((userCredential) => {
            const user = userCredential.user;
            updateInfo(displayName, photoURL).then(() => {
                console.log("User profile updated")
            }).catch((error) => {
                console.log("ERROR", error);
            });
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    return (
        <div>
            <div className="max-w-7xl mx-auto flex justify-center">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Signup;