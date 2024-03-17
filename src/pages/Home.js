import { useEffect } from "react";
import checkVisible from "../functions/checkVisible";

export default function Home() {
  useEffect(() => {
    const downArrow = document.querySelector(".downArrow");
    const counters = document.querySelectorAll(".counter");

    downArrow.addEventListener("click", () => {
      downArrow.scrollIntoView({
        behavior: "smooth",
      });
    });

    window.onscroll = () => {
      let countInterval = 3000;

      counters.forEach((element) => {
        if (!checkVisible(element)) return;
        if (parseInt(element.textContent) !== 0) return;

        let val = parseInt(element.getAttribute("data-val"));
        let i = 0;
        let duration = Math.floor(countInterval / val);

        let counter = setInterval(() => {
          i++;
          element.textContent = i;

          if (i === val) clearInterval(counter);
        }, duration);
      });
    };
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="head">
          <div className="left">
            <h1>SamBot</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              dignissimos, dolores, quidem laboriosam tempore autem voluptas
              consequuntur odio fuga labore adipisci, in asperiores sequi
              impedit.
            </p>
            <div className="buttons">
              <a target="_blank" rel="noreferrer" href="https://dsc.gg/sambot">
                <button>Invite</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dsc.gg/sambot-community"
              >
                <button>Discord</button>
              </a>
              <button>Commands</button>
            </div>
          </div>
          <div className="right">
            <img src="/media/sambot.png" alt="" />
          </div>
        </div>
        <i className="fa-solid fa-circle-chevron-down downArrow"></i>

        <div className="stats">
          <h1>
            <span className="counter" data-val="97">
              000
            </span>{" "}
            Commands
          </h1>
          <h1>
            <span className="counter" data-val="53">
              000
            </span>{" "}
            Servers
          </h1>
          <h1>
            <span className="counter" data-val="496">
              000
            </span>{" "}
            Members
          </h1>
          <h2>And counting...</h2>
        </div>

        <div className="features">
          <div>
            <h1>Economy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              quia cupiditate, inventore reprehenderit repellat incidunt
              voluptatem perferendis, quis nostrum, veniam asperiores illo
              fugiat ea harum.
            </p>
            <i className="fa-solid fa-money-bill eco"></i>
          </div>
          <div>
            <h1>Music</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              quia cupiditate, inventore reprehenderit repellat incidunt
              voluptatem perferendis, quis nostrum, veniam asperiores illo
              fugiat ea harum.
            </p>
            <i className="fa-solid fa-music music"></i>
          </div>
          <div>
            <h1>AI Chatbot</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              quia cupiditate, inventore reprehenderit repellat incidunt
              voluptatem perferendis, quis nostrum, veniam asperiores illo
              fugiat ea harum.
            </p>
            <i className="fa-solid fa-robot chatbot"></i>
          </div>
          <div>
            <h1>And much more!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              quia cupiditate, inventore reprehenderit repellat incidunt
              voluptatem perferendis, quis nostrum, veniam asperiores illo
              fugiat ea harum.
            </p>
            <i className="fa-solid fa-face-grin-squint-tears muchMore"></i>
          </div>
        </div>
      </div>
    </>
  );
}
