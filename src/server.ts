import express from "express";
import { Log } from "./helpers/logger.helper";
import * as dotenv from "dotenv";
import { Routes } from "./routes";
import * as l10n from "jm-ez-l10n";

dotenv.config();
export class App {
    protected app: express.Application;
    private logger = Log.getLogger();

    constructor() {
        // Init Express
        this.app = express();

        // Translation
        l10n.setTranslationsFile("en", "src/language/translation.en.json");
        this.app.use(l10n.enableL10NExpress);

        // Routing
        const routes = new Routes();
        this.app.use("/", routes.configure());

        //Start server
        this.app.listen(process.env.PORT, () => {
            this.logger.info(`The server is running in port localhost: ${process.env.PORT}`);
        });
    }
}