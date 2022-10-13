const DateFormat = (props) => {
  const { date, showHour } = props;

  const dateEntity = new Date(date);
  const paramsHour = showHour === true
    ? {
        hour: '2-digit',
        minute: '2-digit',
      }
    : {};
  const dateConverted = dateEntity.toLocaleDateString('en-US', paramsHour);
  return <>{dateConverted}</>;
};

export default DateFormat;
