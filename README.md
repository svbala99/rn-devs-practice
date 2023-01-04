# React Native 2023 - Practice

### A react native android / ios application with simple boilerplate code

## Features

- Axios for network call
- Redux saga for state management
- React Navigation
- Reactotron for redux viewer tool
- Redux persist for state rehydration
- folder structure and naming conventions followed
- Latest RN 2023 Version
- Husky and commitlint for proper linting and git commit hook

## Technology

- React Native : For Cross platform mobile app development
- Node JS: For runtime environment
- Javascript : For application development
- Linting: eslint
- Test: Jest compatible

##### Download the repo and install dependencies

```sh
git clone git@github.com:svbala99/rn-devs-practice.git
cd rn-devs-practice
npm i (or) yarn
```

##### Start the development server

```sh
npm start (or) yarn start
```

##### Install the app first time in Android (in Dev mode)

- Connect any Android device with USB
- Enable USB debugging in the device
- Accept to INSTALL the app when prompted during the deployment
- This command is not needed for subsequent changes made in project
- Whenever you include any package that impacts Android native, reinstall the app by issuing this command
- Alternatively the same can be achieved from Android Studio IDE by clicking "Run" button after opening "Android" project in it
- Supported Machines: Windows / Linux / Mac

```sh
npm run android (or) yarn android
```

##### Install the app first time in iPhones (iOS) - Dev mode

- Connect any Android device with USB
- Enable USB debugging in the device
- Accept to INSTALL the app when prompted during the deployment
- This command is not needed for subsequent changes made in project
- Whenever you include any package that impacts Android native, reinstall the app by issuing this command
- Alternatively the same can be achieved from Xcode IDE by clicking "Build" & "Run" button after opening "iOS" folder in it
- Supported Machines: Mac only

```sh
cd ios && pod install && cd ..
npm run ios (or) yarn ios
```

## To generate Android APK

```bash
gradlew assembleRelease (APK file)
gradlew bundleRelease (AAB file)
```

- For more details: https://reactnative.dev/docs/signed-apk-android
  Note: If you run in Linux, issue ./gradlew instead of gradlew

## Output file location

You will find the APK file in:

```bash
~PROJECT_LOCATION\android\app\build\outputs\apk\release
```

## Install the released APK

```bash
adb install app-release.apk
```

## Packages used

| Package          | Version |
| ---------------- | ------- |
| React            | 18      |
| React Native     | 0.70    |
| React Navigation | 6       |

[![GithubFollow @svbala99](https://img.shields.io/github/last-commit/svbala99/rn-devs-practice?)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/license/svbala99/rn-devs-practice?color=blue)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/languages/count/svbala99/rn-devs-practice?color=orange)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/languages/top/svbala99/rn-devs-practice?color=blueviolet)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/search/svbala99/rn-devs-practice/master?color=lightgrey)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/languages/code-size/svbala99/rn-devs-practice?color=pink)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/repo-size/svbala99/rn-devs-practice)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/issues/svbala99/rn-devs-practiceo?color=%2362DBAE%20)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/followers/svbala99?style=social)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/commit-activity/m/svbala99/rn-devs-practice?color=%23DB62B2%20)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/contributors/svbala99/rn-devs-practice)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/date/1672824419)](https://github.com/svbala99/)
