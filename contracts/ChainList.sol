pragma solidity ^0.5;

contract ChainList {
    // state variables
    address seller;
    string name;
    string description;
    uint256 price;

    function sellArticle(string memory _name, string memory _description, uint256 _price) public {
        seller = msg.sender;
        name = _name;
        description = _description;
        price = _price;
    }

    function getArticle() public view returns (
        address _seller, 
        string memory  _name, 
        string memory _description, 
        uint256 _price
    ) {
        return(seller, name, description, price);
    }
}