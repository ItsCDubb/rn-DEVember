import { createContext, PropsWithChildren, useContext, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { Alert } from "react-native";

type BiometricsContext = {
  isUnlocked: boolean;
  authenticate: () => Promise<void>;
};

export const useBiometrics = () => useContext(BiometricsContext);

const BiometricsContext = createContext<BiometricsContext>({
  isUnlocked: false,
  authenticate: async () => {},
});

const BiometricsProvider = ({ children }: PropsWithChildren) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const authenticate = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();

    if (!hasHardware) {
      Alert.alert("Not Supported");
      setIsUnlocked(true);
      return;
    }

    const res = await LocalAuthentication.authenticateAsync();
    console.log(res);
    if (res.success) {
      setIsUnlocked(true);
    }
  };

  return (
    <BiometricsContext.Provider value={{ isUnlocked, authenticate }}>
      {children}
    </BiometricsContext.Provider>
  );
};

export default BiometricsProvider;
