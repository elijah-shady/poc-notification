import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'poc-notification',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
