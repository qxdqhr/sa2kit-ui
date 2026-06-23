import { PropsWithChildren } from 'react';
import { useLaunch } from '@tarojs/taro';
import '@sa2kit-ui/theme-animal-island/theme.mobile.css';
import './app.css';

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log('demo-taro launched');
  });

  return children;
}

export default App;
