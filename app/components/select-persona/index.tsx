import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";

const personas = [
  { id: "participant", enabled: true },
  { id: "jury", enabled: true },
  { id: "mentor", enabled: true },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectPersona({ handlePersona }: any) {
  const [mem, setMem] = useState(personas[0]);

  useEffect(() => {
    handlePersona(mem.id);
  }, [mem]);

  return (
    <RadioGroup value={mem} onChange={setMem} className="select-persona">
      <RadioGroup.Label className="sr-only">
        {" "}
        Choose a memory option{" "}
      </RadioGroup.Label>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {personas.map((type) => (
          <RadioGroup.Option
            key={type.id}
            value={type}
            className={({ active, checked }) =>
              classNames(
                type.enabled
                  ? "cursor-pointer focus:outline-none"
                  : "opacity-25 cursor-not-allowed",
                active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                checked
                  ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                  : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1"
              )
            }
            disabled={!type.enabled}
          >
            <RadioGroup.Label as="span" className="capitalize">
              {type.id}
            </RadioGroup.Label>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
