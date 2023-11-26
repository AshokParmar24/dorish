import Image from "next/image";
import LoginImage from "../assest/LoginImage.png";
import sms from "../assest/sms.png";
import eye from "../assest/eye.png";
import lock from "../assest/lock.png";
import { Divider, TextInput, Button, em } from "@mantine/core";
import { useEffect, useState } from "react";
import { Validation } from "../common/validation";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);

  useEffect((x) => {
    setList(JSON.parse(localStorage.getItem("information")));
  }, []);

  console.log("lehfdsklghdf", list);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const onSubmit = () => {
    let validData = {};
    Object.keys(data).forEach((key) => {
      const inValidKey = Validation(key, data[key]);
      if (inValidKey) {
        validData[key] = inValidKey;
      }
    });
    if (Object.keys(validData).length) {
      setError(validData);
    } else {
      const findUser = list?.find(
        (v) => v?.email === data.email && v.password === data.password
      );
      console.log("findUser", findUser);
      if (findUser) {
        router.push("/");
        localStorage.setItem("token", JSON.stringify(true));
        setData({
          email: "",
          password: "",
        });
        setError({});
      } else {
        setError({ email: "inValid Email", password: "inValid Password" });
      }
    }
  };
  console.log("ndgfjas");
  console.log("errorerrorerrorerror", error);

  return (
    <div className="flex w-full h-full overflow-y-hidden">
      <div className="w-[50%] h-full max-h-screen">
        <Image
          src={LoginImage}
          alt="LoginImage"
          objectFit="cover"
          layout="responsive"
        />
      </div>
      <div className="w-[50%] bg-blue-100">
        <div className="px-[100px] flex items-center w-full h-screen">
          <div className="flex flex-col gap-5 w-full">
            <div>
              <div className="text-blue-50 text-[42px] font-semibold">
                Log In
              </div>
              <Divider size="sm" className="text-blue-50 w-[140px]" />
            </div>
            <div className="text-[20px] text-grey-50">
              Welcome Back, Please login your account.
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
                value={data.email}
                type="text"
                onChange={(e) => onChangeHandler(e)}
                placeholder="Enter your Email"
                leftSection={<Image src={sms} alt="sms" sizes={24} />}
              />
              <div>
                {error.email ? (
                  <div className="text-red-500">{error.email} </div>
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
                {error.password ? (
                  <div className="text-red-500">{error.password} </div>
                ) : (
                  ""
                )}
              </div>
              <div className="text-blue-50 font-medium text-[20px] flex justify-end mt-2">
                Forgot password?
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <div className="flex flex-col">
                <Button
                  variant="filled"
                  size="lg"
                  color="#0E3D63"
                  className="min-w-[256px] w-full"
                  onClick={onSubmit}
                >
                  Login
                </Button>
                <div className="mt-3 text-grey-50 text-[20px] font-normal">
                  Create an account?{" "}
                  <Link href="/register" className="font-medium text-blue-50">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
