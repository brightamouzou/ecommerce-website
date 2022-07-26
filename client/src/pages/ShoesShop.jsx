import React from 'react'
import { withRouter } from 'react-router-dom'
import ArticleCategoryList from '../components/ArticleCategoryList'

function ShoesShop() {
  return (
    <ArticleCategoryList/>
  )
}

export default withRouter(ShoesShop)