import { buildApp } from "../src/app";

const testApp = buildApp({
    logger: true,
    withSwagger: false,
});

const fakeAuthHeader = { 'authorization': 'Bearer fakeToken'}
export const getRequest = async (url: string) => testApp.inject({ url, headers: fakeAuthHeader, method: 'GET' })