import "../public/styles.css";
import React from "react";
import Footer from "./Footer";
function App() {
  var [length, updateLength] = React.useState(0);

  function countSpaces(string) {
    var count = 0;
    var spaceCount = string.split(" ").length - 1;

    for (var i = 1; i < string.length - 1; i++) {
      if (
        string.charAt(i) === " " &&
        string.charAt(i - 1) !== " " &&
        string.charAt(i + 1) !== " "
      ) {
        count += 1;
      }
    }

    return spaceCount == string.length ? spaceCount : count;
  }

  function handleInput(event) {
    var inputText = event.target.value;
    var spaces = countSpaces(inputText);

    console.log(spaces);
    updateLength(() => {
      if (inputText.length === spaces) {
        return 0;
      } else {
        return spaces + 1;
      }
    });

    // (inputText.length != 0 ) ? updateLength(spaces + 1) : updateLength(0);
  }

  const inputStyle = {
    width: "45vw",
    height: "25vh"
  };
  return (
    <div>
      <div className="container">
        <h1>Word Counter</h1>
        <textarea
          placeholder="Enter Text Here "
          type="text"
          onChange={handleInput}
        ></textarea>
        <p>Count : {length}</p>
      </div>
      <Footer />
    </div>
  );
}
export default App;
