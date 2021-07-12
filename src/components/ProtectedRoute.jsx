import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";

export default function ProtectedRoute(props) {
    const { isAuth, changeRoute } = useContext(AppContext);

    return (
        <Route path={props.path}>
            {isAuth
                ? props.children
                : () => {
                      changeRoute("login");
                      return <Redirect to="/login" />;
                  }}
        </Route>
    );
}
