import { useAuth } from "../../../app/hooks/useAuth";
import { Button } from "../../components/Button";

export default function Register() {
  const { signout } = useAuth();
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Button onClick={signout}></Button>
    </div>
  );
}
