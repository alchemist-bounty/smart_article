var ChainList = artifacts.require("./ChainList.sol");

contract('ChainList', function(accounts) {
    var chainListInstance;
    var seller = accounts[1];
    var articleName = "article 1";
    var articleDescription = "Description for article 1";
    var articlePrice = "10";

    it("should be initialized with empty values", function() {
        return ChainList.deployed().then(function(instance) {
            return instance.getArticle();
        }).then(function(data) {
            assert.equal(data[0], 0x0, 'seller must be empty');
            assert.equal(data[1], '', 'Article name must be empty');
            assert.equal(data[2], '', 'Article description must be empty');
            assert.equal(data[3].toNumber(), 0, 'Article Price must be empty');
        });
    });

    it("should sell an article", function() {
        return ChainList.deployed().then(function(instance) {
            chainListInstance = instance;
            return chainListInstance.sellArticle(
                articleName, 
                articleDescription, 
                web3.utils.toWei(articlePrice, "ether"),
                {from: seller});
        }).then(function() {
            return chainListInstance.getArticle();
        }).then(function(data) {
            assert.equal(data[0], seller, 'seller must be ' + seller);
            assert.equal(data[1], articleName, 'Article name must be ' + articleName);
            assert.equal(data[2], articleDescription, 'Article description must be ' + articleDescription);
            assert.equal(data[3], web3.utils.toWei(articlePrice, "ether"), 'Article Price must be ' + web3.utils.toWei(articlePrice, "ether"));
        })
    })
})