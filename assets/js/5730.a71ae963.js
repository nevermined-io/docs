"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5730],{65730:e=>{e.exports=JSON.parse('{"name":"EscrowComputeExecutionTemplate","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_accessConsumer","type":"address"},{"indexed":true,"internalType":"address","name":"_accessProvider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIdSeeds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32","name":"_idSeed","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_creator","type":"address"}],"name":"AgreementCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2e166f3e"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4183e72b"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPay","outputs":[],"stateMutability":"payable","type":"function","signature":"0x6104ff1a"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPayEscrow","outputs":[],"stateMutability":"payable","type":"function","signature":"0xf8fe1070"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"getAgreementData","outputs":[{"internalType":"address","name":"accessConsumer","type":"address"},{"internalType":"address","name":"accessProvider","type":"address"}],"stateMutability":"view","type":"function","signature":"0x6ff015ae"},{"inputs":[],"name":"getConditionTypes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","signature":"0x91a169bf"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_agreementStoreManagerAddress","type":"address"},{"internalType":"address","name":"_didRegistryAddress","type":"address"},{"internalType":"address","name":"_computeExecutionConditionAddress","type":"address"},{"internalType":"address","name":"_lockPaymentConditionAddress","type":"address"},{"internalType":"address payable","name":"_escrowPaymentAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xcc2a9a5b"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function","signature":"0x06fdde03"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50611752806100206000396000f3fe60806040526004361061008c5760003560e01c806306fdde03146100915780632e166f3e146100e65780634183e72b146101085780636104ff1a146101285780636ff015ae1461013b578063715018a61461017b5780638da5cb5b1461019057806391a169bf146101bd578063cc2a9a5b146101df578063f2fde38b146101ff578063f8fe10701461021f575b600080fd5b34801561009d57600080fd5b50604080518082018252601e81527f457363726f77436f6d70757465457865637574696f6e54656d706c6174650000602082015290516100dd9190610c8f565b60405180910390f35b3480156100f257600080fd5b50610106610101366004610d96565b610232565b005b34801561011457600080fd5b50610106610123366004610e56565b6102d6565b610106610136366004610f68565b6102f9565b34801561014757600080fd5b5061015b610156366004611079565b610403565b604080516001600160a01b039384168152929091166020830152016100dd565b34801561018757600080fd5b50610106610588565b34801561019c57600080fd5b506101a561059c565b6040516001600160a01b0390911681526020016100dd565b3480156101c957600080fd5b506101d26105ab565b6040516100dd91906110e3565b3480156101eb57600080fd5b506101066101fa3660046110fd565b61060d565b34801561020b57600080fd5b5061010661021a366004611171565b6108a3565b61010661022d36600461118e565b61091c565b6066546040516001600160a01b039091169063955d0c2a9061025a90889033906020016112b9565b60405160208183030381529060405280519060200120866102796105ab565b8787876040518763ffffffff1660e01b815260040161029d96959493929190611300565b600060405180830381600087803b1580156102b757600080fd5b505af11580156102cb573d6000803e3d6000fd5b505050505050505050565b6102e38686868686610232565b6102f1868685858589610949565b505050505050565b6066546040805161018081019091526001600160a01b0390911690637c7197939034908061032c8f336101a084016112b9565b6040516020818303038152906040528051906020012081526020018d81526020016103556105ab565b81526020018c81526020018b81526020018a8152602001336001600160a01b03168152602001898152602001886001600160a01b03168152602001876001600160a01b03168152602001868152602001858152506040518363ffffffff1660e01b81526004016103c59190611366565b6000604051808303818588803b1580156103de57600080fd5b505af11580156103f2573d6000803e3d6000fd5b505050505050505050505050505050565b600080600060606000606660009054906101000a90046001600160a01b03166001600160a01b031663579e6e3f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561045a57600080fd5b505afa15801561046e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610492919061148c565b600087815260676020526040908190206002015490516322c6b51960e01b81529192506001600160a01b038316916322c6b519916104d69160040190815260200190565b60006040518083038186803b1580156104ee57600080fd5b505afa158015610502573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261052a919081019061150d565b5050815196995090975050931593506105639250505057816000815181106105545761055461161a565b60200260200101519350610567565b8293505b505050600092835260676020526040909220546001600160a01b0316929050565b610590610a07565b61059a6000610a66565b565b6033546001600160a01b031690565b6060606580548060200260200160405190810160405280929190818152602001828054801561060357602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116105e5575b5050505050905090565b600054610100900460ff161580801561062d5750600054600160ff909116105b806106475750303b158015610647575060005460ff166001145b6106af5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156106d2576000805461ff0019166101001790555b6001600160a01b038716158015906106f257506001600160a01b03861615155b801561070657506001600160a01b03851615155b801561071a57506001600160a01b03841615155b801561072e57506001600160a01b03831615155b801561074257506001600160a01b03821615155b6107805760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016106a6565b610788610ab8565b610791876108a3565b606680546001600160a01b03199081166001600160a01b0389811691909117909255606980548216888416179055606a80548216878416908117909155606b80548316878516178155606c80548416878616178155606580546001818101835560008390527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c791820180548816909617909555925481548086018355840180549188169187169190911790559054815493840190915591018054919093169116179055801561089a576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050505050565b6108ab610a07565b6001600160a01b0381166109105760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106a6565b61091981610a66565b50565b61092e8b8b8b8b8b8a8a8a8a8a6102f9565b61093c8b8b8a8a8a8e610949565b5050505050505050505050565b6000863360405160200161095e9291906112b9565b60408051808303601f19018152918152815160209283012060008181526067909352912080546001600160a01b0319166001600160a01b038681169182178355600283018a9055600190920154929350911690827f07999de014823a9b9957f806838838c2ef506d5cea4edf7a268607b0b3a0be34898989886109e18f82610ae7565b8f336040516109f69796959493929190611630565b60405180910390a450505050505050565b33610a1061059c565b6001600160a01b03161461059a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106a6565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610adf5760405162461bcd60e51b81526004016106a6906116a8565b61059a610c2f565b606060008333604051602001610afe9291906112b9565b604051602081830303815290604052805190602001209050600083516001600160401b03811115610b3157610b31610cc2565b604051908082528060200260200182016040528015610b5a578160200160208202803683370190505b50905060005b8151811015610c26578260658281548110610b7d57610b7d61161a565b9060005260206000200160009054906101000a90046001600160a01b0316868381518110610bad57610bad61161a565b6020026020010151604051602001610be1939291909283526001600160a01b03919091166020830152604082015260600190565b60405160208183030381529060405280519060200120828281518110610c0957610c0961161a565b602090810291909101015280610c1e816116f3565b915050610b60565b50949350505050565b600054610100900460ff16610c565760405162461bcd60e51b81526004016106a6906116a8565b61059a33610a66565b60005b83811015610c7a578181015183820152602001610c62565b83811115610c89576000848401525b50505050565b6020815260008251806020840152610cae816040850160208701610c5f565b601f01601f19169190910160400192915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715610d0057610d00610cc2565b604052919050565b60006001600160401b03821115610d2157610d21610cc2565b5060051b60200190565b600082601f830112610d3c57600080fd5b81356020610d51610d4c83610d08565b610cd8565b82815260059290921b84018101918181019086841115610d7057600080fd5b8286015b84811015610d8b5780358352918301918301610d74565b509695505050505050565b600080600080600060a08688031215610dae57600080fd5b853594506020860135935060408601356001600160401b0380821115610dd357600080fd5b610ddf89838a01610d2b565b94506060880135915080821115610df557600080fd5b610e0189838a01610d2b565b93506080880135915080821115610e1757600080fd5b50610e2488828901610d2b565b9150509295509295909350565b6001600160a01b038116811461091957600080fd5b8035610e5181610e31565b919050565b60008060008060008060c08789031215610e6f57600080fd5b863595506020870135945060408701356001600160401b0380821115610e9457600080fd5b610ea08a838b01610d2b565b95506060890135915080821115610eb657600080fd5b610ec28a838b01610d2b565b94506080890135915080821115610ed857600080fd5b50610ee589828a01610d2b565b92505060a0870135610ef681610e31565b809150509295509295509295565b600082601f830112610f1557600080fd5b81356020610f25610d4c83610d08565b82815260059290921b84018101918181019086841115610f4457600080fd5b8286015b84811015610d8b578035610f5b81610e31565b8352918301918301610f48565b6000806000806000806000806000806101408b8d031215610f8857600080fd5b8a35995060208b0135985060408b01356001600160401b0380821115610fad57600080fd5b610fb98e838f01610d2b565b995060608d0135915080821115610fcf57600080fd5b610fdb8e838f01610d2b565b985060808d0135915080821115610ff157600080fd5b610ffd8e838f01610d2b565b975060a08d0135965061101260c08e01610e46565b955061102060e08e01610e46565b94506101008d013591508082111561103757600080fd5b6110438e838f01610d2b565b93506101208d013591508082111561105a57600080fd5b506110678d828e01610f04565b9150509295989b9194979a5092959850565b60006020828403121561108b57600080fd5b5035919050565b6001600160a01b03169052565b600081518084526020808501945080840160005b838110156110d85781516001600160a01b0316875295820195908201906001016110b3565b509495945050505050565b6020815260006110f6602083018461109f565b9392505050565b60008060008060008060c0878903121561111657600080fd5b863561112181610e31565b9550602087013561113181610e31565b9450604087013561114181610e31565b9350606087013561115181610e31565b9250608087013561116181610e31565b915060a0870135610ef681610e31565b60006020828403121561118357600080fd5b81356110f681610e31565b60008060008060008060008060008060006101608c8e0312156111b057600080fd5b8b359a5060208c013599506001600160401b0360408d01358110156111d457600080fd5b6111e48e60408f01358f01610d2b565b99508060608e013511156111f757600080fd5b6112078e60608f01358f01610d2b565b98508060808e0135111561121a57600080fd5b61122a8e60808f01358f01610d2b565b975061123860a08e01610e46565b965060c08d0135955061124d60e08e01610e46565b945061125c6101008e01610e46565b9350806101208e0135111561127057600080fd5b6112818e6101208f01358f01610d2b565b9250806101408e0135111561129557600080fd5b506112a78d6101408e01358e01610f04565b90509295989b509295989b9093969950565b9182526001600160a01b0316602082015260400190565b600081518084526020808501945080840160005b838110156110d8578151875295820195908201906001016112e4565b86815285602082015260c06040820152600061131f60c083018761109f565b828103606084015261133181876112d0565b9050828103608084015261134581866112d0565b905082810360a084015261135981856112d0565b9998505050505050505050565b602081528151602082015260208201516040820152600060408301516101808060608501526113996101a085018361109f565b91506060850151601f19808685030160808701526113b784836112d0565b935060808701519150808685030160a08701526113d484836112d0565b935060a08701519150808685030160c08701526113f184836112d0565b935060c0870151915061140760e0870183611092565b60e087015161010087810191909152870151915061012061142a81880184611092565b870151915061014061143e87820184611092565b8088015192505061016081878603018188015261145b85846112d0565b908801518782039092018488015293509050611477838261109f565b9695505050505050565b8051610e5181610e31565b60006020828403121561149e57600080fd5b81516110f681610e31565b600082601f8301126114ba57600080fd5b815160206114ca610d4c83610d08565b82815260059290921b840181019181810190868411156114e957600080fd5b8286015b84811015610d8b57805161150081610e31565b83529183019183016114ed565b60008060008060008060008060006101208a8c03121561152c57600080fd5b895161153781610e31565b60208b015160408c0151919a5098506001600160401b038082111561155b57600080fd5b818c0191508c601f83011261156f57600080fd5b81518181111561158157611581610cc2565b611594601f8201601f1916602001610cd8565b8181528e60208386010111156115a957600080fd5b6115ba826020830160208701610c5f565b99506115ca905060608d01611481565b975060808c0151965060a08c01519150808211156115e757600080fd5b506115f48c828d016114a9565b94505060c08a0151925060e08a015191506101008a015190509295985092959850929598565b634e487b7160e01b600052603260045260246000fd5b87815260e06020820152600061164960e08301896112d0565b828103604084015261165b81896112d0565b9050828103606084015261166f81886112d0565b9050828103608084015261168381876112d0565b60a084019590955250506001600160a01b039190911660c09091015295945050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600060001982141561171557634e487b7160e01b600052601160045260246000fd5b506001019056fea264697066735822122030371ccd6d3d69a4b9f5e38c6f889c21378fe3837fbc9de09fccf7ea58d8535664736f6c63430008090033","address":"0x78035276569b7c47E986C6C735d9330200eFE7Fc","implementation":"0xbFce72B81869be22051AEe16222F623e5378c60b","version":"v2.1.0","libraries":{}}')}}]);