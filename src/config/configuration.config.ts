export const host_config = () => {
  return {
    port: Number(process.env.PORT || 3000),
  };
};

export const database_config = () => {
  return {
    database: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      uri: process.env.DB_URI,
    },
  };
};
export const jwt_config = () => {
  return {
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  };
};
