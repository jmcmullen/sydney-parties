import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import cn from "classnames";

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
  const [active, setActive] = useState<Array<string>>([]);

  function isActive(option: string): boolean {
    return active.includes(option);
  }

  function toggleActive(option: string) {
    if (isActive(option)) {
      setActive(active.filter((o) => o !== option));
    } else {
      setActive([...active, option]);
    }
  }

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

      <div className="p-2">
        <h2 className="ml-2">Genres:</h2>
        {GENRES.map((genre) => (
          <button
            key={genre}
            onClick={() => toggleActive(genre)}
            className={cn("filter", { "filter-active": isActive(genre) })}
          >
            {genre}
          </button>
        ))}

        <h2 className="ml-2 mt-4">Venues:</h2>
        {VENUES.map((venue) => (
          <button
            key={venue}
            onClick={() => toggleActive(venue)}
            className={cn("filter", { "filter-active": isActive(venue) })}
          >
            {venue}
          </button>
        ))}

        <h2 className="ml-2 mt-4">Vibes:</h2>
        {VIBES.map((vibe) => (
          <button
            key={vibe}
            onClick={() => toggleActive(vibe)}
            className={cn("filter", { "filter-active": isActive(vibe) })}
          >
            {vibe}
          </button>
        ))}
      </div>
    </div>
  );
}
