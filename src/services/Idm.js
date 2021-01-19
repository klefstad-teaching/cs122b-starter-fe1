import Socket from "./Socket";
import { idmUrl, idmEPs } from "../Config.json";

async function login(email, password) {
    const payLoad = {
        email: email,
        password: password.split("")
    };

    const options = {
        baseURL: idmUrl, // Base URL
        url: idmEPs.loginEP, // Path of URL
        data: payLoad // Data to send in Body
    }

    return await Socket.POST(options);
}

export default {
    login
};
