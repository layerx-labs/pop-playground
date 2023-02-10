"use client";

import { useState } from "react";
import Form from "./components/form";
import Pop from "./components/pop";
import Select from "./components/select";
import SelectPersona from "./components/select-persona";
import TextField from "./components/text-field";
import { hackathons } from "../data/hackathons";

export default function Home() {
  const [activePersona, setActivePersona] = useState("participant");
  const [hackathon, setHackathon] = useState(0);
  const [hackathonName, setHackathonName] = useState(hackathons[0].name);
  const [hackathonImage, setHackathonImage] = useState(hackathons[0].image);
  const [vkais, setVkais] = useState("13 284");
  const [position, setPosition] = useState("3");
  const [project, setProject] = useState(
    "Deterministic Encryption and Storage via Snap/IPFS"
  );

  const customField = hackathon === hackathons.length;

  function handlePersonaCallback(data: any) {
    setActivePersona(data);
  }

  function handleHackathonCallback(data: number) {
    setHackathon(data);

    if (!customField && data < hackathons.length) {
      setHackathonName(hackathons[data].name);
      setHackathonImage(hackathons[data].image);
    }
  }

  return (
    <>
      <Form
        pop={
          <Pop
            persona={activePersona}
            hackathon={hackathonName}
            project={project}
            vkais={vkais}
            position={position}
            image={hackathonImage}
          />
        }
      >
        <SelectPersona handlePersona={handlePersonaCallback} />
        <Select handleHackathon={handleHackathonCallback} />
        {customField && (
          <>
            <TextField
              label="Name"
              placeholder="e.g., ETH Porto Hackathon 2023"
              value={hackathonName}
              onChange={(value) => {
                setHackathonName(value);
              }}
              disabled={!customField}
            />
            <TextField
              label="Image"
              placeholder="e.g., https://example.com/image.png"
              value={hackathonImage}
              onChange={(value) => {
                setHackathonImage(value);
              }}
            />
          </>
        )}
        {activePersona === "participant" && (
          <>
            <TextField
              label="Project"
              placeholder="e.g., Sweatshop"
              value={project}
              onChange={(value) => {
                setProject(value);
              }}
            />
            <TextField
              label="Position"
              placeholder="e.g., 1 / 100"
              value={position}
              onChange={(value) => {
                setPosition(value);
              }}
            />
          </>
        )}
        {(activePersona === "participant" || activePersona === "jury") && (
          <TextField
            label={activePersona === "participant" ? "Raised" : "Invested"}
            placeholder="e.g., 10 000"
            value={vkais}
            onChange={(value) => {
              setVkais(value);
            }}
          />
        )}
      </Form>
      <footer>
        <span>{`Powered by LayerX © Copyright ${new Date().getFullYear()} — All rights reserved.`}</span>
      </footer>
    </>
  );
}
