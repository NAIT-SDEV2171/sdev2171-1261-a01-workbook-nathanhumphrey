import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View>
          <Image style={styles.appImage} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
          <Text style={styles.title}>Application Name</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.card.title}>Card Title</Text>
          <Text style={styles.card.body}>Card body text</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.card.title}>Card Title</Text>
          <Text style={styles.card.body}>Card body text</Text>
          <TextInput
            defaultValue="A new text input component."
            multiline
            style={styles.textInput}
            placeholder="Type whatever you like here"
            placeholderTextColor="grey"></TextInput>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
