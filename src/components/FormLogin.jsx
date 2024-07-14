import bgimage3 from "../../assets/images/bgimage3.jpeg";
import { FaUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import "../../assets/css/form.css";
const Login = () => {
  return (
    <div style={{
        backgroundImage: `url(${bgimage3})`,
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        height: '100vh', 
        width: '100%', 
    }}>
        <div className="vh-100 container mx-auto d-flex justify-content-center align-items-center">
            <div className="form-box p-5 col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                <div className="d-flex justify-content-center align-items-center"><img style={{width: "30px", height: "30px"}} src={bgimage3} /></div>
                <div className="d-flex justify-content-end"><img style={{width: "30px", height: "30px"}} src={bgimage3} /></div>

                <form className="d-flex flex-column gap-3 justify-content-start align-items-start">
                    <div className="input-box">
                        <input className="p-2" type="text" placeholder="Username" />
                        <FaUser className="icon" />
                    </div>

                    <div className="input-box">
                        <input className="p-2" type="password" placeholder="Password" />
                        <FaUnlock className="icon" />
                    </div>

                    <div className="remember-forget">
                        <label><input type="checkbox" />Remember me</label>
                        <a>Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Login;
