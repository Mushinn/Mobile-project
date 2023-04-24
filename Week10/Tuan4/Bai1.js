import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Status from './Status';



export default function App() {
  return (
   <><Status anh='anh-anime-nam-21.jpg' ten='Status' like='Số Like' />
   <Status anh='anh-anime-dep.jpg' ten=' Hôm nay trời đệp quá' like='123123 Likes - 34123 heart' />
   <Status anh='Hinh-anh-anime-ngau.jpg' ten='Hhihi' like='123123 Likes - 0 heart' /></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
