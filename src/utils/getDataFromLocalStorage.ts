export const getDataFromLocalStorage = () => {
  const lsData = localStorage.getItem('dateSelectorData') || '';
  if (lsData) {
    const parsedLsData = JSON.parse(lsData);
    return parsedLsData;
  }
  return {};
};
