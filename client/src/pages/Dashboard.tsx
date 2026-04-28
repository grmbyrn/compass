import { SignOutButton, useUser } from "@clerk/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const {isSignedIn, isLoaded} = useUser()
  const navigate = useNavigate();

  useEffect(() => {
    if(isLoaded && !isSignedIn){
        navigate('/')
    }
  }, [isSignedIn, isLoaded, navigate])

  if(!isLoaded) return <div>Loading...</div>

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>You are logged in</p>

      <SignOutButton>
        <button style={{ padding: 10 }}>
          Sign Out
        </button>
      </SignOutButton>
    </div>
  );
}