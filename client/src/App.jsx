import React, { useEffect, useLayoutEffect, useState } from "react";
// import { BrowserRoutes as Routes, Switch, Route } from "react-router-dom";
// import { Routes,Router, Route, useParams } from "react-router-dom";
// import { Router } from "react-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import MainOptions from "./components/MainOptions";
import SnackbarContextComponent from "./contexts/SnackBar";
import ModalContextComponent from "./contexts/Modal";
import HeaderOpenedContextComponent from "./contexts/mobileHeaderContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import { BrowserRouter, Switch, Route , useParams, withRouter, useHistory} from "react-router-dom";
import MenuOptions from "./components/Header/Mobile/MenuOptions";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleScreen from "./pages/ArticleScreen"
import MenArticlesPage from "./pages/MenArticlesPage";
import WomenArticlesPage from "./pages/WomenArticlesPage";
import ChildrenArticlesPage from "./pages/ChildrenArticlesPage";
import { useDispatch,useSelector } from "react-redux";
import {loadMen} from "./redux/actions/allCategories";
import { getSpecificSubCategory} from "./redux/actions/subcategory_main";
import AllForMen from "./components/AllForMen";
import FilterArticlesPage from "./pages/FilterArticlesPage";
import LastPageStateContextComponent, {lastPageStateContext} from "./contexts/lastPageStateContext"
import AdversingPoster from "./components/AdversingPoster";
import Pay from "./components/Pay";
import Payment from "./pages/Payment";
import  Dashboard  from "./pages/User/Dashboard"
import FavoritePage from "./pages/FavoritePage";
import NotFound from "./pages/NotFound";

function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  const params=props.match.params;
  const a = useParams();
  const dispatch=useDispatch();
  const state=useSelector(state=>state);
  const history=useHistory();
  
  function OnPaiement() {
      history.push("/pay");
  }

  useEffect(() => {
    setIsLoading(false);

  }, []);   

  return (
    <Switch>
      <HeaderOpenedContextComponent>
        <LastPageStateContextComponent>
          <SnackbarContextComponent>
            <ModalContextComponent>
              <div className="myRoot">
                <header>
                  <Header />
                  {/* <Navbar/> */}
                </header>
                <main>
                  <Route exact path={"/"}>
                    {/* <AllForMen /> */}
                    <MainOptions />
                    {/* <Signup /> */}
                  </Route>
                  <Route path="/s/articles/men" exact>
                    {/**The /s in the path just means(sort) because i am sorting the the data by sex  */}
                    <MenArticlesPage />
                  </Route>

                  <Route path="/filter" exact>
                    {/**The /s in the path just means(sort) because i am sorting the the data by sex  */}
                    <FilterArticlesPage />
                  </Route>

                  <Route path="/s/articles/women" exact>
                    {/**The /s in the path just means(sort) because i am sorting the the data by sex  */}
                    <WomenArticlesPage />
                  </Route>

                  <Route path="/s/articles/children" exact>
                    {/**The /s in the path just means(sort) because i am sorting the the data by sex  */}
                    <ChildrenArticlesPage />
                  </Route>

                  <Route path="/articles/men" exact>
                    <ArticlesPage />
                  </Route>

                  <Route path="/articles/:category/:articleSlug/:colorId" exact>
                    <ArticleScreen />
                  </Route>

                  <Route path="/cart" exact>
                    <Cart OnPaiement={OnPaiement} />
                  </Route>

                  <Route path="/q/articles/:category" exact>
                    <FilterArticlesPage />
                  </Route>

                  <Route path="/pay" exact>
                    <Payment />
                  </Route>

                  <Route path="/login" exact>
                    <Login />
                  </Route>

                  <Route path="/signup" exact>
                    <Signup />
                  </Route>

                  <Route path="/favorite" exact>
                    <FavoritePage />
                  </Route>

                  <Route path="/dashboard" exact>
                    <Dashboard />
                  </Route>

                  {/* <Route path="*" component={NotFound}/> */}
               
                </main>

                <footer>
                  <Footer />
                </footer>
              </div>
            </ModalContextComponent>
          </SnackbarContextComponent>
        </LastPageStateContextComponent>
      </HeaderOpenedContextComponent>
    </Switch>
  );
}

export default withRouter(App);
