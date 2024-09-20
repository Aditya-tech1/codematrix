import connectDB from "@/lib/DB/Dbconnection";
import { NextResponse } from "next/server";
import usermodel from "@/models/usermodel";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    await connectDB();
    const { name, email, phone, isteacher, class_stu, disability, password }=await request.json();
    const hashedpass=bcrypt.hashSync(password, 10);
    const newUser= new usermodel({
      name: name,
      email: email.toLowerCase(),
      phone: phone,
      isteacher:isteacher,
      class_stu:class_stu,
      disability:disability,
      password: hashedpass,
    });
    await newUser.save();
    console.log(newUser);

    return NextResponse.json({ message: "User registered successfully" },{status: 201});
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 }
    );
  }
}
