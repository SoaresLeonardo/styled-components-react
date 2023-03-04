import { StyledButton } from "./components/Button.style";
import { Wrapper } from "./components/Wrapper.style";

export default function App() {
  return (
    <Wrapper>
      <StyledButton onClick={() => console.log("Test")}>Meu app</StyledButton>;
      <a href="#">Clique aqui</a>
    </Wrapper>
  );
}
