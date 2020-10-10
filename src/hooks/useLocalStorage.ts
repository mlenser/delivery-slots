export type DateSelectorData = {
  formattedTime: string;
  homeDelivery: boolean;
  selectedDate: string;
  selectedTime: string;
};

type LocalStorage = {
  getItem: (key: string) => DateSelectorData | {};
  setItem: (key: string, data: object) => void;
};

export enum LocalStorageKeys {
  DATE_SELECTOR_DATA = 'dateSelectorData',
}

export const useLocalStorage = (): LocalStorage => {
  const getItem = (key: string): DateSelectorData | {} => {
    const possibleData = localStorage.getItem(key);
    if (possibleData) {
      const parsedData = JSON.parse(possibleData);
      return parsedData;
    }
    return {};
  };

  const setItem = (key: string, data: object): void => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  return {
    getItem,
    setItem,
  };
};
