export interface SerializableMessage {
    id: string;
    message: string;
    sentAt: string;
    receivedByServerAt: string;
    user: string;
}
