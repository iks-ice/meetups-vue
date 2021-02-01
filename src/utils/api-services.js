import http from "./http-client.js";
const getMeetups = async () => await http("/meetups");

const login = async (body) => await http("/auth/login", { body });
const register = async (body) => await http("/auth/register", { body });

export { getMeetups, login, register };
