const getOptionalNumberEnvVar = (value: string | undefined, defaultValue: number): number => {
    if (value && !isNaN(Number(value))) {
        return parseInt(value, 10);
    }
    return defaultValue;
}
const getOptionalStringEnvVar = (value: string | undefined, defaultValue: string): string => {
    return value || defaultValue;
}

export {
    getOptionalNumberEnvVar,
    getOptionalStringEnvVar,
}