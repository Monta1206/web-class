import { Text, View, StyleSheet } from "react-native";
import ItemCard from '@/components/ItemCard';
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Lost & Found</Text>
      <ItemCard title="Blue water bottle" place="Library, 2nd floor" />
      <ItemCard title="Student card" place="Cafeteria" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
