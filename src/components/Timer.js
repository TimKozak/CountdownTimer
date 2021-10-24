import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const Timer = ({ event_name, event_date }) => {
  const [initialDays, initialHours, initialMinutes, initialSeconds] =
    event_date;

  // State values
  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
        if (minutes === 0) {
          setHours(hours - 1);
          setMinutes(59);

          if (hours === 0) {
            setDays(days - 1);
            setHours(23);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      <h1 class="text-center pb-3">Countdown to {event_name}</h1>
      <Row>
        <Col>
          <h2 class="text-center">{days}</h2>
          <h3 class="text-center">Days</h3>
        </Col>
        <Col>
          <h2 class="text-center">{hours}</h2>
          <h3 class="text-center">Hours</h3>
        </Col>
        <Col>
          <h2 class="text-center">{minutes}</h2>
          <h3 class="text-center">Minutes</h3>
        </Col>
        <Col>
          <h2 class="text-center">{seconds}</h2>
          <h3 class="text-center">Seconds</h3>
        </Col>
      </Row>
    </div>
  );
};

export default Timer;
