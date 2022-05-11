import express from "express";
import { Log } from "./helpers/logger.helper";
import * as dotenv from "dotenv";

dotenv.config();

export class App {
    protected app: express.Application;
    private logger = Log.getLogger();

    constructor() {
        // Init Express
        this.app = express();

        //Start server
        this.app.listen(process.env.PORT, () => {
            this.logger.info(`The server is running in port localhost: ${process.env.PORT}`);
        });
    }
}