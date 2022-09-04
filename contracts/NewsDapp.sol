
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";

contract NewsDapp {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    struct news{
        uint256 tokenId;
        address payable author;
        string title;
        string content;
        string time;
        uint upvote;
    }

    event newsCreated(
        uint256 indexed tokenId,
        address author,
        string title,
        string content,
        string time,
        uint upvote
    );

    mapping(uint256 => news) idToNews;

    function createNews(string memory _title, string memory _content, string memory _time) public payable{

        _tokenIds.increment();
        uint256 currentToken = _tokenIds.current();

        idToNews[currentToken] = news(
            currentToken,
            payable(msg.sender),
            _title,
            _content,
            _time,
            0
        );

        emit newsCreated(
            currentToken,
            msg.sender,
            _title,
            _content,
            _time,
            0
        );

    }

    function increaseUpvote(uint256 tokenId) public {
        idToNews[tokenId].upvote++ ;
    }

    function transferSupport(uint256 tokenId) public payable {
        payable(idToNews[tokenId].author).transfer(msg.value) ;
    }

    function fetchNews() public view returns (news[] memory) {
        uint counter = 0;
        uint length = _tokenIds.current();
        news[] memory NewsArr = new news[](length);
        for(uint i=1; i <= length; i++) {
            news storage currentNews = idToNews[i];
            NewsArr[counter] = currentNews;
            counter++;
        }
        return NewsArr;
    }

    function mostUpvote() public view returns (news memory) {
        uint _mostUpvotes = 0;
        uint _mostUpvoteToken = 1 ;
        for(uint i=1; i<=_tokenIds.current(); i++) {
            if(idToNews[i].upvote > _mostUpvotes) {
                _mostUpvotes = idToNews[i].upvote;
                 _mostUpvoteToken = i;
            }
        }
        return idToNews[_mostUpvoteToken];
    }
    
}