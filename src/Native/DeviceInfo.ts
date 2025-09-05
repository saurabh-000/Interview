import {NativeModules, Platform} from 'react-native';
const {DeviceInfoModule} = NativeModules as any;
export async function getOsVersion(): Promise<string> {
if (!DeviceInfoModule) return `${Platform.OS} (fallback)`;
return await DeviceInfoModule.getOsVersion();
}