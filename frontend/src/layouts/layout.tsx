import React from "react";

export default function Layout() {
  return (
    <section className="max-w-5xl p-4">
      <ul className="flex flex-col gap-2">
        {["item 1", "item 2", "item 3"].map((item) => {
          return (
            <li className="p-2 border" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
}