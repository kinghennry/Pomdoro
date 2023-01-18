import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useGlobalContext } from "./context";
import Clock from "./Clock";

function Timer() {
  const {
    selectedFont,
    actionText,
    colorChoosed,
    setClockStatus,
    setActionText,
    setSecondsRemaining,
    selectedController,
    pomodoroTime,
    shortBreakTime,
    longBreakTime,
    secondsRemaining,
    progressBarPercentage,
  } = useGlobalContext();

  let marginValue = 0;
  let letterSpace = 0;
  let fontSizeForFont = 0;

  if (selectedFont === "Kumbh Sans") {
    marginValue = 15;
    letterSpace = -5;
    fontSizeForFont = 100;
  } else if (selectedFont === "Roboto Slab") {
    marginValue = -20;
    letterSpace = 0;
    fontSizeForFont = 105;
  } else if (selectedFont === "Space Mono") {
    marginValue = -15;
    letterSpace = -5;
    fontSizeForFont = 95;
  }

  const handleAction = () => {
    if (actionText === "START") {
      setClockStatus("Started");
      setActionText("PAUSE");
    } else if (actionText === "PAUSE") {
      setClockStatus("Stopped");
      setActionText("START");
    } else if (actionText === "RESTART") {
      setClockStatus("Stopped");
      if (selectedController === "pomodoro") {
        setSecondsRemaining(pomodoroTime * 60);
      } else if (selectedController === "short break") {
        setSecondsRemaining(shortBreakTime * 60);
      } else if (selectedController === "long break") {
        setSecondsRemaining(longBreakTime * 60);
      }
      setActionText("START");
    }
  };

  return (
    <>
      <button
        className={`${colorChoosed.replace(
          "#",
          "A"
        )} ${actionText} action-text-div`}
        id={actionText}
        style={{ fontFamily: selectedFont }}
        onClick={() => handleAction()}
      >
        {actionText}
      </button>
      <div className="main-div-timer">
        <div className="second-circle">
          <div className="progress-bar">
            <CircularProgressbarWithChildren
              value={((secondsRemaining / progressBarPercentage) * 100).toFixed(
                1
              )}
              strokeWidth={4}
              role="figure"
              styles={{
                path: {
                  stroke: colorChoosed,
                },
                trail: {
                  stroke: "transparent",
                },
              }}
            >
              <div
                className="div-timer"
                style={{
                  fontFamily: selectedFont,
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: fontSizeForFont,
                  textAlign: "center",
                  letterSpacing: letterSpace,
                  color: "#D7E0FF",
                  marginTop: marginValue,
                }}
              >
                <Clock />
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
