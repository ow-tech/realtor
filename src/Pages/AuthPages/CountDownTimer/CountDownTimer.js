import React, { useState, useEffect, useRef } from "react";
import { Typography, Divider, Button } from "@mui/material";

function CountDownTimer({ duration, onTimeout, onResend, isVerified }) {
  const [counter, setCounter] = useState(duration * 1000);
  const [isCompleted, setIsCompleted] = useState(false);
  const [shouldResetCounter, setShouldResetCounter] = useState(false);
  const [remainingTime, setRemainingTime] = useState(counter);

  const expectedEndTimeRef = useRef(+new Date() + counter);

  useEffect(() => {
    if (shouldResetCounter) {
      setCounter(duration * 1000);
      expectedEndTimeRef.current = +new Date() + counter;
      setRemainingTime(counter);
      setIsCompleted(false);
      setShouldResetCounter(false);
    }

    const timer = setInterval(() => {
      const currentTime = +new Date();
      const timeDiff = expectedEndTimeRef.current - currentTime;

      if (timeDiff > 0) {
        setRemainingTime(timeDiff);
        // console.log(remainingTime, currentTime)
      } else {
        clearInterval(timer);
        setIsCompleted(true);
        setRemainingTime(0);
        // console.log(remainingTime, currentTime,'am new remaining time')
      }
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, [counter, duration, shouldResetCounter, onTimeout, remainingTime]);

  const formatTime = (remainingTime) => {
    const minutes = Math.floor(remainingTime / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((remainingTime % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
  return (
    <>
      {!isVerified ? (
        <>
          <Typography variant="DubaiRegular16">
            {formatTime(remainingTime)}
          </Typography>
          <Divider orientation="vertical" flexItem className="whiteDivider" />
          <Button
            size="small"
            variant="text"
            // color="primary"
            className="resendButton"
            disabled={!isCompleted || isVerified}
            onClick={() => {
              setShouldResetCounter(true);
              onResend();
            }}
          >
            Resend
          </Button>
        </>
      ) : null}
    </>
  );
}

export default CountDownTimer;

// useEffect(() => {
//   if (shouldResetCounter) {
//     setCounter(duration);
//     setIsCompleted(false);
//     setShouldResetCounter(false);
//   }

//   const timer = setInterval(() => {
//     setCounter((prevCounter) => {
//       if (prevCounter > 0) {
//         return prevCounter - 1;
//       } else {
//         clearInterval(timer);
//         setIsCompleted(true);
//         return 0;
//       }
//     });
//   }, 1000);

//   return () => {
//     clearInterval(timer);
//   };
// }, [counter, duration, onTimeout, shouldResetCounter]);
// const formatTime = (counter) => {
//   const minutes = Math.floor(counter / 60)
//     .toString()
//     .padStart(2, "0");
//   const seconds = (counter % 60).toString().padStart(2, "0");
//   return `${minutes}:${seconds}`;
// };
