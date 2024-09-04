import { DataKeyNames } from '~/constants/keyNames';
import { getItem, setItem } from './asyncStorage';

const isBoarded = async () => {
  const isBoarded = await getItem(DataKeyNames.onboarded);
  return isBoarded == 'true';
};

const markBoarded = async () => {
  try {
    await setItem(DataKeyNames.onboarded, 'true');
  } catch (error) {
    console.log(error);
  }
};

const resetBoarded = async () => {
  try {
    await setItem(DataKeyNames.onboarded, 'false');
  } catch (error) {
    console.log(error);
  }
};

export { isBoarded, markBoarded, resetBoarded };
