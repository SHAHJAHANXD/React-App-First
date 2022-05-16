import fb from "../assets/images/facebook.svg"
import twitter from "../assets/images/twitter.svg"

function Login() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-10">
                    <div className="row shadoww">
                        <div className="col-lg-6 color-white color-white  p-100">
                            <div className="row ">
                                <div className="col-lg-6 log-md-6 col-sm-6">
                                    <h2 className="fw-300">Login</h2>
                                </div>
                                <div className="col-lg-6 log-md-6 col-sm-6 justify-content-end">
                                    <h2 className="fw-300">
                                        <a>
                                            <img src={fb} className="h-50">
                                            </img>
                                        </a>
                                        <a>
                                            <img src={twitter} className="m-l-10 h-50">
                                            </img>
                                        </a>
                                    </h2>
                                </div>
                            </div>
                            <form className="m-t-40">
                                <label className="label"> UserName </label>
                                <input placeholder="UserName" type="text" name="username" className="form-control m-t-b-10" />
                                <label className="label"> Password </label>
                                <input placeholder="Password" type="password" name="password" className="form-control m-t-b-10" />
                                <button className="submit-btn"> Submit </button>
                            </form>
                            <div className="row ">
                                <div className="col-lg-6 log-md-6 col-sm-6">
                                    <h2 className="fw-300">
                                        <input type="checkbox" />
                                        <label className="remeber-me">Remeber Me</label>
                                    </h2>
                                </div>
                                <div className="col-lg-6 log-md-6 col-sm-6 justify-content-end">
                                    <h2 className="fw-300">
                                        <a href="" className="forget-pass">
                                            Forget Password
                                        </a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 color-red p-100 text-wrap p-4 p-lg-5 text-center align-items-center ">
                            <div className="m-t-100">
                                <h2 >Welcome to login</h2>
                                <p className="p-10">
                                    Don't have an account?
                                </p>
                                <a href="/" className="signup">
                                    SignUp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;