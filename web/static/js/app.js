// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

// Set up our Elm App
// thanks to https://medium.com/@diamondgfx/setting-up-elm-with-phoenix-be3a9f55bac2#.u8cwcgcq1 for
// guidance
const elmDiv = document.querySelector('#elm-container');
const elmApp = Elm.Main.embed(elmDiv);

elmApp.ports.openTwitterDialog.subscribe((url) => {
  window.open(url)
})
