import { Router } from "express";
import { UsersControllers } from "./user.controller";

const router = Router();
router.post("/register", UsersControllers.createUser)   //dont call the UsersControllers.createUser()=>X
router.get("/all-users", UsersControllers.getAllUsers)   //dont call the UsersControllers.createUser()=>X

export const UserRoutes = router;