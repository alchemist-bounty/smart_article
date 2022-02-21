App = {
  web3Provider: null,
  contracts: {},
  account: 0x0,

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    //initialize web3
    if (typeof web3 !== 'undefined') {
      // resue the provider of the web3 object injected by Metakask
      App.web3Provider = web3.currentProvider;
    }
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }

    web3 = new Web3(App.web3Provider);
    App.displayAccountInfo();
    return App.initContract();
  },

  initContract: function() {
    $.getJSON('ChainList.json', function(chainListArtificat) {
      App.contracts.ChainList = TruffleContract(chainListArtificat);
      // set the provider for our contracts
      App.contracts.ChainList.setProvider(App.web3Provider);
      
      return App.reloadArticles();
    });
  },

  reloadArticles: function() {

  },

  displayAccountInfo: function() {
    web3.eth.getCoinbase(function(err, account) {
      if (err===null) {
        App.account = account;
        $('#account').text(account);
        web3.eth.getBalance(account, function(err, balance) {
          if (err === null) {
            $('#accountBalance').text(web3.fromWei(balance, "ether") + " ETH");
          }
        })
      }
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
