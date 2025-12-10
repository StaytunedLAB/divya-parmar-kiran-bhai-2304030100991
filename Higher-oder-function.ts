type LogFn = (message: string) => void;


function createLogger(baseLogger: LogFn, prefix: string): LogFn {
  return (message: string) => {
    baseLogger(`[${prefix}] ${message}`);
  };
}

const infoLogger = createLogger(console.log, "INFO");
const errorLogger = createLogger(console.error, "ERROR");

infoLogger("User logged in successfully."); 
errorLogger("Database connection failed."); 