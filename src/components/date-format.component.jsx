const DateFormat = (props) => {
  const { date } = props;
  const dateConverted = new Date(date).toLocaleDateString('en-US');
  return <>{dateConverted}</>;
};

export default DateFormat;
