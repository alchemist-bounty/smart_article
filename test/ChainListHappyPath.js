var ChainList = artifacts.require("./ChainList.sol");

contract('ChainList', function(accounts) {
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
})