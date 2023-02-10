import * as Styles from "./styles";

export default function Pop() {
  const PopCopy = ({
    position,
    legend,
    value,
  }: {
    position: "tl" | "r" | "l" | "bl";
    legend: string;
    value: string;
  }) => (
    <Styles.Copy position={position}>
      <span className="legend">{legend}</span>
      <span className="value">{value}</span>
    </Styles.Copy>
  );

  const imgSrc1 =
    "https://taikai.azureedge.net/-L7X2A4QktFyFYNqQ_QvQDuehCdP8iFv6qTnb6-KSno/rs:fit:350:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy9mMWJhOWIyMC05MGNjLTExZWQtOWMzOS1kZDY4NGNjMjQwMjBwaG90b18yMDIzLTAxLTEwXzA5LTUyLTE4LmpwZw";
  const imgSrc2 =
    "https://taikai.azureedge.net/aVD53QCf-OgfhtOGy6AQxeTouOPrRAH3wB83cjzM0mw/rs:fit:350:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy8zNGM0YmIyMC03YmEyLTExZWQtYWE1MC0zMWI4Yzc0NGQwMTJsb2dvLnBuZw";
  const imgSrc3 =
    "https://taikai.azureedge.net/LJw8PuMImMgXyDV2laSuZ0P3GBmSVoU5VMDvFVUpZA4/rs:fit:350:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy9jODU5OTc0MC1hMDE3LTExZWQtOTc4NC02YjA5NjY4YTNhMmVDQVNTSU5JIGxvZ28ucG5n";
  const imgSrc4 =
    "https://taikai.azureedge.net/2ZR1b1LQ4CkdiQHVgJpmfkW1K4PTxBGjBW3l8emmOCk/rs:fit:350:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy8wODI2NzM1MC01ZjBiLTExZWQtOGYwZS1jM2VjYTJkZTA0NGZsb2dvLXByb2pldG9zRmluYWlzLWNpdHloYWNrLmpwZw";
  const imgSrc5 =
    "https://taikai.azureedge.net/1QGeqZSyqwQktXVupAwwmpteM1iNNS-Z1xokvkNi-vY/rs:fit:350:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy9lYWZmZTQ0MC01NDU3LTExZWQtODdjNC0wOTg5MGY2N2RhNjNibG9rbmVzcy10Zy5wbmc";

  return (
    <Styles.Wrapper>
      <PopCopy position="tl" legend="Hackathon" value="ETH Porto" />
      <PopCopy
        position="r"
        legend="Project"
        value="Deterministic Encryption and Storage via Snap/IPFS"
      />
      <PopCopy position="l" legend="Position" value="3 / 129" />
      <PopCopy position="bl" legend="Raised" value="13 284 VKAIS" />
      <Styles.Image src={imgSrc1}>
        <div />
        <figure>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </figure>
      </Styles.Image>
      <Styles.LightShadow className="top" />
      <Styles.LightShadow className="bottom" />
    </Styles.Wrapper>
  );
}
