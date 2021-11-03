import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebaseClient from "../firebase/firebaseClient";

function SignInScreen() {
  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebaseClient.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  // console.log(`provider_id is ${firebase.auth.GoogleAuthProvider.PROVIDER_ID}`);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebaseClient.auth()}
      />
    </div>
  );
}

export default SignInScreen;
