import { getAuth } from "@clerk/express";
import { Request, Response, NextFunction } from "express";
import { ErrorCode } from "../errors/errors";

export const requireAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { userId } = getAuth(req);
    if (!userId) {
        return res.status(401).json({ error: ErrorCode.UNAUTHORISED });
    }
    next();
}