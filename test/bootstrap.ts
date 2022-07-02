import { buildFastifyApp } from "../src/shared";

const testApp = buildFastifyApp({
    logger: true,
    swagger: { enabled: false },
});

const fakeAuthHeader = { 'authorization': 'Bearer fakeToken'}
export const getRequest = async (url: string) => testApp.inject({ url, headers: fakeAuthHeader, method: 'GET' })