import { ImageBackground, StatusBar } from 'react-native';

import { styles } from './styles';

import backgroundImg from '../../assets/background-galaxy.png';

interface Props {
  children: React.ReactNode
}

export function Background({ children }: Props) {
  return (
    <ImageBackground style={styles.container} source={backgroundImg} defaultSource={backgroundImg }>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
      {children}
    </ImageBackground>
  );
}