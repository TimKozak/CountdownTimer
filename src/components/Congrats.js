import React from "react";

const Congrats = ({ event_name }) => {
  return (
    <div>
      <h1 class="text-center pb-3">Hooray! It's {event_name} 🎉</h1>
    </div>
  );
};

export default Congrats;
