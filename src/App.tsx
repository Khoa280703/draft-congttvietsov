import { useState } from "react";
import PublicInterface from "@/pages/PublicInterface";
import InternalInterface from "@/pages/InternalInterface";
import "./App.css";

function App() {
  const [isInternal, setIsInternal] = useState(true);

  const handleInternalToggle = () => {
    setIsInternal(!isInternal);
  };

  if (isInternal) {
    return <InternalInterface onInternalToggle={handleInternalToggle} />;
  }

  return <PublicInterface onInternalToggle={handleInternalToggle} />;
}

export default App;
