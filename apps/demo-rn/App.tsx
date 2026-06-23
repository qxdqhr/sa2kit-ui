import { StatusBar } from 'expo-status-bar';
import '@sa2kit-ui/theme-animal-island/theme.mobile.css';
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
