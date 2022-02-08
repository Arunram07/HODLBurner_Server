pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IRouter.sol";

contract HODLBurner is Ownable{
    address public HODL_Address;
    address public PancakeswapRouter;
    address public WETH;
    address public BurnAddress;

    event Received(address, uint);
    event Burned(uint indexed _block,uint _amount);

    constructor(address _HODL_Address,address _pancakeswapRouter,address _weth,address _burnAddress){
        HODL_Address = _HODL_Address;
        PancakeswapRouter = _pancakeswapRouter;
        WETH = _weth;
        BurnAddress = _burnAddress;
    }

     function buyFromPancakeandBurn(uint256 _amountsIn,uint256 _amountsOut)public onlyOwner returns(bool){
         uint deadline = block.timestamp + 100;
         address[] memory path = new address[](2);
        path[0] = address(WETH);
        path[1] = address(HODL_Address);
       uint[] memory amounts = IPancakeRouter02(PancakeswapRouter).swapExactETHForTokens{value: _amountsIn}(_amountsOut,path,address(this),deadline);
       uint balance = IERC20(HODL_Address).balanceOf(address(this));
       IERC20(HODL_Address).transfer(BurnAddress,balance);
       emit Burned(block.number,balance);
       return true;
    }

    
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    function setBurnAddress(address _burn)public onlyOwner{
        BurnAddress = _burn;
    }


}

