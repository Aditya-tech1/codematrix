import connectDB from "@/lib/DB/Dbconnection";
import { NextResponse } from "next/server";
import usermodel from "@/models/usermodel";
import bcrypt from "bcrypt";

export async function POST(request) {
    
    try {
        const {email,password } = await request.json();
        const user = await usermodel.findOne({ email });
        if (!user || !bcrypt.compareSync(password,user.password)){
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }
        console.log(email,password);
        return NextResponse.json({ message: "User login successfully" },{status: 201});
    } catch (error) {
        return NextResponse.json({ error: "Failed to login user" }, { status: 500 });
    }
}