export const getDataFromLocalStorage = () => {
  const lsData = localStorage.getItem('dateSelectorData') || '';
  const parsedLsData = JSON.parse(lsData);
  return parsedLsData;
};
