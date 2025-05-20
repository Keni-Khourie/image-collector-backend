import express from'express';
const router = express.Router();
import handleRefreshToken from "../controller/refreshTokenController"


router.get("/", handleRefreshToken)

export default router