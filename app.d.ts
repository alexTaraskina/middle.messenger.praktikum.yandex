declare global {
    export type Nullable<T> = T | null;

    export type User = {
        login: string; 
        password: string; 
        //
    }
}

export {}
