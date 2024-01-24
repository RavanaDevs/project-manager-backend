import User from '../../models/user.js';

export const login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!(email && password)) {
    return res.json({ error: 'invalid body params' });
  }

  const e = await User.findOne({ email: email, password: password });
  if (!e) {
    return res.json({ error: 'invalid username or password' });
  }
  return res.json({ message: 'login success' });
};
