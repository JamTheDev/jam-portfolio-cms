export default ({ env }) => ({
  host: env('MY_HEROKU_URL'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
