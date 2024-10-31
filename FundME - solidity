---

# FundMe DApp

A decentralized crowdfunding smart contract built with Solidity. This **Fund Me** contract allows users to contribute ETH to the campaign, and only the campaign owner can withdraw the funds.

## Features

- **Fund the Contract**: Allows users to contribute ETH.
- **Withdraw Funds**: Only the contract owner can withdraw collected funds.
- **Track Contributions**: The contract records each user’s contributions.
- **Event Logging**: Logs contributions and withdrawals.

## Instructions to Deploy and Test in Remix IDE

### 1. Open Remix IDE

- Go to [Remix IDE](https://remix.ethereum.org/).

### 2. Create a New File for the Contract

- In the **File Explorer** on the left, click on the `+` icon to create a new file.
- Name the file `FundMe.sol` and paste the following Solidity code into it.

### 3. Solidity Code: `FundMe.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundMe {
    address public owner; // Owner of the contract
    mapping(address => uint256) public contributions; // Track contributions by address
    uint256 public totalFunds; // Total funds received

    // Events to log contributions and withdrawals
    event Funded(address indexed contributor, uint256 amount);
    event Withdrawn(uint256 amount);

    // Modifier to restrict certain functions to the contract owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    // Constructor sets the contract deployer as the owner
    constructor() {
        owner = msg.sender;
    }

    // Function to allow users to fund the contract
    function fund() public payable {
        require(msg.value > 0, "Must send ETH to fund");
        contributions[msg.sender] += msg.value;
        totalFunds += msg.value;

        emit Funded(msg.sender, msg.value);
    }

    // Function for the owner to withdraw all funds
    function withdraw() public onlyOwner {
        require(totalFunds > 0, "No funds available");

        uint256 amount = totalFunds;
        totalFunds = 0;

        (bool success, ) = owner.call{value: amount}("");
        require(success, "Transfer failed");

        emit Withdrawn(amount);
    }

    // Function to get the contract's balance
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
```

### 4. Compile the Contract

- Go to the **Solidity Compiler** tab (icon looks like a `Y` on the left sidebar).
- Set the compiler version to `0.8.x` (the latest 0.8 version).
- Click **Compile FundMe.sol**. Ensure there are no errors in the compilation.

### 5. Deploy the Contract

- Switch to the **Deploy & Run Transactions** tab (icon with the Ethereum logo on the left sidebar).
- Choose `JavaScript VM` as the environment for a local blockchain instance.
- Click **Deploy** to deploy the `FundMe` contract.
  
### 6. Interacting with the Contract

- **fund**: Enter an amount of ETH in the `Value` field and click **fund** to contribute. Check the `contributions` mapping to see individual contributions.
- **withdraw**: Only the contract owner can call **withdraw** to withdraw all funds.
- **getBalance**: Use this to check the contract’s current balance.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---
