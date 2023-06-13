//// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// This contract is the base for other contracts

contract SimpleStorage {
    uint256 fovaroteNumber;

    struct People {
        uint256 fovaroteNumber;
        string name;
    }

    // Array of struct
    People[] public people;

    // Another way of array
    // Is like a dictionary
    mapping(string => uint256) public nameToFovaroteNumber;

    function store(uint256 _fovaroteNumber) public virtual {
        fovaroteNumber = _fovaroteNumber;
    }

    function retreve() public view returns (uint256) {
        return fovaroteNumber;
    }

    function addPerson(string memory _name, uint256 _fovaroteNumber) public {
        // Adding value to the array
        people.push(People(_fovaroteNumber, _name));
        // Adding value to the mapping by KEY
        nameToFovaroteNumber[_name] = _fovaroteNumber;
    }
}
