import { IsInt, Max, Min } from "class-validator";
import * as dotenv from "dotenv";

dotenv.config();

export class Env {
    @IsInt()
    @Min(2000)
    @Max(9999)
    public port: number;
}

const env = new Env();

env.port = +process.env.PORT;

export default env;