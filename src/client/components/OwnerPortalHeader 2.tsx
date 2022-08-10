import "../styles/OwnerLogin.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ownerLogin } from "../api";
import modelType from "../model.type";
import { useState } from "react";
import OwnerHeader from "./OwnerHeader";

const OwnerPortalHeader: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<modelType.LoginOwner>();

  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<modelType.LoginOwner> = async (user) => {
    const errorInfo: modelType.ErrorInfo = await ownerLogin(user);
    if (errorInfo.message) {
      setMessage(errorInfo.message);
    } else {
      // navigate("/");
      navigate("/owners");
    }
  };

  return (
    <>
      <OwnerHeader />
      <h1>OWNER PORTAL</h1>
      <p>
        <Link to="/owners/logout">Logout</Link>
      </p>
    </>
  );
};

export default OwnerPortalHeader;
