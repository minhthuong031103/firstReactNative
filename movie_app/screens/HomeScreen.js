import {View, Text, SafeAreaView, Platform} from 'react-native';
import React from 'react';

const ios = Platform.OS == 'ios';
export default function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={`${ios ? '-mb-2' : 'mb-3'}`}>
        <View>
          <Text>Hell</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
