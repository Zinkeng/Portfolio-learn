import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="ajongafaczinkeng@gmail.com" Image={MdOutlineMail} />
      <SingleInfo text="+237 682743056" Image={FiPhone} />
      <SingleInfo text="Yaounde, Cameroon" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
