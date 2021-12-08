import { GiSettingsKnobs } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="navbar drawer-content mb-2 shadow-lg bg-neutral text-neutral-content">
      <div className="flex-none">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost drawer-button"
        >
          <GiSettingsKnobs size="2em" />
        </label>
      </div>
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">Sydney Parties</span>
      </div>
    </div>
  );
}
