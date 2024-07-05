// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';

const Stack = createStackNavigator();

const stories = [
    { id: '1', title: 'Cinderella' },
    { id: '2', title: 'Sleeping Beauty' },
    { id: '3', title: 'Snow White' },
];

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Story', { storyId: item.id })}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const storiesContent = {
    '1': 'Once upon a time, there was a girl named Cinderella...',
    '2': 'Once upon a time, there was a beautiful princess who was cursed to sleep forever...',
    '3': 'Once upon a time, there was a girl named Snow White who had skin as white as snow...',
};

const StoryScreen = ({ route }) => {
    const { storyId } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.content}>{storiesContent[storyId]}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
    },
    content: {
        fontSize: 16,
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Fairy Tales' }} />
                <Stack.Screen name="Story" component={StoryScreen} options={{ title: 'Story' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}