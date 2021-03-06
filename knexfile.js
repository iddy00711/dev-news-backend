const ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};

const customConfig = {
  development: {
    connection: {
      database: 'nc_news',
      username: 'iddy',
      password: 'ncisgreat'
    }
  },
  test: {
    connection: {
      database: 'nc_news_test',
      username: 'iddy',
      password: 'ncisgreat'

    }
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
