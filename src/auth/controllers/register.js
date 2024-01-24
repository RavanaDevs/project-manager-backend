import User from '../../models/user.js';
import { userSchemaValidator } from '../../models/user.js';

export const register = async (req, res, next) => {
  const data = userSchemaValidator.validate(req.body);

  const e = await User.find({ email: data.value.email });
  if (e.length > 0) {
    return res.json({ error: 'user exists' });
  }

  const user = new User(data.value);
  const u = await user.save();
  res.json({ message: 'user created', user: u });
};
