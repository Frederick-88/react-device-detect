import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

function App() {
  return (
    <div>
      <BrowserView>
        <h1> This is rendered only in browser </h1>
      </BrowserView>
      <MobileView>
        <h1> This is rendered only on mobile </h1>
      </MobileView>
    </div>
  );
}
export default App;
