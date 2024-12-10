export interface Configuration {
  port: number;
  database: {
    db: string;
  };
}
export const defaultConfiguration: Configuration = {
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    db: process.env.DATABASE_URL,
  },
};
