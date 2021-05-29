import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import InputField from "../components/input";

export default function Home() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [page, setPage] = useState(0);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-full">
        <span className="text-5xl font-bold text-red-500">Sign Up</span>
      </div>
      <div className="w-full mt-5">
        <div className="w-24 h-2 bg-red-500"></div>
      </div>
      <div className="w-full relative">
        <div
          className={`w-full inline-block absolute transition duration-500 ease-in-out ${
            page === 0 ? "opacity-100" : "transform -translate-x-full opacity-0"
          }`}
        >
          <div className="w-full mt-16">
            <InputField value={email} setValue={setEmail} name={"Email"} />
          </div>
          <div className="w-full mt-5 flex flex-row">
            <div className="w-1/2 pr-1">
              <InputField
                value={firstName}
                setValue={setFirstName}
                name={"First Name"}
              />
            </div>
            <div className="w-1/2 pl-1">
              <InputField
                value={lastName}
                setValue={setLastName}
                name={"Last Name"}
              />
            </div>
          </div>
          <div className="w-full mt-5">
            <InputField
              value={username}
              setValue={setUsername}
              name={"Username"}
            />
          </div>
          <div className="w-full mt-10">
            <span
              onClick={() => setPage(1)}
              className={`px-4 py-3 bg-red-500 inline-flex text-lg shadow-md rounded-lg transition duration-500 ease-in-out ${
                email !== "" &&
                firstName !== "" &&
                lastName !== "" &&
                username !== ""
                  ? "oapcity-100 text-white glow-red-500-lg"
                  : "opacity-50 text-gray-100 shadow-none"
              }`}
            >
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div
          className={`w-full inline-block absolute transition duration-500 ease-in-out ${
            page === 1 ? "opacity-100" : "transform -translate-x-full opacity-0"
          }`}
        >
          <div className="w-full mt-16">
            <InputField
              value={password}
              setValue={setPassword}
              name={"Password"}
              type="password"
            />
          </div>
          <div className="w-full mt-5">
            <InputField
              value={confPassword}
              setValue={setConfPassword}
              name={"Confirm Password"}
              type="password"
            />
          </div>
          <div className="w-full mt-5">
            <InputField
              value={phoneNumber}
              setValue={setPhoneNumber}
              name={"Phone Number"}
            />
          </div>
          <div className="w-full mt-10 flex flex-row">
            <span
              onClick={() => setPage(0)}
              className={`px-4 py-3 bg-red-500 mr-1 inline-flex justify-center items-center text-lg shadow-md rounded-lg transition duration-500 ease-in-out oapcity-100 text-white glow-red-500-l`}
            >
              <FaArrowLeft />
            </span>
            <span
              onClick={() => setPage(1)}
              className={`px-4 py-3 bg-red-500 ml-1 inline-flex text-lg shadow-md rounded-lg transition duration-500 ease-in-out ${
                password !== "" && confPassword !== "" && phoneNumber !== ""
                  ? "oapcity-100 text-white glow-red-500-lg"
                  : "opacity-50 text-gray-100 shadow-none"
              }`}
            >
              Submit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
