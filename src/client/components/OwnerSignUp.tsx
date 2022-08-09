import "../styles/OwnerSignUp.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import modelType from "../model.type";
import { useState } from "react";
import { ownersSignUp } from "../api";
import OwnerLogin from "./OwnerLogin";

const OwnerSignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<modelType.SignUpOwner>();

  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<modelType.SignUpOwner> = async (user) => {
    const errorInfo: modelType.ErrorInfo = await ownersSignUp(user);
    if (errorInfo.message) {
      setMessage(errorInfo.message);
    } else {
      alert("You have successfully registered!")
      navigate("/owners/id");
    }
  };

  return (
    <div className="PARENT signup_ow">
      <div className="header_ow">
        <OwnerLogin />
      </div>
      <div className="sign-up">
        <div className="logocenter">
          <Link to="/" reloadDocument>
            <img
              src="/images/decafeowner.png"
              className="ownerlogo"
              alt="logo"
            ></img>
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Create Account</h2>
          <div className="error-message">{message}</div>
          <div className="formBox_ow">
            <label>Username</label>
            <input
              type="text"
              id="name"
              placeholder="User Name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            <div className="error-message">{errors.name?.message}</div>
          </div>
          <div className="formBox_ow">
            <label>Password </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            <div className="error-message">{errors.password?.message}</div>
          </div>
          <div className="buttonArea_ow">
            <input type="submit" id="submit-button" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OwnerSignUp;
