export const getDate = (el) => {
  const day = new Date(el.start_date).getUTCDate();
  const month = new Date(el.start_date).getUTCMonth();
  const year = new Date(el.start_date).getUTCFullYear();
  return `${day}.${month}.${year}`;
};
