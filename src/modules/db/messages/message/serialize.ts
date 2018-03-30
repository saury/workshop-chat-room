import { Message } from './message';
import { SerializableMessage } from './serializableMessage';

export const serializable = ({ id, message, receivedByServerAt, sentAt }: Message): SerializableMessage => ({
    id,
    message,
    receivedByServerAt: receivedByServerAt.toISO(),
    sentAt: sentAt.toISO(),
});
