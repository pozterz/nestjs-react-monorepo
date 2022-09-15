export declare const signOut: () => void;
export declare const getStoreData: ($key: string) => any;
export declare const setStoreData: ($key: string, $value: any) => void;
export declare const removeStore: ($key: string) => void;
export declare const getTokenExpirationDate: (encodedToken: any) => Date;
export declare const isExpiredToken: (encodedToken: any) => boolean;
export declare const getToken: (fromStorage?: string, tokenKey?: string) => string | null;
