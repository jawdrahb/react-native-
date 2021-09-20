import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = React.useState('');
  const [courseGoals, setCourseGoals] = React.useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = async () => {
    await setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    await setEnteredGoal('');
  }

  return (
    <View style={styles.root}>
      <View style={styles.containerRow}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD MORE" onPress={addGoalHandler} />
      </View>
      <View>
        {
          courseGoals && courseGoals.map((goal, index) =>
            <View key={`goal-${index}`} style={styles.listItem}>
              <Text >
                {goal}
              </Text>
            </View>
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 60,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: '#888',
    borderWidth: 1,
  }
});
