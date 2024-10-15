import { useState } from "react";
import { Heading } from "../../components/HeadingCompo";
import { InputBox } from "../../components/InputBox";
import { Quote } from "../../components/Quote";
import { SubHeading } from "../../components/SubHeadingCompo";
import { Button } from "../../components/Button";
import { SignupType } from "./types";
import { signupReq } from "./api";

export const SignupPage = () => {
  const [postInputs, setPostInputs] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="h-screen lg:grid lg:grid-cols-10 flex justify-center items-center flex-col ">
      <div className="lg:col-span-5 flex justify-center ">
        <div>
          <div className="flex justify-center">
            <Heading heading="Create an account" />
          </div>
          <div className="flex justify-center mt-2 pb-6">
            <SubHeading
              subHeading="Already have an account? "
              buttonText="Login"
              to="/signin"
            />
          </div>
          <div className="mt-8">
            <div>
              <InputBox
                type="text"
                label="Username"
                placeholder="Enter your username"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  const value = target.value;
                  setPostInputs({ ...postInputs, name: value });
                }}
              />
            </div>
            <div>
              <InputBox
                type="email"
                label="Email"
                placeholder="johndoe@example.com"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  const value = target.value;
                  setPostInputs({ ...postInputs, email: value });
                }}
              />
            </div>
            <div>
              <InputBox
                type="password"
                label="Password"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  const value = target.value;
                  setPostInputs({ ...postInputs, password: value });
                }}
              />
            </div>
          </div>
          <div className="mt-4 ">
            <Button
              title="Sign Up"
              onClick={() => {
                signupReq(postInputs);
              }}
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 hidden lg:block">
        <Quote
          quote={
            "The customer service I recieved was exceptional. The support team went above and beyond to address my concerns"
          }
          author={"Jules WinnField"}
          authorAbout={"CEO, Acme inc"}
        />
      </div>
    </div>
  );
};
