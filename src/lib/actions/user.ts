"use server";

import bcrypt from "bcrypt";
import db from "../db";

type UserDataType = {
  username: string;
  email: string;
  password: string;
  phone: number;
  address: string;
  isAdmin: boolean;
  imageUrl: string;
};

export async function createUser(userData: UserDataType) {
  const { address, email, imageUrl, isAdmin, password, phone, username } =
    userData;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await db.user.create({
      data: {
        address,
        email,
        hashedPassword,
        isAdmin,
        phone,
        username,
        userImage: imageUrl,
      },
    });

    console.log("success");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create Product Try Again");
  }
}
