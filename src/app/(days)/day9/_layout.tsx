import { AuthUser, getCurrentUser } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import { Slot } from "expo-router";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

export default function Day9Layout() {
  const [user, setUser] = useState<AuthUser>();

  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  // const fetchUser = async () => {
  //   const res = await getCurrentUser();
  //   setUser(res);
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  console.log(authStatus);

  return <Slot />;
}
