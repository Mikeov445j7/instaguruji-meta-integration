# InstaGuruji App - Meta Audience Network Integration

Complete Ionic Framework application with Meta Audience Network SDK integration for Android monetization.

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone <your-repository-url>
   cd instaguruji-app
   npm install
   ```

2. **Build and Run**
   ```bash
   ionic build
   npx cap sync android
   npx cap run android
   ```

## 📱 Features

- ✅ Ionic 7 + Angular 16 hybrid mobile app
- ✅ Meta Audience Network SDK v6.17.0 integration
- ✅ Native Android banner ads implementation
- ✅ Complete source code with client configurations
- ✅ Ready-to-build project structure

## � Tech Stack

- **Ionic Framework 7** - Hybrid mobile framework
- **Angular 16** - Frontend framework  
- **Capacitor 5** - Native bridge
- **Meta Audience Network SDK 6.17.0** - Ad monetization

## 📊 Meta Ads Configuration

- **App ID**: `1436148827638924`
- **Placement ID**: `1436148827638924_1436151597638647`
- **Banner Format**: 320x50px (bottom screen placement)
- **Auto Refresh**: 30 seconds interval

## 🔧 Development Commands

### Install Dependencies
```bash
npm install
```

### Development Build
```bash
ionic build
npx cap sync android
npx cap run android
```

### Production Build
```bash
ionic build --prod
npx cap sync android
cd android && ./gradlew assembleRelease
```

### Open in Android Studio
```bash
npx cap open android
```

## � Project Structure

```
├── src/                          # Ionic/Angular source code
│   ├── app/                      # Main application components
│   ├── assets/                   # Static assets
│   └── environments/             # Environment configurations
├── android/                      # Android native platform
│   ├── app/src/main/java/        # Native Java code (MainActivity.java)
│   ├── app/google-services.json  # Firebase configuration
│   └── app/build.gradle          # Android build configuration
├── ios/                          # iOS platform (basic setup)
├── publish/                      # Signing certificates and keystore
├── capacitor.config.ts           # Capacitor configuration
└── package.json                  # Node.js dependencies
```

## 🔧 Key Implementation Files

- **`android/app/src/main/java/MainActivity.java`** - Meta SDK integration and banner implementation
- **`android/app/google-services.json`** - Firebase/Google Services configuration  
- **`publish/keystore.jks`** - App signing keystore for releases
- **`capacitor.config.ts`** - Native bridge configuration

## ✅ Testing Meta Ads

1. **Run on Android device/emulator**
2. **Check banner appears** at bottom of main screen
3. **Verify logs** for "InstaGuruji_MetaAds" tag messages
4. **Test ad events**: Loading, clicking, error handling

Expected log messages:
- `"Meta banner loaded successfully"`
- `"Meta banner clicked"`
- `"Meta banner failed to load"`

## 📋 Requirements

- **Node.js 16+**
- **Android Studio**
- **Java 11+**
- **Ionic CLI**: `npm install -g @ionic/cli`
- **Capacitor CLI**: `npm install -g @capacitor/cli`

## 🎯 Production Ready

This project includes all necessary files for immediate development and production deployment:

✅ **Complete source code**  
✅ **Client configuration files included**  
✅ **Meta SDK properly integrated**  
✅ **Build scripts configured**  
✅ **Signing certificates included**  

---
**Status**: Production Ready ✅ | **SDK Version**: Meta Audience Network v6.17.0 | **Last Updated**: November 2024