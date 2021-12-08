import { VscClose } from "react-icons/vsc";

export const GENRES = [
  "Minimal",
  "House",
  "Deep House",
  "Tech House",
  "Disco",
  "Techno",
  "Melodic Techno",
];

export const VENUES = [
  "BAR",
  "CLUB",
  "WAREHOUSE",
  "CRUISE",
  "SECRET",
  "FOREST",
  "BEACH",
  "FESTIVAL",
];

export const VIBES = [
  "BYO",
  "BAR",
  "FREE ENTRY",
  "INTERNATIONAL ARTIST",
  "CASH ONLY",
];

export default function Preferences() {
  return (
    <div className="drawer-content">
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="flex-none">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-ghost drawer-button"
          >
            <VscClose size="2.4em" />
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <span className="text-lg font-bold">Preferences</span>
        </div>
      </div>

      <div className="px-2 py-2">
        <h2 className="">GENRES:</h2>
        {GENRES.map((genre) => (
          <button className="btn btn-outline m2 mr-2 ml-2 px-2 mx-2 m-2 my-2">
            {genre}
          </button>
        ))}

        <h2 className="">GENRES:</h2>
        {VENUES.map((venue) => (
          <button className="btn btn-outline m2 mr-2 ml-2 px-2 mx-2 m-2 my-2">
            {venue}
          </button>
        ))}

        <h2 className="">VIBES:</h2>
        {VIBES.map((vibe) => (
          <button className="btn btn-outline m2 mr-2 ml-2 px-2 mx-2 m-2 my-2">
            {vibe}
          </button>
        ))}
      </div>
    </div>
  );
}
