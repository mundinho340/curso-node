pragma solidity 0.8.7;

contract Visibilidade{
    string private nome;

    function salvaNome(string memory _nome) external{
        nome = _nome;
    }

    function visualizar() external view returns(string memory){
        return nome;
    }
}