import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const personas = [
  { name: "Participant", inStock: true },
  { name: "Jury", inStock: false },
  { name: "Mentor", inStock: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectPersona() {
  const [mem, setMem] = useState(personas[0]);

  return (
    <RadioGroup value={mem} onChange={setMem} className="select-persona">
      <RadioGroup.Label className="sr-only">
        {" "}
        Choose a memory option{" "}
      </RadioGroup.Label>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {personas.map((type) => (
          <RadioGroup.Option
            key={type.name}
            value={type}
            className={({ active, checked }) =>
              classNames(
                type.inStock
                  ? "cursor-pointer focus:outline-none"
                  : "opacity-25 cursor-not-allowed",
                active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                checked
                  ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                  : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1"
              )
            }
          >
            <RadioGroup.Label as="span">{type.name}</RadioGroup.Label>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
