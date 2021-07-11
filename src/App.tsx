import './App.css';
import { BrowserRouter, Route, Switch, RouteComponentProps } from "react-router-dom"
import { routes } from "./config/routes"
import { Suspense } from "react"


function App() {
  return (
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route 
                key={ index }
                path={ route.path } 
                exact={ route.exact }
                render={( props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
