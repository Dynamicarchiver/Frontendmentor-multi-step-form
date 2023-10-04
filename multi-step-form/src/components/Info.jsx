import React, { useState } from "react";

const Info = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErroes = {}
    if (!formData.name.trim()){
      validationErroes.name = "This field is required"
    }
    if (!formData.email.trim()) {
      validationErroes.email = "This field is required"
    } else if(!/\S+@\S+\.\S+/.test(FormData.email)) {
      validationErroes.email = "Email is not valid"
    }

    if (!formData.tel.trim()) {
      validationErroes.email = "This field is required"
    } else if(!formData.tel.isNumber()) {
      validationErroes.email = "Telephone number is not valid"
    }


    setErrors(validationErroes)

    if (Object.keys(validationErroes).length === 0) {
      console.log("form submitted")
    }
  }
  return (
    <div className="py-[20px] text-Marine-blue text text-[20px] font-[500]">
      <form
        className="flex flex-col gap-[8px] text-[20px] w-[90%]"
        onSubmit={handleSubmit}
      >
        <label for="name" className="flex justify-between">
          <span>Name</span>
          {errors.name && (
            <span className="text-Strawberry-red name-error hidden">
              {errors.name}
            </span>
          )}
        </label>
        <input
          type="text"
          placeholder="eg. Stephen King"
          name="name"
          value={formData.name}
          onChange={(event) => {
            setFormData({ ...formData, name: event.target.value });
          }}
          className="mb-[15px] border-Light-gray  border-[1px] focus:outline outline-Purplish-blue outline-1 px-[15px] py-[10px] rounded-lg "
        />
        <label for="email" className="flex justify-between">
          <span>Email</span>{" "}
          {errors.email && (
            <span className="text-Strawberry-red name-error hidden">
              {errors.email}
            </span>
          )}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="eg. stephenking@lorem.com"
          value={formData.email}
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
          className="mb-[15px] border-Light-gray border-[1px] focus:outline outline-Purplish-blue outline-1  px-[15px] py-[10px] rounded-lg "
        />
        <label for="tel" className="flex justify-between">
          <span>Phone Number</span>{" "}
          {errors.tel && (
            <span className="text-Strawberry-red name-error hidden">
              {errors.tel}
            </span>
          )}
        </label>
        <input
          type="tel"
          id="tel"
          name="tel"
          placeholder="eg. +1 234 567 890"
          value={formData.tel}
          onChange={(event) => {
            setFormData({ ...formData, tel: event.target.value });
          }}
          className="mb-[15px] border-Light-gray border-[1px] focus:outline outline-Purplish-blue outline-1  px-[15px] py-[10px] rounded-lg "
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Info;
