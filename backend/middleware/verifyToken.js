import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    
    const token = req.cookies.token;
    if(!token) {
        res.status(400).json({
            success: false,
            message: "Unauthorized - no token provided"
        })
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if(!decodedToken) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized - Invalid token"
            })
        }
        //After verification, you extract the userId from the token’s payload.
        //Then attach it to the req object (req.userId).
        //This way, any route/controller after this middleware can easily know which user is making the request without re-verifying the token.
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        console.log("Error in verifyToken", error);
        return res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}