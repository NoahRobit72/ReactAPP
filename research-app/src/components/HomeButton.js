import { useNavigate } from "react-router-dom";

export function HomeButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}