import { useState } from "react";
import RobotFace, { Emotion } from "./RobotFace";

import RobotColor from "./assets/robot_color.svg";
import RobotFlat from "./assets/robot_flat.svg";
import RobotHighContrast from "./assets/robot_high_contrast.svg";
import RobotTwemoji from "./assets/twemoji.svg";
import RobotNoto from "./assets/noto.svg";

import "./App.css";

function App() {
  const emotions: Emotion[] = ["disappointed", "neutral", "excited"];
  const [emotion, setEmotion] = useState<Emotion>("neutral");

  const emojiImages = [
    { name: "Microsoft Fluent Emoji", variant: "Color", img: RobotColor },
    { name: "Microsoft Fluent Emoji", variant: "Flat", img: RobotFlat },
    {
      name: "Microsoft Fluent Emoji",
      variant: "High Contrast",
      img: RobotHighContrast,
    },
    { name: "Twitter Twemoji", img: RobotTwemoji },
    { name: "Google Noto Emoji", img: RobotNoto },
  ];

  return (
    <div className="App">
      <div className="gallery">
        {emojiImages.map((emoji) => {
          let title = emoji.name;
          if (emoji.variant) {
            title += " - " + emoji.variant;
          }
          return (
            <figure className="card">
              <img
                key={emoji.name + emoji.variant}
                alt={title}
                title={title}
                src={emoji.img}
                height={200}
                width={200}
              />
              <figcaption>
                {emoji.name}
                {emoji.variant && (
                  <>
                    <br />
                    {emoji.variant}
                  </>
                )}
              </figcaption>
            </figure>
          );
        })}
      </div>
      <p>
        More on{" "}
        <a
          href="https://emojipedia.org/robot#designs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emojipedia
        </a>
        ...
      </p>
      <div className="demo">
        <RobotFace emotion={emotion} />
        <div className="controls">
          {emotions.map((e) => (
            <button
              type="button"
              key={e}
              onClick={() => {
                setEmotion(e);
              }}
              className={e === emotion ? "active" : ""}
            >
              {e}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
