import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Your Course Goal'
        style={styles.textInput}
        onChangeText={props.goalInputHandler}
      />
      <Button
        title='Add Goal'
        onPress={props.addGoalHandler}
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 10,
    padding: 8,
  },
});