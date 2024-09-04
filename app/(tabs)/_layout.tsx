import { Tabs } from 'expo-router';

export default function HomeLayout() {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home page',
        }}
      />
    </Tabs>
  );
}
