import { Message } from './Message';
import { SerializableMessage } from './SerializableMessage';

export const serializable = ({ id, message, receivedByServerAt, sentAt, user }: Message): SerializableMessage => ({
    id,
    message,
    receivedByServerAt: receivedByServerAt.toISO(),
    sentAt: sentAt.toISO(),
    user,
});
