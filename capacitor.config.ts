import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Test',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.8:8100',
    cleartext: true
  },
};

export default config;
