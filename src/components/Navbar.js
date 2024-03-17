import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <h1>
          <Link to="/">SamBot</Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/commands">Commands</Link>
          </li>
          <li>
            <Link to="/status">Status</Link>
          </li>
          <li>
            <Link to="/credits">Credits</Link>
          </li>
          <li id="invite">
            <a target="_blank" rel="noreferrer" href="https://dsc.gg/sambot">
              <button>
                <i class="fa-solid fa-user-plus"></i> Invite
              </button>
            </a>
          </li>
          <li id="discord">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dsc.gg/sambot-community"
            >
              <button>
                <i class="fa-brands fa-discord"></i> Discord
              </button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
