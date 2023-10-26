import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "Access denied" });

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res
        .status(401)
        .json({ error: "Token has expired. Please login again." });
    } else {
      return res.status(500).json({ error: err.message });
    }
  }
};
