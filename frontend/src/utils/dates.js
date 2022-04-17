export const getDate = (el) => {
  console.log("HERE");
  const day = new Date(el.start_date).getUTCDate();
  const month = new Date(el.start_date).getUTCMonth();
  const year = new Date(el.start_date).getUTCFullYear();
  return `${day}.${month}.${year}`;
};
