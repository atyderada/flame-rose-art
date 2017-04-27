// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCOFRMMBzflnidUYq4XKnwdpZcqfK0hF8M",
    authDomain: "flame-roseart.firebaseapp.com",
    databaseURL: "https://flame-roseart.firebaseio.com",
    projectId: "flame-roseart",
    storageBucket: "flame-roseart.appspot.com",
    messagingSenderId: "500196098209"
  }
};
