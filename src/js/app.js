App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    var articlesRow = $('#articlesRow');
    var articleTemplate = $('#articleTemplate');

    articleTemplate.find('.panel-title').text('article 1');
    articleTemplate.find('.article-description').text('Description for article 1');
    articleTemplate.find('.article-price').text("10.23");
    articleTemplate.find('.article-seller').text("0x123123123");

    articlesRow.append(articleTemplate.html());

    return App.initWeb3();
  },

  initWeb3: function() {
      /*
        * Replace me...
        */

      return App.initContract();
  },

  initContract: function() {
      /*
        * Replace me...
        */
  },
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
