"use client";

import Form from "./components/form";
import Pop from "./components/pop";
import SelectPersona from "./components/select-persona/indext";
import TextField from "./components/text-field";

export default function Home() {
  return (
    <Form pop={<Pop />}>
      <SelectPersona />
      <TextField
        label="Hackathon"
        placeholder="ETH Porto"
        value="ETH Porto"
        onChange={() => {}}
      />
      <TextField
        label="Project"
        placeholder="Sweatshop"
        value="Deterministic Encryption and Storage via Snap/IPFS"
        onChange={() => {}}
      />
      <TextField
        label="Raised"
        placeholder="10 000 KAIS"
        value="13 284 KAIS"
        onChange={() => {}}
      />
      <TextField
        label="Position"
        placeholder="1 / 100"
        value="3 / 129"
        onChange={() => {}}
      />
      <TextField
        label="Image"
        placeholder="https://example.com/image.png"
        value="https://taikai.azureedge.net/-L7X2A4QktFyFYNqQ_QvQDuehCdP8iFv6qTnb6-KSno/rs:fit:350:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy9mMWJhOWIyMC05MGNjLTExZWQtOWMzOS1kZDY4NGNjMjQwMjBwaG90b18yMDIzLTAxLTEwXzA5LTUyLTE4LmpwZw"
        onChange={() => {}}
      />
    </Form>
  );
}
