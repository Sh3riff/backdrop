
# Backdrop React Native Coding Challenge

The solution to the Backdrop [React Native Coding Challenge](https://backdrop-photo.notion.site/Backdrop-React-Native-Coding-Challenge-Objective-885be7e4c8ec4c82ab2b333df4a0106e)
using the [Backdrop provided design](https://www.figma.com/file/sLR9JePqjYO0BZD0TixXZd/Coding?node-id=0%3A1)
and the [thecatapi.com](https://thecatapi.com/) api

## Demo

https://user-images.githubusercontent.com/50480451/193397704-a9f4e0c6-376c-4e06-89d5-0a660b29883f.mp4

## Tech Stack

**React Native App:** [React Native](https://reactnative.dev), [typescript](https://www.typescriptlang.org/),

## Installation

Before running the application, you need to have set up the react native development environment.  

Visit [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) for instructions on how to install **React Native CLI** for you Development OS & Target OS

## Environment Variables

To run this project, you can optionally include your [thecatapi.com](https://thecatapi.com/) in a .env file as below

`CAT_API_KEY=your-cat-api-key`

## Run Locally

Clone the mobile repository via SSH

```bash
  git clone git@github.com:Sh3riff/backdrop.git
```

or via Github CLI

```bash
  gh repo clone Sh3riff/backdrop
```

Open directory & install javascript dependencies

```bash
  cd backdrop && npm i
```

Install ios dependencies (for Mac users intending to run ios)

```bash
  npm run pod
```

Start IOS application

```bash
  npm run ios
```
Start android application

```bash
  npm run android
```
Start react native (metro) server

```bash
  npm start
```

## Authors
- [@sh3riff](https://github.com/sh3riff)
