pragma solidity 0.8.7;

import "./ex01.sol";
contract ex02 is ex01{
    function visualizar() external view returns(string memory) {
        return verNome();
    }
}