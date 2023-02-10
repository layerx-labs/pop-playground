import * as Styles from "./styles";

export default function Form({
  children,
  pop,
}: {
  children: React.ReactNode;
  pop: React.ReactNode;
}) {
  return (
    <Styles.Wrapper>
      <div>{children}</div>
      <div>{pop}</div>
    </Styles.Wrapper>
  );
}
