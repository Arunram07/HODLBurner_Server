pragma solidity 0.8.6;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HODL is ERC20("HODL","Mock-HODL"){
    function mint(address _to,uint256 _amount)public returns(bool){
        _mint(_to,_amount);
        return true;
    }
}