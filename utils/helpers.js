module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return new Date(date).toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  if_equals: (actualValue, value, options) => {
    return actualValue === value ? options.fn(this) : options.inverse(this);
  },
};
