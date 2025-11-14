import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.indiakhel.dharmik',
  appName: 'InstaGuruji - पं संदेश सु. कुलकर्णी',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      androidScaleType: "CENTER_CROP",
      backgroundColor: '#000000',
      showSpinner: true,
      splashFullScreen: false,
      splashImmersive: false
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    },
    PrivacyScreen: {
      enable: false
    }
  },
  server: {
    cleartext: true
  }
};

export default config;
