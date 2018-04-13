import { getEnv } from 'modules/core/getEnv';

export const prefix = `${getEnv('DB_TABLE_PREFIX', '')}jin-chat-api`;
