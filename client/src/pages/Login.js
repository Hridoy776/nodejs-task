import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:5000/profile", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => navigate("/profile"))
        .catch((err) => {
          navigate("/login");
        });
    }, []);
  
    const handleLogin = () => {
      axios
        .post("http://localhost:5000/login", { username, password })
        .then((user) => {
          localStorage.setItem("token", user.data.token);
          console.log("user is successfully login");
          navigate("/profile");
        })
        .catch((error) => {
          console.log(error);
          navigate("/login");
        });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" onChange={(e)=>setUsername(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" onChange={(e)=>setPassword(e.target.value)} />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;