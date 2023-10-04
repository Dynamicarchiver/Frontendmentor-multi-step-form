import React, { useState } from "react";
import SideBar from "./SideBar";
import Info from "./Info";
import Summary from "./Summary";
import AddOns from "./AddOns";
import Plan from "./Plan";

const MainBar = ({ lists, active, setActive, formData, setFormData }) => {
  const PageDisplay = () => {
    if (active === 1) {
      return <Info formData={formData} setFormData={setFormData} />;
    } else if (active === 2) {
      return <Plan />;
    } else if (active === 3) {
      return <AddOns />;
    } else {
      return <Summary />;
    }
  };
  return (
    <div className="w-[70%] h-full flex text-[16px]">
      <div className="w-[75%] h-[85%] mx-auto my-auto flex flex-col relative">
        <div className="flex flex-col gap-[5px]">
          <h1 className="font-[700] text-[40px] text-Marine-blue ">
            {lists[active - 1].header}
          </h1>
          <p className="text-Cool-gray text-[18px] font-[500]">
            {lists[active - 1].description}
          </p>
        </div>
        <div className=" ">{PageDisplay()}</div>
        {active !== 1 ? (
          <div className="absolute flex bottom-[1px] gap-[30px]">
            {" "}
            <button
              onClick={() => {
                setActive((prevActive) => prevActive - 1);
              }}
              className="px-[20px] font-[500] py-[10px] rounded-lg text-Cool-gray hover:text-Marine-blue text-[18px] pb-[25px]"
            >
              Go Back
            </button>{" "}
          </div>
        ) : (
          ""
        )}
        <div className="self-end absolute flex bottom-[1px] gap-[30px]">
          <button
            onClick={() => {
              if (active < 4) {
                if (active === 1) {
                  if (formData.name == "") {
                    
                  } else if (formData.email == "") {
                    console.log("email is required");
                  } else if (formData.tel == "") {
                    console.log("telephone is required");
                  } else {
                    setActive((currActive) => currActive + 1);
                  }
                }
              } else {
                console.log("confirmed");
              }
            }}
            className=" px-[20px] py-[10px] rounded-lg bg-Marine-blue text-Magnolia"
          >
            {active < lists.length ? "Next Step" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  const [active, setActive] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
  });
  const ListContent = [
    {
      name: "Your Info",
      number: 1,
      header: "Personal Info",
      description: "Please provide your name, email address, and phone number.",
    },
    {
      name: "Select Plan",
      number: 2,
      header: "Select Your Plan",
      description: "You have the option of monthly or yearly billing.",
    },
    {
      name: "Add Ons",
      number: 3,
      header: "Pick Add Ons",
      description: "Add-ons help enhance your gaming experience.",
    },
    {
      name: "Summary",
      number: 4,
      header: "Finishing Up",
      description: "Double-check everything looks OK before confirming.",
    },
  ];
  return (
    <div className="h-[100vh] w-[100vw] bg-Magnolia flex font-ubuntu text-[16px]">
      <div className="w-[75%] h-[75%] mx-auto flex  my-auto bg-White rounded-3xl">
        <SideBar lists={ListContent} active={active} setActive={setActive} />
        <MainBar
          lists={ListContent}
          active={active}
          setActive={setActive}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

export default Form;
