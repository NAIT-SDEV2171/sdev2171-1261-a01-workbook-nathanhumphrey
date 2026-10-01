import { StyleSheet, Text } from 'react-native';

export default function HeaderText({ children }) {
    return <Text>{children}</Text>;
};

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});