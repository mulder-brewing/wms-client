export const isSignedIn = state => {
    const token = state.auth.token;
    const expiration = state.auth.expiration;
    return token != null && expiration > utcSecondsSinceEpoch();
};

const utcSecondsSinceEpoch = () => {
    const now = new Date();
    const utcMilllisecondsSinceEpoch = now.getTime() + (now.getTimezoneOffset() * 60 * 1000); 
    return Math.round(utcMilllisecondsSinceEpoch / 1000);
};