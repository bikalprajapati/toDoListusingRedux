import React, {ReactNode} from 'react';
import {View, ViewProps} from 'react-native';

interface HomepageProps extends ViewProps {
  children: ReactNode;
}

const Homepage: React.FC<HomepageProps> = ({children, ...props}) => {
  return <View {...props}>{children}</View>;
};

export default Homepage;
