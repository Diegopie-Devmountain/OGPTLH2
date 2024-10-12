import { Router } from "express";
// import all routes
import authRoutes from "./auth.routes";

const appRouter = Router();
appRouter.use('/api/auth', authRoutes)

// attatch to appRouter



export default appRouter;

