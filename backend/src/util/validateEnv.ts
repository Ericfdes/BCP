import { cleanEnv } from "envalid";
import {str, port} from "envalid/dist/validators";

export default cleanEnv(process.env, {
    MONGO_CONNECT_STRING: str(),
    PORT: port(),
})