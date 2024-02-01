import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import  {Footer, Navbar}  from "@/widgets/layout";
import routes from "@/routes";


function App() {
  const { pathname } = useLocation();

  return (
    <>


    <div className="max-h-[1080px]  overflow-scroll ">
               <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4  ">
            <Navbar routes={routes} />
        </div>
      
    
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      
     </div> 

    </>
  );
}

export default App;
