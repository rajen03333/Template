import React,{Suspense,lazy} from "react";
import { HashRouter,Route, Switch } from "react-router-dom";
import ReduxToastr from "react-redux-toastr";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import Error from './error';
import Layout from "./_component/common/layouts/layout";

//import user defined component
const Login = lazy(() => import("./_component/common/auth/login"));
function App() {
  let isLoading=useSelector((state)=>state.alert.isLoading);
  let isLogged=useSelector((state)=>state.user.isLogged);
  return (
    <div>
        <ReduxToastr
          timeOut={1000}
          newestOnTop={true}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          closeOnToastrClick
        />

        <div
          className={
            isLoading
              ? "loaderCenterVisible"
              : "loaderCenterNotVisible"
          }
        >
          {" "}
          <Loader type="Rings" color="#DA2027" height="75" width="75" />{" "}
        </div>
        <Error>
          
        <HashRouter>
            <Suspense
              fallback={
                <div className={"loaderCenterVisible"}>
                  {" "}
                  <Loader
                    type="Rings"
                    color="#DA2027"
                    height="75"
                    width="75"
                  />{" "}
                </div>
              }
            >
              <Switch>
              <Route
                exact
                path="/login"
                render={props =><Login {...props}/>}
              />
             
              <Route
                path="/"
                render={props =>isLogged?<Layout {...props}/>:<Login {...props}/>}
              />
             
              </Switch>
            </Suspense>

            </HashRouter>

        </Error>
      </div>
    );
}

export default App;
