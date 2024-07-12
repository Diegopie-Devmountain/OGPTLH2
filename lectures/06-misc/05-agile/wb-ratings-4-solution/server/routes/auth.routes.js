import { Router } from "express";
import { loginRequired } from "../middlewares/auth.middlewares.js";
import { User } from "../models/index.js";

const authRouter = Router();

authRouter.post('/auth', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (user && user.password === password) {
    req.session.userId = user.userId;
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Note the `loginRequired` argument passed to the routes below!

authRouter.post('/logout', loginRequired, (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});


export default authRouter;