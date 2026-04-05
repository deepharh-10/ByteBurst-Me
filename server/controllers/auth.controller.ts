import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../lib/prisma";

// signup
export const signup = async (req: Request, res: Response) => {
    try {
        const { name, roll, email, password } = req.body;

        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        const passwordLength = password.length > 4;

        // check all field
        if (!name.trim() || !roll.trim() || !email.trim() || !password.trim()) return res.status(StatusCodes.NOT_FOUND).json({ message: "Enter all the fields" })

        // check password length
        if (!passwordLength) return res.status(StatusCodes.NOT_FOUND).json({ message: ".Password is too small" })

        // check email regex
        if (!emailRegex.test(email)) return res.status(StatusCodes.NOT_FOUND).json({ message: "Enter correct email" })



        const user = await prisma.user.findUnique({
            where: { email: email, roll: roll }
        })

        if (user) return res.status(StatusCodes.CONFLICT).json({
            message: "User already exist"
        })

        // hashed password

        // generate otp

        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                roll: roll,
                password: password,
            }
        })

    } catch (error: any) {

    }
}

// login

// logout

// verifyOtp