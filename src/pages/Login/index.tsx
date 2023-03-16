import { useState } from "react";
import { Input } from "../../components/Input";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLogin } from "../../services/login";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { emailRegex } from "../../utils/regex";

import Logo from "../../assets/devchallenges.svg";
import FacebookIcon from "../../assets/Facebook.svg";
import GithubIcon from "../../assets/Github.svg";
import GoogleIcon from "../../assets/Google.svg";
import TwitterIcon from "../../assets/Twitter.svg";

export function Login() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postLogin,
    onError: () => {
      toast.error("Ops! Something went wrong");
    },
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isButtonDisabled = !emailRegex(email) || password === "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (event.target.id === "email") {
      setEmail(value);
    }
    if (event.target.id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const payload = {
      username: email,
      password,
    };

    mutation.mutate(payload, {
      onSuccess: (data) => {
        sessionStorage.setItem("@Token", data.access_token);
        toast.success("Login successful");
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen p-6">
      <div className="w-full max-w-[480px] px-8 lg:px-14 py-12 rounded-3xl border border-slate-300 flex flex-col ">
        <img src={Logo} alt="DevChallenges Logo" className="w-32" />
        <div className="flex flex-col py-7 gap-4">
          <h1 className="font-semibold text-lg text-grayPrimary leading-6">
            Login
          </h1>
        </div>
        <form className="flex flex-col gap-4">
          <Input
            label="Email"
            id="email"
            value={email}
            icon={<MdEmail size={20} color={"#828282"} />}
            onChange={handleChange}
            type="email"
            maxLength={50}
          />
          <Input
            label="Password"
            id="password"
            value={password}
            icon={<AiFillLock size={20} color={"#828282"} />}
            onChange={handleChange}
            type="password"
            maxLength={50}
          />
        </form>
        <button
          className="bg-bluePrimary text-white font-semibold text-base rounded-lg py-3 mt-6 transition-colors ease-out hover:bg-bluePrimaryDark cursor-pointer disabled:bg-bluePrimaryDark disabled:cursor-not-allowed"
          type="submit"
          onClick={(event) => handleSubmit(event)}
          disabled={isButtonDisabled}
        >
          Login
        </button>
        <div className="w-full flex flex-col mt-8 gap-6">
          <span className="text-sm font-normal text-graySecondary text-center">
            or continue with these social profile
          </span>
          <div className="flex flex-row gap-5 w-full items-center justify-center">
            <img src={GoogleIcon} alt="Google Icon" />
            <img src={FacebookIcon} alt="Facebook Icon" />
            <img src={TwitterIcon} alt="Twitter Icon" />
            <img src={GithubIcon} alt="Github Icon" />
          </div>
          <span className="text-sm font-normal text-graySecondary text-center">
            Don’t have an account yet?{" "}
            <Link
              className="text-bluePrimaryLight cursor-pointer hover:text-bluePrimary"
              to="/register"
            >
              Register
            </Link>
          </span>
        </div>
      </div>
      <div className="w-full max-w-[480px] flex flex-row justify-between mt-3">
        <span className="text-sm font-normal text-graySecondary">
          created by{" "}
          <span className="font-bold underline">
            Eduardo Muchak & Gabriel Peralta
          </span>
        </span>
        <span className="text-sm font-normal text-graySecondary">
          DevChallenges.io
        </span>
      </div>
    </div>
  );
}
