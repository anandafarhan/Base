# REACT-NATIVE-TS
  
## 1. Init Project
```  
npx react-native init <ProjectName> --template react-native-template-typescript
```
## 2. Setup code linter & formatter
> install packages to dev-depedencies
- eslint
- prettier
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-react-native
  
```
npm i -D eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native
```
  
## 3. Create eslint config
```
npm init @eslint/config
```
### OR
```
copy .eslintrc.js/json and .prettierrc.js/json
```  
  
# Additional Setup  

## Enabling Proguard
To enable Proguard, edit android/app/build.gradle:
```gradle
/**
 * Run Proguard to shrink the Java bytecode in release builds.
 */
def enableProguardInReleaseBuilds = true
```

## Enabling Hermes
### Android
Edit your android/app/build.gradle file and make the change illustrated below:
```gradle
project.ext.react = [
  entryFile: "index.js",
  enableHermes: true  // clean and rebuild if changing
]
```
Also, if you're using ProGuard, you will need to add these rules in proguard-rules.pro :
```pro
-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.jni.** { *; }
```
Next, if you've already built your app at least once, clean the build:
```
$ cd android && ./gradlew clean
```

### iOS
Since React Native 0.64, Hermes also runs on iOS. To enable Hermes for iOS, edit your ios/Podfile file and make the change illustrated below:
```
use_react_native!(
  :path => config[:reactNativePath],
  # to enable hermes on iOS, change `false` to `true` and then install pods
  :hermes_enabled => true
)
```
Next, install the Hermes pods:
```
cd ios && pod install
```

## Setup Firebase
Install the React Native Firebase "app" module to the root of your React Native project with NPM or Yarn:
```
# Using npm
npm install --save @react-native-firebase/app

# Using Yarn
yarn add @react-native-firebase/app
```

### Android setup
To allow the Android app to securely connect to your Firebase project, a configuration file must be downloaded and added to your project.


**Generating Android credentials**

On the Firebase console, add a new Android application and enter your projects details. The **"Android package name"** must match your local projects package name which can be found inside of the **manifest** tag within the **/android/app/src/main/AndroidManifest.xml** file within your project.


**Generate debug signing certificate**
```
cd android && ./gradlew signingReport
```
Download the google-services.json file and place it inside of your project at the following location: /android/app/google-services.json.


**Configure Firebase with Android credentials**
First, add the **google-services** plugin as a dependency inside of your **/android/build.gradle** file:
```
buildscript {
  dependencies {
    // ... other dependencies
    classpath 'com.google.gms:google-services:4.3.10'
    // Add me --- /\
  }
}
```
Lastly, execute the plugin by adding the following to your **/android/app/build.gradle** file:
```
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services' // <- Add this line
```

### iOS setup
> [Follow this link](https://rnfirebase.io/#3-ios-setup)

## Setup Firebase Cloud Messaging
> [Follow this link](https://rnfirebase.io/messaging/usage)

## Setup Firebase Analytics
> [Follow this link](https://rnfirebase.io/analytics/usage)

## Setup Firebase Crashlytics
> [Follow this link](https://rnfirebase.io/crashlytics/usage)

## Setup Firebase Dynamic-Links
> [Follow this link](https://rnfirebase.io/dynamic-links/usage)