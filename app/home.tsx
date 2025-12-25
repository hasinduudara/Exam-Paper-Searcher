import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking, ScrollView, Alert } from 'react-native';

export default function HomeScreen() {
    const [exam, setExam] = useState('A/L'); // Default A/L
    const [year, setYear] = useState('');
    const [subject, setSubject] = useState('');
    const [medium, setMedium] = useState('Sinhala');

    // 2. Search Logic
    const handleSearch = () => {
        if (!year || !subject) {
            Alert.alert("අවධානයයි", "කරුණාකර වර්ෂය සහ විෂය ඇතුලත් කරන්න.");
            return;
        }

        // Google Search Query
        // Query Example: "GCE AL Physics 2023 Sinhala Medium Past Paper"
        const query = `GCE ${exam} ${subject} ${year} ${medium} medium past paper download`;

        // URL encode
        const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

        // Open Link in Browser
        Linking.openURL(googleUrl).catch((err) =>
            Alert.alert("Error", "Browser එක open කිරීමට නොහැක.")
        );
    };

    return (
        <View className="flex-1 bg-gray-50">
            <ScrollView contentContainerStyle={{ padding: 20 }}>

                <Text className="text-2xl font-bold text-gray-800 mb-6">විස්තර තෝරන්න</Text>

                <Text className="text-gray-600 mb-2 font-semibold">විභාගය (Exam)</Text>
                <View className="flex-row mb-4 space-x-4">
                    {['O/L', 'A/L'].map((item) => (
                        <TouchableOpacity
                            key={item}
                            onPress={() => setExam(item)}
                            className={`flex-1 p-3 rounded-lg border ${
                                exam === item ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'
                            }`}
                        >
                            <Text className={`text-center font-bold ${exam === item ? 'text-white' : 'text-gray-700'}`}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Year Input */}
                <Text className="text-gray-600 mb-2 font-semibold">වර්ෂය (Year)</Text>
                <TextInput
                    className="bg-white border border-gray-300 p-4 rounded-lg mb-4 text-lg"
                    placeholder="Ex: 2023"
                    keyboardType="numeric"
                    value={year}
                    onChangeText={setYear}
                />

                {/* Subject Input */}
                <Text className="text-gray-600 mb-2 font-semibold">විෂය (Subject)</Text>
                <TextInput
                    className="bg-white border border-gray-300 p-4 rounded-lg mb-4 text-lg"
                    placeholder="Ex: Science / Physics"
                    value={subject}
                    onChangeText={setSubject}
                />

                {/* Medium Selection */}
                <Text className="text-gray-600 mb-2 font-semibold">මාධ්‍යය (Medium)</Text>
                <View className="flex-row mb-8 justify-between">
                    {['Sinhala', 'English', 'Tamil'].map((item) => (
                        <TouchableOpacity
                            key={item}
                            onPress={() => setMedium(item)}
                            className={`px-4 py-2 rounded-lg border ${
                                medium === item ? 'bg-green-600 border-green-600' : 'bg-white border-gray-300'
                            }`}
                        >
                            <Text className={`font-bold ${medium === item ? 'text-white' : 'text-gray-700'}`}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Search Button */}
                <TouchableOpacity
                    onPress={handleSearch}
                    className="bg-blue-600 p-4 rounded-xl shadow-md active:bg-blue-700"
                >
                    <Text className="text-white text-center font-bold text-xl">
                        Search Paper
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}