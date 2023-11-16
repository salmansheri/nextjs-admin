"use client";

import React from "react";
import Card from "./card";
import { MdSupervisedUserCircle } from "react-icons/md";

const CardItem = () => {
  return (
    <div className="flex gap-5 justify-between flex-col lg:flex-row">
      <Card
        title="Total Users"
        price={10.923}
        percentage={30}
        icon={MdSupervisedUserCircle}
      />
      <Card
        title="Total Users"
        price={10.923}
        percentage={12}
        icon={MdSupervisedUserCircle}
      />
      <Card
        title="Total Users"
        price={10.923}
        percentage={12}
        icon={MdSupervisedUserCircle}
      />
    </div>
  );
};

export default CardItem;
