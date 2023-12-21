import { Marker } from "react-native-maps";
import { Text, View } from "react-native";
import styles from "./styles";

const CustomMarker = ({ apartment, onPress }) => {
  return (
    <Marker
      onPress={onPress}
      key={apartment.id}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <View style={styles.container}>
        <Text style={{ fontFamily: "InterBold" }}>${apartment.price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
