declare namespace NodeJS {
    interface ProcessEnv {
      DB_CONNECTION_KEY: string;
      DB_CONNECTION_IV: string;
      DB_CONNECTION_STRING_ENCRYPTED: string;
    }
  }
  