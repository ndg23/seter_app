import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key:string, value:any) => {
  try {    
    await AsyncStorage.setItem('@' + key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};
export const removeData = async (key:string) => {
    try {
      await AsyncStorage.removeItem('@' + key);
    } catch (e) {
      console.log(e);
    }
  };
// Function to retrieve data
export const getData = async (key:string) => {
  try {
    const value = await AsyncStorage.getItem("@".concat(key));
    if (value !== null) {
      const parsedValue = await JSON.parse(value);
      const jsonData = { name: 'John', age: 30 };
      
      if (parsedValue && parsedValue.id !== undefined) {  

        console.log('ID:', parsedValue.id);
      } else {            console.log("retrieve",typeof parsedValue);

        console.log('ID is missing or undefined.');
      }
      
      return parsedValue;
    } else {
      console.log('No data found for the given key.');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data: ', error);
    return null;
  }
};

// export const removeValue = async (key:string) => {
//   try {
//     await AsyncStorage.removeItem('@' + key);
//   } catch (e) {
//     console.log(e);
//   }
// };