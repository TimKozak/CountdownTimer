export const getTime = (event_date) => {
  const eventDateArray = event_date.split(".");

  const eventDay = parseInt(eventDateArray[0]);
  const eventMonth = parseInt(eventDateArray[1]) - 1;
  const year = new Date().getFullYear();

  const today = new Date();
  let endDate = new Date(year, eventMonth, eventDay);

  if (endDate - today < 0) {
    if (endDate - today <= -1000 * 60 * 60 * 24) {
      endDate = new Date(year + 1, eventMonth, eventDay);
    } else {
      return [0, 0, 0, 0];
    }
  }

  const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
  const hours = parseInt((Math.abs(endDate - today) / (1000 * 60 * 60)) % 24);
  const minutes = parseInt(
    (Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60)) % 60
  );
  const seconds = parseInt(
    (Math.abs(endDate.getTime() - today.getTime()) / 1000) % 60
  );

  return [days, hours, minutes, seconds];
};
