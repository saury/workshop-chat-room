import { DateTime } from 'luxon';
import * as shortid from 'shortid';

import { Message } from '../message';

import { MsgRequest } from './types';

export const createMessage = ({ message, sentAt }: MsgRequest, user): Message => {
    return {
        id: shortid.generate(),
        message,
        receivedByServerAt: DateTime.local(),
        sentAt: DateTime.fromISO(sentAt),
        user,
    };
};
