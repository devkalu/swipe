import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

import Deck from "./src/Deck";
import { DATA } from "./src/data";
import { Card, Button } from "react-native-elements";

const renderCard = (item) => {
  return (
    <Card key={item.id} image={{ uri: item.uri }}>
      <Card.Title>{item.text}</Card.Title>
      <View key={item.id}>
        <Image
          source={{ uri: item.uri }}
          style={{ height: 200 }}
          resizeMode="contain"
        />
      </View>
      <Text style={{ marginBottom: 10 }}>Test Content</Text>
      <Button
        icon={{ name: "code" }}
        backgroundColor="#03A9F4"
        title="View Now"
      />
    </Card>
  );
};

const renderNoMoreCards = () => {
  return (
    <Card>
      <Text style={{ marginBottom: 10 }}>All Done No More Cards to Show</Text>
    </Card>
  );
};
export default function App() {
  return (
    <ScrollView>
      <Deck
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
