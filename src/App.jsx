import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";

function App() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route exact path="/login" element={<External />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );

  function External() {
    window.location.href = 'https://sipotren.ppaqpegandon.com/';
    return null;
  }
}

export default App;
