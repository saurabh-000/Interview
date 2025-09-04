import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setJSON(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('AsyncStorage setJSON error:', e);
  }
}

export async function getJSON<T = any>(key: string): Promise<T | any[] |null> {
  try {
    const v = await AsyncStorage.getItem(key);
    console.log("v",v)
    return v ? (JSON.parse(v) as T) : null;
  } catch (e) {
    console.error('AsyncStorage getJSON error:', e);
    return null;
  }
}
