import { useEffect } from "react";
import Timer from "./components/Timer";
import Congrats from "./components/Congrats";
import { getTime } from "./logic/getTime";

const App = () => {
  // Specify event name
  const EVENT_NAME = "My Birthday";
  // Specify event date (day.month.year)
  const EVENT_DATE = "24.10";
  // Specify background color
  const COLOR = "#B19CD9";

  const eventDateArray = getTime(EVENT_DATE);

  useEffect(() => {
    document.body.style.backgroundColor = COLOR;
  }, []);

  return (
    <div className="App">
      <div className="center-screen">
        {eventDateArray.reduce((a, b) => a + b, 0) === 0 ? (
          <Congrats event_name={EVENT_NAME} />
        ) : (
          <Timer event_name={EVENT_NAME} event_date={eventDateArray} />
        )}
      </div>
    </div>
  );
};

export default App;
