import { useEffect, useState } from "react";

const LiveDateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000); 

    return () => clearInterval(interval);
  }, []);

  const dayName = now.toLocaleString("en-US", { weekday: "long" });
  const month = now.toLocaleString("en-US", { month: "short" });
  const date = now.getDate();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "am" : "pm";

  hours = hours % 12 || 12;

  return (
    <span>
      {dayName} {month} {date} {hours}:{minutes} {ampm}
    </span>
  );
};

export default LiveDateTime;
