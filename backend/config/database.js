module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'techleader'),
      user: env('DATABASE_USERNAME', 'novailoveyou'),
      password: env('DATABASE_PASSWORD', 'ABCabc123ABCabc1!'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
