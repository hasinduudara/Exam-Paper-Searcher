import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import "../global.css"

export default function WelcomeScreen() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-white items-center justify-center p-5">
            <View className="items-center mb-10">
                <Text className="text-3xl font-bold text-blue-600 mb-2">Paper Finder LK</Text>
                <Text className="text-gray-500 text-center">
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => router.push('/home')}
                className="bg-blue-600 px-10 py-4 rounded-full shadow-lg"
            >
                <Text className="text-white font-bold text-lg">Start Now</Text>
            </TouchableOpacity>
        </View>
    );
}