export default (number) => {
  const formatNumber = new Intl.NumberFormat("en-En");
  return formatNumber.format(number);
};
