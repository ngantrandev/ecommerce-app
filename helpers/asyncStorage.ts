import AsyncStorage from '@react-native-async-storage/async-storage';

const setItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('Error saving data', error);
  }
};
const getItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log('Error get data', error);
  }
};
const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Error delete data', error);
  }
};

export { setItem, getItem, removeItem };
