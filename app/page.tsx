"use client";

import { useState } from "react";
import Form from "./components/form";
import Pop from "./components/pop";
import SelectPersona from "./components/select-persona";
import TextField from "./components/text-field";

export default function Home() {
  const [hackathon, setHackathon] = useState("ETH Porto");
  const [project, setProject] = useState(
    "Deterministic Encryption and Storage via Snap/IPFS"
  );
  const [vkais, setVkais] = useState("13 284");
  const [position, setPosition] = useState("3 / 129");
  const [image, setImage] = useState(
    "https://taikai.azureedge.net/-L7X2A4QktFyFYNqQ_QvQDuehCdP8iFv6qTnb6-KSno/rs:fit:350:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy9mMWJhOWIyMC05MGNjLTExZWQtOWMzOS1kZDY4NGNjMjQwMjBwaG90b18yMDIzLTAxLTEwXzA5LTUyLTE4LmpwZw"
  );

  return (
    <Form
      pop={
        <Pop
          hackathon={hackathon}
          project={project}
          vkais={vkais}
          position={position}
          image={image}
        />
      }
    >
      <SelectPersona />
      <TextField
        label="Hackathon"
        placeholder="ETH Porto"
        value={hackathon}
        onChange={(value) => {
          setHackathon(value);
        }}
      />
      <TextField
        label="Project"
        placeholder="Sweatshop"
        value={project}
        onChange={(value) => {
          setProject(value);
        }}
      />
      <TextField
        label="Raised"
        placeholder="10 000 KAIS"
        value={vkais}
        onChange={(value) => {
          setVkais(value);
        }}
      />
      <TextField
        label="Position"
        placeholder="1 / 100"
        value={position}
        onChange={(value) => {
          setPosition(value);
        }}
      />
      <TextField
        label="Image"
        placeholder="https://example.com/image.png"
        value={image}
        onChange={(value) => {
          setImage(value);
        }}
      />
    </Form>
  );
}
