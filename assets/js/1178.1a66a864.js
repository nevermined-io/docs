"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1178],{31178:e=>{e.exports=JSON.parse('{"name":"AaveBorrowCondition","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"_conditionId","type":"bytes32"}],"name":"Fulfilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"CONDITION_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0x15c87f85"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"abortByTimeOut","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0x1ce19185"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"address","name":"_vaultAddress","type":"address"},{"internalType":"address","name":"_assetToBorrow","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_interestRateMode","type":"uint256"}],"name":"fulfill","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0x6460cf12"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_valueHash","type":"bytes32"}],"name":"generateId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0xcb4e57e8"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"address","name":"_vaultAddress","type":"address"},{"internalType":"address","name":"_assetToBorrow","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_interestRateMode","type":"uint256"}],"name":"hashValues","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x509acc87"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_conditionStoreManagerAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x485cc955"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[{"internalType":"address","name":"_agentId","type":"address"},{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"provenanceSignatureIsCorrect","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function","signature":"0xa190aff4"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50611243806100206000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806315c87f85146100ca57806316279055146100f25780631ce1918514610116578063485cc95514610136578063509acc871461014b5780635ced058e1461015e5780635ea3ab851461017c5780636460cf121461018f5780636fd902e1146101a2578063715018a6146101a857806382c947b7146101b05780638da5cb5b146101ca578063a190aff4146101d2578063cb4e57e8146101e5578063f2fde38b14610225575b600080fd5b6100df6000805160206111ee83398151915281565b6040519081526020015b60405180910390f35b610106610100366004610d4b565b3b151590565b60405190151581526020016100e9565b610129610124366004610d66565b610238565b6040516100e99190610db7565b610149610144366004610dc5565b610391565b005b6100df610159366004610df8565b610510565b61016f61016c366004610d66565b90565b6040516100e99190610e46565b6100df61018a366004610ea0565b61057a565b61012961019d366004610f45565b6105d0565b436100df565b61014961075c565b6100df6101be366004610d4b565b6001600160a01b031690565b61016f610770565b6101066101e0366004610f9d565b61077f565b6100df6101f336600461104b565b604080516020808201949094523081830152606080820193909352815180820390930183526080019052805191012090565b610149610233366004610d4b565b6107a9565b606554604051636ed93cc560e01b8152600481018390526000916001600160a01b031690636ed93cc59060240160206040518083038186803b15801561027d57600080fd5b505afa158015610291573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b5919061106d565b6103065760405162461bcd60e51b815260206004820152601f60248201527f436f6e646974696f6e206e6565647320746f2062652074696d6564206f75740060448201526064015b60405180910390fd5b60655460405163295e072360e11b81526001600160a01b03909116906352bc0e469061033990859060039060040161108f565b602060405180830381600087803b15801561035357600080fd5b505af1158015610367573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038b91906110a3565b92915050565b600054610100900460ff16158080156103b15750600054600160ff909116105b806103cb5750303b1580156103cb575060005460ff166001145b61042e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016102fd565b6000805460ff191660011790558015610451576000805461ff0019166101001790555b6001600160a01b0382166104995760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016102fd565b6104a1610822565b6104aa836107a9565b606580546001600160a01b0319166001600160a01b038416179055801561050b576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b604080516000805160206111ee83398151915260208201529081018690526001600160a01b0380861660608301528416608082015260a0810183905260c0810182905260009060e00160405160208183030381529060405280519060200120905095945050505050565b60008060005b83518110156105c9576105b584828151811061059e5761059e6110c4565b60200260200101518361085190919063ffffffff16565b9150806105c1816110f0565b915050610580565b5092915050565b60405163eaf6e48360e01b815260009085906001600160a01b0382169063eaf6e48390610601903390600401610e46565b60206040518083038186803b15801561061957600080fd5b505afa15801561062d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610651919061106d565b61068d5760405162461bcd60e51b815260206004820152600d60248201526c27b7363c903137b93937bbb2b960991b60448201526064016102fd565b60405163d028053960e01b81526001600160a01b038681166004830152602482018690523360448301526064820185905282169063d028053990608401600060405180830381600087803b1580156106e457600080fd5b505af11580156106f8573d6000803e3d6000fd5b50505050600061070f896101f38a8a8a8a8a610510565b9050600061074c8260028b6040518060400160405280601381526020017220b0bb32a137b93937bba1b7b73234ba34b7b760691b8152503361085d565b93505050505b9695505050505050565b6107646108e8565b61076e6000610947565b565b6033546001600160a01b031690565b6000836001600160a01b03166107958484610999565b6001600160a01b03161490505b9392505050565b6107b16108e8565b6001600160a01b0381166108165760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102fd565b61081f81610947565b50565b600054610100900460ff166108495760405162461bcd60e51b81526004016102fd9061110b565b61076e6109bd565b60006107a28284611156565b60655460405163d1a8ae8160e01b81526000916001600160a01b03169063d1a8ae81906108969089908890889088908c9060040161116e565b602060405180830381600087803b1580156108b057600080fd5b505af11580156108c4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075291906110a3565b336108f1610770565b6001600160a01b03161461076e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102fd565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008060006109a885856109ed565b915091506109b581610a5d565b509392505050565b600054610100900460ff166109e45760405162461bcd60e51b81526004016102fd9061110b565b61076e33610947565b600080825160411415610a245760208301516040840151606085015160001a610a1887828585610c13565b94509450505050610a56565b825160401415610a4e5760208301516040840151610a43868383610cf6565b935093505050610a56565b506000905060025b9250929050565b6000816004811115610a7157610a71610d7f565b1415610a7a5750565b6001816004811115610a8e57610a8e610d7f565b1415610ad75760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b60448201526064016102fd565b6002816004811115610aeb57610aeb610d7f565b1415610b395760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016102fd565b6003816004811115610b4d57610b4d610d7f565b1415610ba65760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016102fd565b6004816004811115610bba57610bba610d7f565b141561081f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016102fd565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115610c405750600090506003610ced565b8460ff16601b14158015610c5857508460ff16601c14155b15610c695750600090506004610ced565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610cbd573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610ce657600060019250925050610ced565b9150600090505b94509492505050565b6000806001600160ff1b03831681610d1360ff86901c601b611156565b9050610d2187828885610c13565b935093505050935093915050565b80356001600160a01b0381168114610d4657600080fd5b919050565b600060208284031215610d5d57600080fd5b6107a282610d2f565b600060208284031215610d7857600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b60048110610db357634e487b7160e01b600052602160045260246000fd5b9052565b6020810161038b8284610d95565b60008060408385031215610dd857600080fd5b610de183610d2f565b9150610def60208401610d2f565b90509250929050565b600080600080600060a08688031215610e1057600080fd5b85359450610e2060208701610d2f565b9350610e2e60408701610d2f565b94979396509394606081013594506080013592915050565b6001600160a01b0391909116815260200190565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715610e9857610e98610e5a565b604052919050565b60006020808385031215610eb357600080fd5b82356001600160401b0380821115610eca57600080fd5b818501915085601f830112610ede57600080fd5b813581811115610ef057610ef0610e5a565b8060051b9150610f01848301610e70565b8181529183018401918481019088841115610f1b57600080fd5b938501935b83851015610f3957843582529385019390850190610f20565b98975050505050505050565b60008060008060008060c08789031215610f5e57600080fd5b8635955060208701359450610f7560408801610d2f565b9350610f8360608801610d2f565b92506080870135915060a087013590509295509295509295565b600080600060608486031215610fb257600080fd5b610fbb84610d2f565b9250602084810135925060408501356001600160401b0380821115610fdf57600080fd5b818701915087601f830112610ff357600080fd5b81358181111561100557611005610e5a565b611017601f8201601f19168501610e70565b9150808252888482850101111561102d57600080fd5b80848401858401376000848284010152508093505050509250925092565b6000806040838503121561105e57600080fd5b50508035926020909101359150565b60006020828403121561107f57600080fd5b815180151581146107a257600080fd5b828152604081016107a26020830184610d95565b6000602082840312156110b557600080fd5b8151600481106107a257600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611104576111046110da565b5060010190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008219821115611169576111696110da565b500190565b85815260006020868184015260a0604084015285518060a085015260005b818110156111a85787810183015185820160c00152820161118c565b818111156111ba57600060c083870101525b50601f01601f1916830160c00191506111e0905060608301856001600160a01b03169052565b6107526080830184610d9556fea08c5292c5532882f1d3627a2580087a25c377ce2c5868a0ead0a29462b2c60ca2646970667358221220d480473d4f168be53a50af528169cdfb3416ad235a394c7c7548e59eba1b229164736f6c63430008090033","address":"0x94b64972f3cAD56FF0AfaAD838C5Ca56506A38b1","implementation":"0x6234B336Adc2015285cC608C2531DD777d5C92Cd","version":"v2.1.0","libraries":{}}')}}]);