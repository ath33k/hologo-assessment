import React from "react";

export default function Card({ name, experiences, chips, image }) {
  return (
    <div className="flex flex-col gap-1 bg-white p-4 max-w-[360px] rounded-md">
      <div className="m-auto">
        <img src={image} alt="" width={150} />
      </div>
      <div className="flex gap-2 justify-between">
        <div className="flex gap-2">
          {chips?.map((chip, index) => (
            <Chip key={index} name={chip.toUpperCase()} />
          ))}
        </div>
        <span>35%</span>
      </div>
      <div className="mt-4 text-sm">
        <h2 className="bg-gray-300 p-2 w-[200px] rounded-lg mb-2">{name}</h2>
        <h3 className="bg-gray-300 p-2 w-[200px] rounded-lg">{experiences}</h3>
      </div>
      <div className="py-4">
        <p className="pb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut officiis
          ullam eaque odit laudantium deleniti, ut iusto dicta sapiente, quod at
          perspiciatis a tempora ab vel velit voluptas! Vitae, officiis?
        </p>
        <button className="bg-emerald-400 p-1 px-2 rounded-md">Continue</button>
      </div>
    </div>
  );
}

export function Chip({ name }) {
  return (
    <span
      className={`p-1 px-2 rounded-xl text-xs
    ${name == "FREE" ? "bg-blue-200" : ""}
    ${name == "SUBSCRIBED" ? "bg-red-200" : ""}
    ${name == "NEW" ? "bg-cyan-200" : ""}
    `}
    >
      {name}
    </span>
  );
}
