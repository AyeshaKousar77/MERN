import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
const verifyToken = (route) => (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(403).json({ success: false, message: 'Token is not provided' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(403).json({ success: false, message: 'Token is not provided' });
  }

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    req.decoded = decoded;
    req.route = route; 
    next();
  });
};

export default verifyToken;
