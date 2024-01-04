const Article = require("../../models/Article");
const Color = require("../../models/Color");
const NOT_FOUND_MESSAGE ="Désolé, l'article que vous demandez n'est pas été trouvé";
const ERROR_MESSAGE = "Oups! Une erreur s'est produite lors du chrgement";
const CURRENT_CATEGORY_NAME = "accessories";

exports.getSpecificArticle = async (req, res) => {
  try {
    // const queries=req.avalaibleQueries
    // let requestedArticles=[];
    const requestedArticle = await Article.findOne({
      _id: req.params.articleSlug,
      category: CURRENT_CATEGORY_NAME,
    });

    if (requestedArticle) res.json({ item: requestedArticle, found: true });
    else res.json({ message: NOT_FOUND_MESSAGE, found: false });
  } catch (e) {
    res.json({ message: ERROR_MESSAGE, found: false });
  }
};

exports.getSpecificArticleByColor = async (req, res, next) => {
  try {
    const { articleSlug, colorId } = req.params;
    const requestedArticle = await Article.findOne({
      slug: articleSlug,
      category: CURRENT_CATEGORY_NAME,
    });

    if (requestedArticle) {
      const colorRequested = await Color.findOne({
        articleId: requestedArticle._id,
        colorId: colorId,
      });

      if (colorRequested) {
        res.json({
          found: true,
          item: {
            ...requestedArticle,
            color: colorRequested,
          },
        });
      }
      res.json({ item: requestedArticle, found: true });
    } else res.json({ message: NOT_FOUND_MESSAGE, found: false });
  } catch (e) {
    res.json({ message: ERROR_MESSAGE, found: false });
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const avalaibleQueries = req.areAvailableQueries;
    const requestedArticles = await Article.find({
      category: CURRENT_CATEGORY_NAME,
      ...avalaibleQueries,
    });

    if (requestedArticles) {
      res.json({ found: true, items: requestedArticles });
    }
    res.json({ found: false, message: NOT_FOUND_MESSAGE });
  } catch (e) {
    res.json({ found: false, message: ERROR_MESSAGE });
  }
};

exports.getWatches = async (req, res, next) => {
  try {
    const avalaibleQueries = req.areAvailableQueries;
    const requestedArticles = await Article.find({
      category: CURRENT_CATEGORY_NAME,
      subCategories: "watches",
      ...avalaibleQueries,
    });

    if (requestedArticles) {
      res.json({ found: true, items: requestedArticles });
    }
    res.json({ found: false, message: NOT_FOUND_MESSAGE });
  } catch (e) {
    res.json({ found: false, message: ERROR_MESSAGE });
  }
};

exports.getSocks = async (req, res, next) => {
  try {
    const avalaibleQueries = req.areAvailableQueries;
    const requestedArticles = await Article.find({
      category: CURRENT_CATEGORY_NAME,
      subCategories: "socks",
      ...avalaibleQueries,
    });

    if (requestedArticles) {
      return res.json({ found: true, items: requestedArticles });
    }
    res.json({ found: false, message: NOT_FOUND_MESSAGE });
  } catch (e) {
    res.json({ found: false, message: ERROR_MESSAGE });
  }
};

exports.getSportMats = async (req, res, next) => {
  try {
    const avalaibleQueries = req.areAvailableQueries;
    const requestedArticles = await Article.find({
      category: CURRENT_CATEGORY_NAME,
      subCategories: "sportMats",
      ...avalaibleQueries,
    });

    if (requestedArticles) {
      res.json({ found: true, items: requestedArticles });
    }
    res.json({ found: false, message: NOT_FOUND_MESSAGE });
    }catch (e) {
        res.json({ found: false, message: ERROR_MESSAGE });
    }
};
