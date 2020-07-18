const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const config = require('./configuration');
const User = require('./models/user');

const cookieExtractor = req => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['access_token'];
  }
  return token;
}

passport.use(new JwtStrategy({
  jwtFromRequest: cookieExtractor,
  secretOrKey: config.JWT_SECRET,
  passReqToCallback: true
}, async (req, payload, done) => {
  try {
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    req.user = user;
    done(null, user);
  } catch(error) {
    done(error, false);
  }
}));

passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ "local.email": email });
    if (!user) {
      return done(null, false);
    }
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      return done(null, false);
    }
    done(null, user);
  } catch(error) {
    done(error, false);
  }
}));