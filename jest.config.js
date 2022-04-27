module.exports = {
    "preset": "react-native",
    "setupFiles": [
        "./node_modules/react-native-gesture-handler/jestSetup.js",
        "./setupTest.js"
    ],
    "setupFilesAfterEnv": [
        "@testing-library/jest-native/extend-expect"
    ],
    "transformIgnorePatterns": [
        'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
    ]
}