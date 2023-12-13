import { Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Stack } from "expo-router";
import apartments from "@assets/data/day5/data.json";
import CustomMarker from "@/components/day5/CustomMarker";
import ApartmentListItem from "@/components/day5/ApartmentListItem";
import { useMemo, useState } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import styles from "./styles";

export default function MapScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // variables
  const snapPoints = useMemo(() => [80, "50%", "90%"], []);
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        provider={PROVIDER_GOOGLE}
        // initialRegion={mapRegion}
        region={mapRegion}
        style={styles.map}
      >
        {apartments.map((apartment) => (
          <CustomMarker
            key={apartment.id}
            apartment={apartment}
            onPress={() => setSelectedApartment(apartment)}
          />
        ))}
      </MapView>
      {/* Display Selected Apartment */}
      {selectedApartment && (
        <ApartmentListItem
          apartment={selectedApartment}
          containerStyle={{
            position: "absolute",
            left: 10,
            right: 10,
            bottom:
              typeof snapPoints[0] === "number" ? snapPoints[0] + 10 : 100,
          }}
        />
      )}
      <BottomSheet index={0} snapPoints={snapPoints}>
        <View style={{ flex: 1 }}>
          <Text style={styles.listTitle}>Over {apartments.length} places</Text>
          <BottomSheetFlatList
            data={apartments}
            renderItem={({ item }) => <ApartmentListItem apartment={item} />}
            contentContainerStyle={{ gap: 10, padding: 10 }}
          />
        </View>
      </BottomSheet>
    </View>
  );
}
