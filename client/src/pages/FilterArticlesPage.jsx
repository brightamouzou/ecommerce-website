import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useHistory, useParams, withRouter } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import ArticlesFilters from '../components/Filtrers/ArticlesFilters';
import FiltredArticles from '../components/Filtrers/FiltredArticles';
import PageContainer from '../components/PageContainer';
import LoadingSomeWhere from '../components/LoadingSomeWhere';
import {loadMen} from "../redux/actions/allCategories"
import ArticleCategoryList from '../components/ArticleCategoryList';
import articles from '../utils/testData';

export const filterStateContext=createContext(null);

let source=axios.CancelToken.source();


function FilterArticlesPage() {
  const [filterState, setFilterState] = useState({});
  const [queriedArticles,setQueriedArticles]=useState([]);
  const currentCategoryArticles=useSelector(s=>s.menShoes);
  const [isLoading, setIsLoading] = useState(false);
  const history=useHistory()
  const {category}=useParams();
  const dispatch=useDispatch();
  function fetchArticles(queries) {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `/api/q/articles?${queries}`,
      cancelToken: source.token,
    })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        if (res.data.found) {
          setQueriedArticles([...res.data.items]);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);

        if (axios.isCancel) return;
      });
  }

  useEffect(()=>{
    dispatch(loadMen(category))
  },[])

  useEffect(() => {
    source = axios.CancelToken.source();

    const urlsParams = new URLSearchParams(filterState).toString();
    console.log(urlsParams);
    history.push({
      search: `?${urlsParams}`,
    });

    fetchArticles(urlsParams);

    return () => {
      if (source) source.cancel("The compoent get unmounted");
    };
  }, [filterState, history, setFilterState]);
  
  const filterStateContextAccess=()=>{
    return {
      state:filterState,
      setter:setFilterState
    }
  }
    
  return (
    <PageContainer>
      <div className="filterArticlePage">
        <filterStateContext.Provider value={filterStateContextAccess}>
          <ArticlesFilters />
          <>
            {/* {isLoading ? (
              <LoadingSomeWhere />
            ) : queriedArticles.length ? (
              <FiltredArticles artilces={queriedArticles} />
            ):( */}
            <div className="filtredArticles">

                <ArticleCategoryList articles={currentCategoryArticles.all} />
            </div>
            {/* )
            } */}
          </>
        </filterStateContext.Provider>
      </div>
    </PageContainer>
  );
}

export default withRouter(FilterArticlesPage)