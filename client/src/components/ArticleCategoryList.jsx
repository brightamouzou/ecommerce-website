import React from 'react'
import CategoryItem from './MainOptions/CategoryItem'
import articles from '../utils/testData'
import testdata from '../utils/testData'
import LazyImage from './LazyImage'
function ArticleCategoryList({articles}) {
  return (
    <div className="articleCategoryList">
      {articles.map((article, idx) => (
        <CategoryItem
          item={article}
          classNames="articleCategoryList__item"
          key={idx}
        />
      ))}
    </div>
  );
}

export default ArticleCategoryList