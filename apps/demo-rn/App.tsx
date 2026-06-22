import { StatusBar } from 'expo-status-bar';
import Showcase from './src/Showcase';
import './global.css';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Showcase />
    </>
  );
}
