import * as Styles from "./styles";

export default function Pop({
  hackathon = "ETH Porto",
  project = "Sweatshop",
  vkais = "0",
  position = "1 / 100",
  image = "https://taikai.azureedge.net/-L7X2A4QktFyFYNqQ_QvQDuehCdP8iFv6qTnb6-KSno/rs:fit:350:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy9mMWJhOWIyMC05MGNjLTExZWQtOWMzOS1kZDY4NGNjMjQwMjBwaG90b18yMDIzLTAxLTEwXzA5LTUyLTE4LmpwZw",
}: {
  hackathon: string;
  project?: string;
  vkais?: string;
  position?: string;
  image: string;
}) {
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

  return (
    <Styles.Wrapper>
      <PopCopy position="tl" legend="Hackathon" value={hackathon} />
      <PopCopy position="r" legend="Project" value={project} />
      <PopCopy position="l" legend="Position" value={position} />
      <PopCopy position="bl" legend="Raised" value={`${vkais} VKAIS`} />
      <Styles.Image src={image}>
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
