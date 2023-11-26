import Image from "next/image";
import { Button, Divider, TextInput } from "@mantine/core";
import sms from "@/assest/sms.png";
import lock from "@/assest/lock.png";
import eye from "@/assest/eye.png";
import { useState } from "react";
import reactanglerr from "../assest/rectanglerr.png";
import profile from "../assest/profile.png";
import Link from "next/link";
import { Validation } from "@/common/validation";
const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [error, setError] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = () => {
    const validObject = {};
    Object.keys(data).forEach((key) => {
      const inValidKey = Validation(key, data[key], data.password);
      if (inValidKey) {
        validObject[key] = inValidKey;
      }
    });

    if (Object.keys(validObject).length) {
      setError(validObject);
    } else {
      setList([...list, data]);
      localStorage.setItem("information", JSON.stringify(list));
      setData({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      });
      setError({});
    }
  };
  return (
    <div className="flex w-full h-full overflow-y-hidden">
      <div className="w-[50%] h-full max-h-screen">
        <Image
          src={reactanglerr}
          alt="reactanglerr"
          objectFit="cover"
          layout="responsive"
        />
      </div>
      <div className="w-[50%] bg-blue-100">
        <div className="px-[100px] flex items-center w-full h-screen">
          <div className="flex flex-col gap-4 w-full">
            <div>
              <div className="text-blue-50 text-[42px] font-semibold">
                Register
              </div>
              <Divider size="sm" className="text-blue-50 w-[150px]" />
            </div>
            <div className="text-[20px] text-grey-50">
              Please Enter your email and new password.
            </div>
            <div className="w-full">
              <TextInput
                styles={{
                  input: { backgroundColor: "white" },
                  label: { color: "#0E3D63", fontsize: "20px" },
                }}
                className="w-full"
                size="lg"
                color="#FFFFFF"
                variant="filled"
                label="Name"
                name="name"
                value={data?.name}
                type="text"
                onChange={(e) => onChangeHandler(e)}
                placeholder="Enter your Name"
                leftSection={<Image src={profile} alt="profile" sizes={24} />}
              />
              <div>
                {error?.name ? (
                  <div className="text-red-500">{error?.name} </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="w-full">
              <TextInput
                styles={{
                  input: { backgroundColor: "white" },
                  label: { color: "#0E3D63", fontsize: "20px" },
                }}
                className="w-full"
                size="lg"
                color="#FFFFFF"
                variant="filled"
                label="Email"
                name="email"
                value={data?.email}
                type="text"
                onChange={(e) => onChangeHandler(e)}
                placeholder="Enter your Name"
                leftSection={<Image src={sms} alt="sms" sizes={24} />}
              />
              <div>
                {error?.email ? (
                  <div className="text-red-500">{error?.email} </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="w-full">
              <TextInput
                styles={{
                  input: { backgroundColor: "white" },
                  label: { color: "#0E3D63", fontsize: "20px" },
                }}
                className="w-full"
                size="lg"
                color="#FFFFFF"
                variant="filled"
                label="Phone Number"
                name="phoneNumber"
                value={data?.phoneNumber}
                type="tel"
                onChange={(e) => onChangeHandler(e)}
                placeholder="Enter your Phone Number"
                leftSection={<div className="w-4" />}
              />
              <div>
                {error?.phoneNumber ? (
                  <div className="text-red-500">{error?.phoneNumber} </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <TextInput
                styles={{
                  input: { backgroundColor: "white" },
                  label: { color: "#0E3D63", fontsize: "20px" },
                }}
                type={open ? "text" : "password"}
                className="w-full"
                size="lg"
                value={data.password}
                color="#FFFFFF"
                variant="filled"
                name="password"
                label="Password"
                onChange={(e) => onChangeHandler(e)}
                placeholder="Enter your Password"
                leftSection={<Image src={lock} alt="lock" sizes={24} />}
                rightSection={
                  <Image
                    src={eye}
                    alt="eye"
                    sizes={24}
                    onClick={() => setOpen(!open)}
                  />
                }
              />
              <div>
                {error?.password ? (
                  <div className="text-red-500">{error?.password} </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <TextInput
                styles={{
                  input: { backgroundColor: "white" },
                  label: { color: "#0E3D63", fontsize: "20px" },
                }}
                type={isPassword ? "text" : "password"}
                className="w-full"
                size="lg"
                value={data.confirmPassword}
                color="#FFFFFF"
                variant="filled"
                name="confirmPassword"
                label="confirm Password"
                onChange={(e) => onChangeHandler(e)}
                placeholder="Enter your Confirm Password"
                leftSection={<Image src={lock} alt="lock" sizes={24} />}
                rightSection={
                  <Image
                    src={eye}
                    alt="eye"
                    sizes={24}
                    onClick={() => setIsPassword(!isPassword)}
                  />
                }
              />
              <div>
                {error?.confirmPassword ? (
                  <div className="text-red-500">{error?.confirmPassword} </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="mt-5 flex flex-col text-center">
              <div className="w-full ">
                <Button
                  variant="filled"
                  size="lg"
                  color="#0E3D63"
                  className="min-w-[256px]"
                  onClick={onSubmit}
                >
                  Register
                </Button>
              </div>
              <div className="mt-3 text-grey-50 text-[20px] font-normal">
                If you remember your password, you can
                <Link href="/login" className="font-medium text-blue-50 pl-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
