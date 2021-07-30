import { logging } from "./LogManager";

logging
  .configure({
    minLevels: {
      module1: "warn",
      core: "info",
      "core.module": "warn",
    },
  })
  .registerConsoleLogger();

export { logging };
