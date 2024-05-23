import * as React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const PaperCom = () => (
  <Card style={styles.cardstyle}>
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default PaperCom;

const styles = StyleSheet.create({
  cardstyle: {
    paddingHorizontal: 20,
    margin: 15,
  },
});
