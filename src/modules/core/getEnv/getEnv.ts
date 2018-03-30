import { logger } from '../logger';

export const getEnv = (name: string, defaultVal: string = ''): string => {
    const value = process.env[name];
    if (!value) {
        logger.warn(`env var ${name} is not set. will use default val: ${defaultVal}`);
        return defaultVal;
    }
    return value;
};
