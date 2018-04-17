import { db, tables } from 'modules/db';

import { User } from './User';

export const allFromDb = async (): Promise<User[]> => {
    const { Items: users } = await db.doc.scan({ TableName: tables.users }).promise();
    if (!users) return [];
    return users as User[];
};
