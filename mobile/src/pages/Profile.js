import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

// import { Container } from './styles';

function Profile({navigation}) {
   const githubUserName = navigation.getParam('github_username');

   return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${githubUserName}` }} />
}

export default Profile;

