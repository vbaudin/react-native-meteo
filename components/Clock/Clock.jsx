import { s } from "./Clock.style";
import { nowToHHMM } from "../../services/date-service";
import Txt from "../Txt/Txt";
import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Txt style={s.time}>{time}</Txt>
    </>
  );
};

export default Clock;
