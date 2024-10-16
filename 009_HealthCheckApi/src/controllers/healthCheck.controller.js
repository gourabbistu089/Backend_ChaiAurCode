import {ApiResponse} from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js";
import {asyncHandler} from "../utils/asyncHandler.js";

/*
const healthCheck = async(req,res)=>{
    try {
        res.status(200).json({
            status: "success",
            message: "Server is up and running",
        })
    } catch (error) {
        
    }
}
*/

 const healthCheck = asyncHandler(async(req, res)=>{
    return res
        .status(200)
        .json(new ApiResponse(200, "OK", "Helth check passed"))
})
export {healthCheck}