import { Image, Text, View, ViewStyle } from "react-native";
import apartments from "@assets/data/day5/data.json";
import styles from "./styles";

type ApartmentListItem = {
  apartment: (typeof apartments)[0];
  containerStyle?: ViewStyle;
};

const ApartmentListItem = ({
  apartment,
  containerStyle,
}: ApartmentListItem) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: apartment.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{apartment.title}</Text>
        <Text style={styles.description}>
          Stay at this apartment for an affordable price
        </Text>
        <View style={styles.rightPanelFooter}>
          <Text style={styles.price}>${apartment.price}/night</Text>
          <Text style={styles.price}>
            ★{apartment.rating} ({apartment.numberOfStars})
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ApartmentListItem;
