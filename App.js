import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  Button,
  ScrollView,
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoalText
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your Course Goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button
          title='Add Goal'
          onPress={addGoalHandler}
        />
      </View>

      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) =>
            <View 
              key={goal}
              style={styles.goalItem}
            >
              <Text style={styles.goalText}>
                {goal}
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
