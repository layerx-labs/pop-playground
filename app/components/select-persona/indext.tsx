import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const memoryOptions = [
  { name: "Participant" },
  { name: "Jury" },
  { name: "Mentor" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectPersona() {
  const [mem, setMem] = useState(memoryOptions[0]);

  return (
    <RadioGroup value={mem} onChange={setMem} className="select-persona">
      <RadioGroup.Label className="sr-only">
        {" "}
        Choose a memory option{" "}
      </RadioGroup.Label>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {memoryOptions.map((option) => (
          <RadioGroup.Option
            key={option.name}
            value={option}
            className={({ active, checked }) =>
              classNames(
                "cursor-pointer focus:outline-none",
                active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                checked
                  ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                  : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1"
              )
            }
          >
            <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
