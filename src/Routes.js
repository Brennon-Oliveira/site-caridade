import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { AppContext } from "./contexts/AppContext";
import Header from "./components/Header";
import { useState, useContext } from "react";
import Posts from "./pages/Posts";
import ProtectedRoute from "./components/ProtectedRoute";
import Authentication from "./pages/Authentication";

export default function Routes() {
    const [notShowHeader, setNotShowHeader] = useState([
        "/",
        "/login",
        "/register",
    ]);
    const [notShowFooter, setNotShowFooter] = useState(["/login", "/register"]);
    const { curRoute } = useContext(AppContext);

    return (
        <Router>
            <div id={curRoute == "/posts" ? "master-posts" : "master"}>
                {!notShowHeader.includes(curRoute) ? (
                    <Header type="default" />
                ) : (
                    ""
                )}
                <Switch>
                    <Route path="/login">
                        <Authentication />
                    </Route>
                    <ProtectedRoute path="/posts">
                        <Posts />
                    </ProtectedRoute>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                {!notShowFooter.includes(curRoute) ? <Footer /> : ""}
            </div>
        </Router>
    );
}
