"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8114],{58114:e=>{e.exports=JSON.parse('{"name":"DIDSalesTemplate","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_accessConsumer","type":"address"},{"indexed":true,"internalType":"address","name":"_accessProvider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIdSeeds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32","name":"_idSeed","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_creator","type":"address"}],"name":"AgreementCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2e166f3e"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4183e72b"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPay","outputs":[],"stateMutability":"payable","type":"function","signature":"0x6104ff1a"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPayEscrow","outputs":[],"stateMutability":"payable","type":"function","signature":"0xf8fe1070"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"getAgreementData","outputs":[{"internalType":"address","name":"accessConsumer","type":"address"},{"internalType":"address","name":"accessProvider","type":"address"}],"stateMutability":"view","type":"function","signature":"0x6ff015ae"},{"inputs":[],"name":"getConditionTypes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","signature":"0x91a169bf"},{"inputs":[],"name":"id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0xaf640d0f"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_agreementStoreManagerAddress","type":"address"},{"internalType":"address","name":"_lockConditionAddress","type":"address"},{"internalType":"address","name":"_transferConditionAddress","type":"address"},{"internalType":"address payable","name":"_escrowPaymentAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x1459457a"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50611738806100206000396000f3fe60806040526004361061008c5760003560e01c80631459457a146100915780632e166f3e146100b35780634183e72b146100d35780636104ff1a146100f35780636ff015ae14610106578063715018a61461014b5780638da5cb5b1461016057806391a169bf1461018d578063af640d0f146101af578063f2fde38b146101cb578063f8fe1070146101eb575b600080fd5b34801561009d57600080fd5b506100b16100ac366004610cb0565b6101fe565b005b3480156100bf57600080fd5b506100b16100ce366004610df5565b6104fc565b3480156100df57600080fd5b506100b16100ee366004610e90565b6105a0565b6100b1610101366004610fa2565b6105bb565b34801561011257600080fd5b506101266101213660046110b3565b6106c5565b604080516001600160a01b039384168152929091166020830152015b60405180910390f35b34801561015757600080fd5b506100b161084a565b34801561016c57600080fd5b5061017561085e565b6040516001600160a01b039091168152602001610142565b34801561019957600080fd5b506101a261086d565b604051610142919061111d565b3480156101bb57600080fd5b5060405160028152602001610142565b3480156101d757600080fd5b506100b16101e6366004611137565b6108cf565b6100b16101f9366004611154565b610948565b600054610100900460ff161580801561021e5750600054600160ff909116105b806102385750303b158015610238575060005460ff166001145b6102a05760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156102c3576000805461ff0019166101001790555b6001600160a01b038616158015906102e357506001600160a01b03851615155b80156102f757506001600160a01b03841615155b801561030b57506001600160a01b03831615155b801561031f57506001600160a01b03821615155b61035d5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606401610297565b610365610975565b61036e866108cf565b606680546001600160a01b0319166001600160a01b0387169081179091556040805163579e6e3f60e01b8152905163579e6e3f91600480820192602092909190829003018186803b1580156103c257600080fd5b505afa1580156103d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fa919061128a565b606980546001600160a01b03199081166001600160a01b0393841617909155606a80548216878416908117909155606b80548316878516178155606c80548416878616178155606580546001818101835560008390527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c79182018054881690961790955592548154808601835584018054918816918716919091179055905481549384019091559101805491909316911617905580156104f4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b6066546040516001600160a01b039091169063955d0c2a9061052490889033906020016112a7565b604051602081830303815290604052805190602001208661054361086d565b8787876040518763ffffffff1660e01b8152600401610567969594939291906112ee565b600060405180830381600087803b15801561058157600080fd5b505af1158015610595573d6000803e3d6000fd5b505050505050505050565b6105ad86868686866104fc565b6104f48686858585896109a4565b6066546040805161018081019091526001600160a01b0390911690637c719793903490806105ee8f336101a084016112a7565b6040516020818303038152906040528051906020012081526020018d815260200161061761086d565b81526020018c81526020018b81526020018a8152602001336001600160a01b03168152602001898152602001886001600160a01b03168152602001876001600160a01b03168152602001868152602001858152506040518363ffffffff1660e01b81526004016106879190611354565b6000604051808303818588803b1580156106a057600080fd5b505af11580156106b4573d6000803e3d6000fd5b505050505050505050505050505050565b600080600060606000606660009054906101000a90046001600160a01b03166001600160a01b031663579e6e3f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561071c57600080fd5b505afa158015610730573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610754919061128a565b600087815260676020526040908190206002015490516322c6b51960e01b81529192506001600160a01b038316916322c6b519916107989160040190815260200190565b60006040518083038186803b1580156107b057600080fd5b505afa1580156107c4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107ec91908101906114d3565b50508151969950909750509315935061082592505050578160008151811061081657610816611600565b60200260200101519350610829565b8293505b505050600092835260676020526040909220546001600160a01b0316929050565b610852610a62565b61085c6000610ac1565b565b6033546001600160a01b031690565b606060658054806020026020016040519081016040528092919081815260200182805480156108c557602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116108a7575b5050505050905090565b6108d7610a62565b6001600160a01b03811661093c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610297565b61094581610ac1565b50565b61095a8b8b8b8b8b8a8a8a8a8a6105bb565b6109688b8b8a8a8a8e6109a4565b5050505050505050505050565b600054610100900460ff1661099c5760405162461bcd60e51b815260040161029790611616565b61085c610b13565b600086336040516020016109b99291906112a7565b60408051808303601f19018152918152815160209283012060008181526067909352912080546001600160a01b0319166001600160a01b038681169182178355600283018a9055600190920154929350911690827f07999de014823a9b9957f806838838c2ef506d5cea4edf7a268607b0b3a0be3489898988610a3c8f82610b43565b8f33604051610a519796959493929190611661565b60405180910390a450505050505050565b33610a6b61085e565b6001600160a01b03161461085c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610297565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610b3a5760405162461bcd60e51b815260040161029790611616565b61085c33610ac1565b606060008333604051602001610b5a9291906112a7565b604051602081830303815290604052805190602001209050600083516001600160401b03811115610b8d57610b8d610d21565b604051908082528060200260200182016040528015610bb6578160200160208202803683370190505b50905060005b8151811015610c82578260658281548110610bd957610bd9611600565b9060005260206000200160009054906101000a90046001600160a01b0316868381518110610c0957610c09611600565b6020026020010151604051602001610c3d939291909283526001600160a01b03919091166020830152604082015260600190565b60405160208183030381529060405280519060200120828281518110610c6557610c65611600565b602090810291909101015280610c7a816116d9565b915050610bbc565b50949350505050565b6001600160a01b038116811461094557600080fd5b8035610cab81610c8b565b919050565b600080600080600060a08688031215610cc857600080fd5b8535610cd381610c8b565b94506020860135610ce381610c8b565b93506040860135610cf381610c8b565b92506060860135610d0381610c8b565b91506080860135610d1381610c8b565b809150509295509295909350565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715610d5f57610d5f610d21565b604052919050565b60006001600160401b03821115610d8057610d80610d21565b5060051b60200190565b600082601f830112610d9b57600080fd5b81356020610db0610dab83610d67565b610d37565b82815260059290921b84018101918181019086841115610dcf57600080fd5b8286015b84811015610dea5780358352918301918301610dd3565b509695505050505050565b600080600080600060a08688031215610e0d57600080fd5b853594506020860135935060408601356001600160401b0380821115610e3257600080fd5b610e3e89838a01610d8a565b94506060880135915080821115610e5457600080fd5b610e6089838a01610d8a565b93506080880135915080821115610e7657600080fd5b50610e8388828901610d8a565b9150509295509295909350565b60008060008060008060c08789031215610ea957600080fd5b863595506020870135945060408701356001600160401b0380821115610ece57600080fd5b610eda8a838b01610d8a565b95506060890135915080821115610ef057600080fd5b610efc8a838b01610d8a565b94506080890135915080821115610f1257600080fd5b50610f1f89828a01610d8a565b92505060a0870135610f3081610c8b565b809150509295509295509295565b600082601f830112610f4f57600080fd5b81356020610f5f610dab83610d67565b82815260059290921b84018101918181019086841115610f7e57600080fd5b8286015b84811015610dea578035610f9581610c8b565b8352918301918301610f82565b6000806000806000806000806000806101408b8d031215610fc257600080fd5b8a35995060208b0135985060408b01356001600160401b0380821115610fe757600080fd5b610ff38e838f01610d8a565b995060608d013591508082111561100957600080fd5b6110158e838f01610d8a565b985060808d013591508082111561102b57600080fd5b6110378e838f01610d8a565b975060a08d0135965061104c60c08e01610ca0565b955061105a60e08e01610ca0565b94506101008d013591508082111561107157600080fd5b61107d8e838f01610d8a565b93506101208d013591508082111561109457600080fd5b506110a18d828e01610f3e565b9150509295989b9194979a5092959850565b6000602082840312156110c557600080fd5b5035919050565b6001600160a01b03169052565b600081518084526020808501945080840160005b838110156111125781516001600160a01b0316875295820195908201906001016110ed565b509495945050505050565b60208152600061113060208301846110d9565b9392505050565b60006020828403121561114957600080fd5b813561113081610c8b565b60008060008060008060008060008060006101608c8e03121561117657600080fd5b8b359a5060208c013599506001600160401b0360408d013581101561119a57600080fd5b6111aa8e60408f01358f01610d8a565b99508060608e013511156111bd57600080fd5b6111cd8e60608f01358f01610d8a565b98508060808e013511156111e057600080fd5b6111f08e60808f01358f01610d8a565b97506111fe60a08e01610ca0565b965060c08d0135955061121360e08e01610ca0565b94506112226101008e01610ca0565b9350806101208e0135111561123657600080fd5b6112478e6101208f01358f01610d8a565b9250806101408e0135111561125b57600080fd5b5061126d8d6101408e01358e01610f3e565b90509295989b509295989b9093969950565b8051610cab81610c8b565b60006020828403121561129c57600080fd5b815161113081610c8b565b9182526001600160a01b0316602082015260400190565b600081518084526020808501945080840160005b83811015611112578151875295820195908201906001016112d2565b86815285602082015260c06040820152600061130d60c08301876110d9565b828103606084015261131f81876112be565b9050828103608084015261133381866112be565b905082810360a084015261134781856112be565b9998505050505050505050565b602081528151602082015260208201516040820152600060408301516101808060608501526113876101a08501836110d9565b91506060850151601f19808685030160808701526113a584836112be565b935060808701519150808685030160a08701526113c284836112be565b935060a08701519150808685030160c08701526113df84836112be565b935060c087015191506113f560e08701836110cc565b60e0870151610100878101919091528701519150610120611418818801846110cc565b870151915061014061142c878201846110cc565b8088015192505061016081878603018188015261144985846112be565b90880151878203909201848801529350905061146583826110d9565b9695505050505050565b600082601f83011261148057600080fd5b81516020611490610dab83610d67565b82815260059290921b840181019181810190868411156114af57600080fd5b8286015b84811015610dea5780516114c681610c8b565b83529183019183016114b3565b60008060008060008060008060006101208a8c0312156114f257600080fd5b89516114fd81610c8b565b60208b81015160408d0151929b509950906001600160401b038082111561152357600080fd5b818d0191508d601f83011261153757600080fd5b81518181111561154957611549610d21565b61155b601f8201601f19168501610d37565b8181528f8583860101111561156f57600080fd5b60005b8281101561158d578481018601518282018701528501611572565b8281111561159e5760008684840101525b509a506115af905060608e0161127f565b985060808d0151975060a08d01519250808311156115cc57600080fd5b50506115da8c828d0161146f565b94505060c08a0151925060e08a015191506101008a015190509295985092959850929598565b634e487b7160e01b600052603260045260246000fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b87815260e06020820152600061167a60e08301896112be565b828103604084015261168c81896112be565b905082810360608401526116a081886112be565b905082810360808401526116b481876112be565b60a084019590955250506001600160a01b039190911660c09091015295945050505050565b60006000198214156116fb57634e487b7160e01b600052601160045260246000fd5b506001019056fea264697066735822122015f7fc81e0ac65e63a8a583a41d991165e13f5e985a28a0cdc8a0d780751b13064736f6c63430008090033","address":"0xb369bCA3e7F0f537D53F5DC1A88D131a9ebc6c98","implementation":"0xC450bA9Ad1021c08cbAc8b7dCDcFeb586CC7fe84","version":"v2.1.0","libraries":{}}')}}]);