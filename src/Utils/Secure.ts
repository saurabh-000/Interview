import * as Keychain from 'react-native-keychain';


export async function setAuthToken(token: string) {
await Keychain.setGenericPassword('token', token, {
accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
service: 'auth-token',
});
}


export async function getAuthToken() {
const creds = await Keychain.getGenericPassword({service: 'auth-token'});
return creds ? creds.password : null;
}