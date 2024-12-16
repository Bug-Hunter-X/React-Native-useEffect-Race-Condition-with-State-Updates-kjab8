# React Native useEffect Race Condition

This repository demonstrates a common race condition that can occur when using the `useEffect` hook in React Native. The issue arises when a state variable is updated within an asynchronous operation, and the component re-renders before the state update is reflected. 

## Bug Description
The provided `bug.js` file shows an example where fetching data leads to a race condition, causing the UI to display stale data or crash due to undefined values.

## Solution
The `bugSolution.js` file demonstrates a solution using the `useRef` hook to manage the asynchronous operation's state and ensuring the component uses the latest data during rendering.

## How to reproduce

1. Clone the repository.
2. Navigate to the directory using your terminal.
3. Run `npm install` to install the dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the app on your emulator or device.
5. Observe the issue in the initial implementation and the fix in the solution. 
