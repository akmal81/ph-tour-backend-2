/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response} from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
// import AppError from "../../errorHelpers/AppError";



const createUser = catchAsync(async (req: Request, res: Response, next:NextFunction) => {


    // throw new AppError(httpStatus.BAD_REQUEST, "fake error");
    
    const user = await UserServices.createUser(req.body)

    sendResponse(res,{
        success:true,
        statusCode: httpStatus.CREATED,
        message:"User Created SuccessFully",
        data: user
    })

})
const getAllUsers = catchAsync(async (req:Request, res:Response, next:NextFunction) => {
    const result = await UserServices.getAllUsers();
    sendResponse(res,{
        success:true,
        statusCode: httpStatus.CREATED,
        message:"User Created SuccessFully",
        data: result.data,
        meta:result.meta
    })
})

export const UsersControllers = {
    createUser,
    getAllUsers
}