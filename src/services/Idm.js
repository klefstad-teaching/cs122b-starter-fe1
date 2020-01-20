import Socket from "./Socket";
import { idmEPs } from "../Config.json";

const { loginEP } = idmEPs;

async function login(email, password) {
  const payLoad = {
    email: email,
    password: password.split("")
  };

  return await Socket.POST(loginEP, payLoad);
}

export default {
  login
};
