import axios from "axios";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useHistory, useParams, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArticlesFilters from "../components/Filtrers/ArticlesFilters";
import FiltredArticles from "../components/Filtrers/FiltredArticles";
import PageContainer from "../components/PageContainer";
import LoadingSomeWhere from "../components/LoadingSomeWhere";
import { loadAll, loadMen } from "../redux/actions/allCategories";
import ArticleCategoryList from "../components/ArticleCategoryList";
import articles from "../utils/testData";
import { lastPageStateContext } from "../contexts/lastPageStateContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
export const filterStateContext = createContext(null);

let source = axios.CancelToken.source();

function FilterArticlesPage() {
  const [queriedArticles, setQueriedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { category } = useParams();
  // const currentCategoryArticles=useSelector(s=>s[currentCategoryArticles]);
  const [filterState, setFilterState] = useState({});
  const currentPageState = useContext(lastPageStateContext);

  function fetchArticles(queries) {
    const url = queries
      ? `/api/q/articles/${category}?${queries}&page=${currentPageState.page}`
      : `/api/articles/all/${category}?page=0`;
    //console.log(url);
    setIsLoading(true);
    axios({
      method: "GET",
      url: url,
      cancelToken: source.token,
    })
      .then((res) => {
        //console.log(res);
        if (res.data.found) {
          setQueriedArticles([...res.data.items].flat());
          setIsLoading(false);
        }
      })
      .catch((err) => {
        //console.log("err", err.message);
        setIsLoading(false);
        if (axios.isCancel()) return;
      });
  }

  useEffect(() => {
    // dispatch(loadMen(category))
    let parmas = new URLSearchParams(document.location.search);
    // let paramsMap=new Map(parmas.entries());

    const keys = Array.from(parmas.entries());
    //console.log(keys);

    let pairs = {};

    if (keys.length) {
      for (let i = 0; i < keys.length; i++) {
        pairs[keys[i][0]] = keys[i][1];
      }

      //console.log(pairs);

      setFilterState({...pairs});

    }
  }, []);
  useEffect(() => {
    source = axios.CancelToken.source();
    let parmas = new URLSearchParams(document.location.search);
    // let paramsMap=new Map(parmas.entries());

    const keys = Array.from(parmas.entries());
    //console.log(keys);

    let pairs = {};

    //console.log(pairs);

    const urlsParams = new URLSearchParams(filterState).toString();
    //console.log(urlsParams);
    history.push({
      search: `?${urlsParams}`,
    });

    fetchArticles(urlsParams);

    return () => {
      if (source) source.cancel("The component get unmounted");
    };
  }, [filterState, history, setFilterState]);

  const filterStateContextAccess = () => {
    return {
      state: filterState,
      setter: setFilterState,
    };
  };

  return (
      <div className="filterArticlePage">
        <filterStateContext.Provider value={filterStateContextAccess}>
          <ArticlesFilters />
          <>
           
            {queriedArticles.length ? (
              <FiltredArticles articles={queriedArticles} />
            ) : (
              <FiltredArticles articles={queriedArticles} />
            )}
           
          </>
        </filterStateContext.Provider>

            <div className="scrollTop"><a href="#articlesFilter"><KeyboardArrowUpIcon/></a></div>
        
      </div>
  );
}

export default withRouter(FilterArticlesPage);
