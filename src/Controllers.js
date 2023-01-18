import { useGlobalContext } from "./context";

function Controllers() {
  const {
    selectedFont,
    selectedController,
    setSelectedController,
    colorChoosed,
    setSecondsRemaining,
    pomodoroTime,
    shortBreakTime,
    longBreakTime,
    setClockStatus,
    setActionText,
    setProgressBarPercentage,
  } = useGlobalContext();

  const changeControllerAndTime = (controllerName) => {
    setSelectedController(controllerName);
    if (controllerName === "pomodoro") {
      setSecondsRemaining(pomodoroTime * 60);
      setProgressBarPercentage(pomodoroTime * 60);
    } else if (controllerName === "short break") {
      setSecondsRemaining(shortBreakTime * 60);
      setProgressBarPercentage(shortBreakTime * 60);
    } else if (controllerName === "long break") {
      setSecondsRemaining(longBreakTime * 60);
      setProgressBarPercentage(longBreakTime * 60);
    }
    setClockStatus("Stopped");
    setActionText("START");
  };
  return (
    <div
      className={`${colorChoosed.replace("#", "A")} controllers-div`}
      role="group"
    >
      <button
        className={selectedController === "pomodoro" ? "button-selected" : ""}
        onClick={() => changeControllerAndTime("pomodoro")}
        style={{ fontFamily: selectedFont }}
        role="application"
      >
        pomodoro
      </button>
      <button
        className={
          selectedController === "short break" ? "button-selected" : ""
        }
        onClick={() => changeControllerAndTime("short break")}
        style={{ fontFamily: selectedFont }}
        role="application"
      >
        short break
      </button>
      <button
        className={selectedController === "long break" ? "button-selected" : ""}
        onClick={() => changeControllerAndTime("long break")}
        style={{ fontFamily: selectedFont }}
        role="application"
      >
        long break
      </button>
    </div>
  );
}

export default Controllers;
