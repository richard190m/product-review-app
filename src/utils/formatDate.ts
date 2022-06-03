const pad = (d: number) => {
  return d < 10 ? '0' + d.toString() : d.toString();
};

/**
 * Format date to format dd/mm/yyyy
 *
 * @param date - Date to format.
 * @returns Date string formated.
 */
const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());

  return `${day}/${month}/${year}`;
};

export default formatDate;
