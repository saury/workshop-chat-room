import { SignInRequest } from './SignInRequest';

export const isSignInRequest = (input: any): input is SignInRequest => {
    // validate the request
    if (typeof input !== 'object') return false;
    if (typeof input.username !== 'string') return false;
    if (typeof input.password !== 'string') return false;
    return !!input.username && !!input.password;
};
