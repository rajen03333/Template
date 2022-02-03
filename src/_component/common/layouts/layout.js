import React,{Suspense} from "react";
import {  useSelector } from "react-redux";
import Navbar from './header';
import Sidebar from './sidebar';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import routes from '../../../routes';
import Loader from "react-loader-spinner";
function Layout(props) {
  // Getting Operator PO  Data from Redux Store
  const isLogged = useSelector(
    (state) => state.user.isLogged
  );
    return (
      <div>
        <Sidebar />
        <div className="main-wrapper">
          <Navbar />
          <div className="main">
          <Suspense fallback={
                <div className={"loaderCenterVisible"}>
                  {" "}
                  <Loader
                    type="Rings"
                    color="#DA2027"
                    height="75"
                    width="75"
                  />{" "}
                </div>
              }>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                   
                      <route.component {...props} />
                  )} />
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
          </div>
        </div>
      </div>
    );
}

export default Layout;

