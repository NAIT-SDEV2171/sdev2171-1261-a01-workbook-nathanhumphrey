import { Text, View } from 'react-native';

const NewComp = (props) => {
    return (
        <View>
            <Text>NewComp</Text>
            <Text>{props.children}</Text>
        </View>
    );
};

export default NewComp;
