import { useState } from "react";
import "./App.css";
import yesSound from './assets/yesSound.mp3';


function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    const audio = new Audio(yesSound);
    audio.play();
    setYesPressed(true);
  };
  

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl font-bold my-4">Ok yay I love you!!!</div>
          <div className="text-4xl font-bold my-4">💖🦂💖</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="./src/assets/eee.gif"
            // src="https://media1.tenor.com/m/NSYrfjICse0AAAAC/come-here-cute.gif"
          />
          <div className="text-3xl my-4">Will you be my Valentine?</div>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                handleYesClick();
                setYesPressed(true);
              }}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
