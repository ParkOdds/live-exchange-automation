import { Credential } from "./credential";

export interface User {
    displayName: string;
    userid: number;
    credential: Credential;
}