export const app_config = () => {
  return {
    gcp_logging: {
      logName: process.env.LOG_NAME,
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY,
      projectId: process.env.PROJECT_ID,
    },
    nodeEnv: process.env.NODE_ENV || 'development',
    port: Number(process.env.PORT || 3000),
    database: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      uri: process.env.DB_URI,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    saltOrRounds: process.env.HASHING_SECRET.length,
    secret: process.env.HASHING_SECRET,
  };
};
