
exports.areAvailableQueries=function(queries) {
  let finalQuery = {};
  const avalaibleQueries = {
    sex: { A: "A", M: "M", F: "F", C: "C" },
    brand: {
      A: "A",
      ADIDAS: "ADIDAS",
      NIKE: "NIKE",
      PUMA: "PUMA",
      OTHERS: "OTHERS",
    },

    // pages: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 },
  };

  Object.keys(queries).forEach((queryItem) => {

    if ( avalaibleQueries[queryItem] && queries[queryItem] === avalaibleQueries[queryItem][queries[queryItem]])
      finalQuery[queryItem]=avalaibleQueries[queryItem][queries[queryItem]]
  });
  
  return finalQuery;
}
