import { SignInButton, useUser } from "@clerk/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) navigate("/dashboard");
  }, [isSignedIn, navigate]);

  return (
    <div style={{ padding: 40 }}>
      <h1>CV Matcher</h1>
      <p>Welcome — please sign in to continue</p>

      <SignInButton>
        <button style={{ padding: 10, marginTop: 20 }}>Sign In</button>
      </SignInButton>
    </div>
  );
}