import { Router } from "express";
import { userRoute } from "./modules/user/user.route";
import * as l10n from "jm-ez-l10n";

export class Routes {
    public configure() {
        const router = Router();
        router.use("/user", userRoute);

        router.all("/*", (req, res) => {
            return res.status(404).json({
                error: l10n.t("ERR_URL_NOT_FOUND"),
            });
        });

        return router;
    }
}