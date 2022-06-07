import React, { useEffect, useLayoutEffect, useState } from "react";
// import { BrowserRoutes as Routes, Switch, Route } from "react-router-dom";
// import { Routes,Router, Route, useParams } from "react-router-dom";
// import { Router } from "react-dom";
import Header from "./components/Header";
import { buttonEvent, linkEvent } from "./utils/events/params1";
import {
  headerMenuItems,
  simulateHoverOnMenuItem,
} from "./utils/events/header";
import MainSlider from "./components/Sliders/MainSlider";
import Footer from "./components/Footer";
import MainOptions from "./components/MainOptions";
import Modal from "./components/Modal";
import indexAdmin from "./components/Admin";
import Navbar from "./components/Admin/Navbar";
import NewArticle from "./pages/Admin/newArticle";
import SnackbarContextComponent from "./contexts/SnackBar";
import { ModalContext } from "./contexts/Modal";
import ModalContextComponent from "./contexts/Modal";
import HeaderOpenedContextComponent from "./contexts/mobileHeaderContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";

import ClothesShop from "./pages/ClothesShop";
import ShoesShop from "./pages/ShoesShop";
import AccessoriesShop from "./pages/AccessoriesShop";
import MainLoading from "./components/MainLoading";
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
function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  const params=props.match.params;
  const a = useParams();
  const dispatch=useDispatch();
  const state=useSelector(state=>state);
  const history=useHistory();

  useEffect(() => {
    // buttonEvent();
    // linkEvent();
    headerMenuItems();
    console.log(a);
    setIsLoading(false);

    // history.push({
    //   // pathname:"/s/articles/men",
    //   search:'?a=2&b=4',
    //   // state:{isActive:true}
    // })

    // dispatch(loadMen("shoes"));
    // dispatch(getSpecificSubCategory("clothes","tShirts"));
  
    
    // simulateHoverOnMenuItem();
    // console.log(params);
  }, []);   

  return (
    <Switch>
      <HeaderOpenedContextComponent>
        <SnackbarContextComponent>
          <ModalContextComponent>
            <div className="myRoot">
              <header>
                <Header />
                {/* <Navbar/> */}
              </header>
              <main>
                <Route exact path={"/"}>
                  <AllForMen />
                  {/* <MainOptions /> */}
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

                <Route path="/q/articles/:category" exact>
                  <FilterArticlesPage />
                </Route>
              </main>

              <footer>
                <Footer />
              </footer>
            </div>
          </ModalContextComponent>
        </SnackbarContextComponent>
      </HeaderOpenedContextComponent>
    </Switch>
  );
}

export default withRouter(App);
