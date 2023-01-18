import { useGlobalContext } from "./context";
import iconClose from "./assets/icon-close.svg";
import arrowUp from "./assets/icon-arrow-up.svg";
import arrowDown from "./assets/icon-arrow-down.svg";

function Modal() {
  const {
    isModalOpen,
    setIsModalOpen,
    colorChoosed,
    selectedFont,
    pomodoroTime,
    shortBreakTime,
    longBreakTime,
    setPomodoroTime,
    setShortBreakTime,
    setLongBreakTime,
    setSelectedFont,
    setColorChoosed,
    selectedController,
    setSecondsRemaining,
    setClockStatus,
    setActionText,
    setProgressBarPercentage,
  } = useGlobalContext();

  const applyTimesAndCloseModal = () => {
    if (selectedController === "pomodoro") {
      setSecondsRemaining(pomodoroTime * 60);
      setProgressBarPercentage(pomodoroTime * 60);
    } else if (selectedController === "short break") {
      setSecondsRemaining(shortBreakTime * 60);
      setProgressBarPercentage(shortBreakTime * 60);
    } else if (selectedController === "long break") {
      setSecondsRemaining(longBreakTime * 60);
      setProgressBarPercentage(longBreakTime * 60);
    }
    setClockStatus("Stopped");
    setActionText("START");
    setIsModalOpen(false);
  };
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
      onClick={() => setIsModalOpen(false)}
    >
      <main className="modal-container" onClick={(e) => e.stopPropagation()}>
        <header className="header-modal">
          <h2 style={{ fontFamily: selectedFont }}>Settings</h2>
          <img
            className="closing-icon"
            src={iconClose}
            onClick={() => {
              setIsModalOpen(false);
            }}
            alt="closing-icon"
          />
        </header>

        <section>
          <div className="main-div-modal">
            <p
              style={{ fontFamily: selectedFont }}
              className="subtitle-modal main-title"
            >
              TIME (MINUTES)
            </p>
            {/* start widgets */}
            <div
              className="div-controllers-modal"
              style={{ fontFamily: selectedFont }}
            >
              <div>
                <h5>pomodoro</h5>
                <input
                  className="input-number-modal"
                  type="number"
                  min="1"
                  max="60"
                  value={pomodoroTime}
                  style={{ fontFamily: selectedFont }}
                  readOnly
                />
                <div className="arrows-input-div">
                  <img
                    className={pomodoroTime === 60 ? "dissapear" : ""}
                    src={arrowUp}
                    alt="arrow-up"
                    onClick={() => setPomodoroTime(pomodoroTime + 1)}
                  />
                  <img
                    className={pomodoroTime === 1 ? "dissapear" : ""}
                    src={arrowDown}
                    alt="arrow-down"
                    onClick={() => setPomodoroTime(pomodoroTime - 1)}
                  />
                </div>
              </div>

              <div>
                <h5>short break</h5>
                <input
                  className="input-number-modal"
                  type="number"
                  min="1"
                  max="99"
                  step="1"
                  value={shortBreakTime}
                  style={{ fontFamily: selectedFont }}
                  readOnly
                />
                <div className="arrows-input-div">
                  <img
                    className={shortBreakTime === 60 ? "dissapear" : ""}
                    src={arrowUp}
                    alt="arrow-up"
                    onClick={() => setShortBreakTime(shortBreakTime + 1)}
                  />
                  <img
                    className={shortBreakTime === 1 ? "dissapear" : ""}
                    src={arrowDown}
                    alt="arrow-down"
                    onClick={() => setShortBreakTime(shortBreakTime - 1)}
                  />
                </div>
              </div>

              <div>
                <h5>long break</h5>
                <input
                  className="input-number-modal"
                  type="number"
                  min="1"
                  max="99"
                  step="1"
                  value={longBreakTime}
                  style={{ fontFamily: selectedFont }}
                  readOnly
                />
                <div className="arrows-input-div">
                  <img
                    className={longBreakTime === 60 ? "dissapear" : ""}
                    src={arrowUp}
                    alt="arrow-up"
                    onClick={() => setLongBreakTime(longBreakTime + 1)}
                  />
                  <img
                    className={longBreakTime === 1 ? "dissapear" : ""}
                    src={arrowDown}
                    alt="arrow-down"
                    onClick={() => setLongBreakTime(longBreakTime - 1)}
                  />
                </div>
              </div>
            </div>

            <div className="sub-div border-bottom">
              <p
                className="subtitle-modal"
                style={{ fontFamily: selectedFont }}
              >
                FONT
              </p>
              <div className="sub-div-buttons">
                <button
                  className={selectedFont === "Kumbh Sans" ? "selected" : ""}
                  onClick={() => setSelectedFont("Kumbh Sans")}
                >
                  Aa
                </button>
                <button
                  className={selectedFont === "Roboto Slab" ? "selected" : ""}
                  style={{ fontFamily: "Roboto Slab" }}
                  onClick={() => setSelectedFont("Roboto Slab")}
                >
                  Aa
                </button>
                <button
                  className={selectedFont === "Space Mono" ? "selected" : ""}
                  style={{ fontFamily: "Space Mono" }}
                  onClick={() => setSelectedFont("Space Mono")}
                >
                  Aa
                </button>
              </div>
            </div>
            <div className="sub-div">
              <p
                className="subtitle-modal"
                style={{ fontFamily: selectedFont }}
              >
                COLOR
              </p>
              <div className="sub-div-buttons color-selector">
                <button onClick={() => setColorChoosed("#F87070")}>
                  <span
                    className={
                      colorChoosed === "#F87070"
                        ? "material-icons-two-tone"
                        : "dissapear"
                    }
                  >
                    check
                  </span>
                </button>
                <button onClick={() => setColorChoosed("#70F3F8")}>
                  <span
                    className={
                      colorChoosed === "#70F3F8"
                        ? "material-icons-two-tone"
                        : "dissapear"
                    }
                  >
                    check
                  </span>
                </button>
                <button onClick={() => setColorChoosed("#D881F8")}>
                  <span
                    className={
                      colorChoosed === "#D881F8"
                        ? "material-icons-two-tone"
                        : "dissapear"
                    }
                  >
                    check
                  </span>
                </button>
              </div>
            </div>
          </div>
          <button
            className="apply-button"
            style={{ backgroundColor: colorChoosed, fontFamily: selectedFont }}
            onClick={() => applyTimesAndCloseModal()}
          >
            Apply
          </button>
        </section>
      </main>
    </div>
  );
}

export default Modal;
