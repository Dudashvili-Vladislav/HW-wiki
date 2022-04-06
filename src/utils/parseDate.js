export const parseDate = (date) => {
  const formatDate = (num) => (num > 9 ? num : `0${num}`);
  const dateInstance = new Date(date);
  return `${formatDate(dateInstance.getDay())}:${formatDate(
    dateInstance.getMonth()
  )}:${dateInstance.getFullYear()}`;
};
