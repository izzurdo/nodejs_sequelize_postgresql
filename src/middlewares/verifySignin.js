export const verifySignin = (req, res, next) => {
  const { email, password } = req.body;

  // Verificar que se proporcionen email y contraseña
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Verificar que email y contraseña no estén vacíos
  if (email === "" || password === "") {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Validar formato de email
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  // Validar longitud de la contraseña
  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters long" });
  }

  // Validar formato de la contraseña
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    });
  }

  next();
};