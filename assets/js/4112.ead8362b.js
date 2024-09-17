"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4112],{4112:e=>{e.exports=JSON.parse('{"name":"EscrowComputeExecutionTemplate","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_accessConsumer","type":"address"},{"indexed":true,"internalType":"address","name":"_accessProvider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIdSeeds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32","name":"_idSeed","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_creator","type":"address"}],"name":"AgreementCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2e166f3e"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4183e72b"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPay","outputs":[],"stateMutability":"payable","type":"function","signature":"0x6104ff1a"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPayEscrow","outputs":[],"stateMutability":"payable","type":"function","signature":"0xf8fe1070"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"getAgreementData","outputs":[{"internalType":"address","name":"accessConsumer","type":"address"},{"internalType":"address","name":"accessProvider","type":"address"},{"internalType":"bytes32","name":"did","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0x6ff015ae"},{"inputs":[],"name":"getConditionTypes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","signature":"0x91a169bf"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[],"name":"getNvmConfigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xab9de230"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"hasNVMOperatorRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x108762d0"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_agreementStoreManagerAddress","type":"address"},{"internalType":"address","name":"_didRegistryAddress","type":"address"},{"internalType":"address","name":"_computeExecutionConditionAddress","type":"address"},{"internalType":"address","name":"_lockPaymentConditionAddress","type":"address"},{"internalType":"address payable","name":"_escrowPaymentAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xcc2a9a5b"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x572b6c05"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function","signature":"0x06fdde03"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50611c19806100206000396000f3fe6080604052600436106100ef5760003560e01c806306fdde03146100f4578063108762d01461014957806316279055146101795780632e166f3e1461019a5780634183e72b146101bc578063572b6c05146101dc5780635ced058e146101fc5780635ea3ab85146102275780636104ff1a146102555780636fd902e1146102685780636ff015ae1461027b578063715018a6146102c157806382c947b7146102d65780638da5cb5b146102fd57806391a169bf14610312578063ab9de23014610334578063cc2a9a5b14610349578063ce1b815f14610369578063f2fde38b1461037e578063f8fe10701461039e575b600080fd5b34801561010057600080fd5b50604080518082018252601e81527f457363726f77436f6d70757465457865637574696f6e54656d706c617465000060208201529051610140919061109b565b60405180910390f35b34801561015557600080fd5b506101696101643660046110f3565b6103b1565b6040519015158152602001610140565b34801561018557600080fd5b506101696101943660046110f3565b3b151590565b3480156101a657600080fd5b506101ba6101b53660046111e4565b610449565b005b3480156101c857600080fd5b506101ba6101d736600461127f565b6104f0565b3480156101e857600080fd5b506101696101f73660046110f3565b610513565b34801561020857600080fd5b5061021a61021736600461132d565b90565b6040516101409190611353565b34801561023357600080fd5b50610247610242366004611367565b610538565b604051908152602001610140565b6101ba610263366004611407565b610587565b34801561027457600080fd5b5043610247565b34801561028757600080fd5b5061029b61029636600461132d565b6106a3565b604080516001600160a01b03948516815293909216602084015290820152606001610140565b3480156102cd57600080fd5b506101ba61081a565b3480156102e257600080fd5b506102476102f13660046110f3565b6001600160a01b031690565b34801561030957600080fd5b5061021a61082e565b34801561031e57600080fd5b5061032761083d565b604051610140919061155c565b34801561034057600080fd5b5061021a61089f565b34801561035557600080fd5b506101ba61036436600461156f565b610934565b34801561037557600080fd5b5061021a610bca565b34801561038a57600080fd5b506101ba6103993660046110f3565b610c55565b6101ba6103ac3660046115e3565b610cce565b6000806103bc61089f565b90506001600160a01b0381166103d55750600092915050565b604051630108762d60e41b81526001600160a01b0382169063108762d090610401908690600401611353565b602060405180830381865afa15801561041e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610442919061171e565b9392505050565b6066546001600160a01b031663955d0c2a86610463610cfb565b604051602001610474929190611739565b604051602081830303815290604052805190602001208661049361083d565b8787876040518763ffffffff1660e01b81526004016104b796959493929190611780565b600060405180830381600087803b1580156104d157600080fd5b505af11580156104e5573d6000803e3d6000fd5b505050505050505050565b6104fd8686868686610449565b61050b868685858589610d05565b505050505050565b600061051d610bca565b6001600160a01b0316826001600160a01b0316149050919050565b60008060005b835181101561058057838181518110610559576105596117e6565b60200260200101518261056c9190611812565b91508061057881611825565b91505061053e565b5092915050565b6066546040805161018081019091526001600160a01b0390911690637c719793903490808e6105b4610cfb565b6040516020016105c5929190611739565b6040516020818303038152906040528051906020012081526020018d81526020016105ee61083d565b81526020018c81526020018b81526020018a815260200161060d610cfb565b6001600160a01b03168152602001898152602001886001600160a01b03168152602001876001600160a01b03168152602001868152602001858152506040518363ffffffff1660e01b8152600401610665919061183e565b6000604051808303818588803b15801561067e57600080fd5b505af1158015610692573d6000803e3d6000fd5b505050505050505050505050505050565b6000806000806000905060606000606660009054906101000a90046001600160a01b03166001600160a01b031663579e6e3f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610704573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107289190611964565b600088815260676020526040908190206002015490516322c6b51960e01b81529192506001600160a01b038316916322c6b5199161076c9160040190815260200190565b600060405180830381865afa158015610789573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107b19190810190611a48565b5050815196995090975050931593506107ea9250505057816000815181106107db576107db6117e6565b602002602001015194506107ee565b8294505b5050506000938452506067602052604090922080546002909101546001600160a01b0390911693909150565b610822610dd1565b61082c6000610e40565b565b6033546001600160a01b031690565b6060606580548060200260200160405190810160405280929190818152602001828054801561089557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610877575b5050505050905090565b6066546000906001600160a01b03166108b85750600090565b606660009054906101000a90046001600160a01b03166001600160a01b031663ab9de2306040518163ffffffff1660e01b8152600401602060405180830381865afa15801561090b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092f9190611964565b905090565b600054610100900460ff16158080156109545750600054600160ff909116105b8061096e5750303b15801561096e575060005460ff166001145b6109d65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156109f9576000805461ff0019166101001790555b6001600160a01b03871615801590610a1957506001600160a01b03861615155b8015610a2d57506001600160a01b03851615155b8015610a4157506001600160a01b03841615155b8015610a5557506001600160a01b03831615155b8015610a6957506001600160a01b03821615155b610aa75760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016109cd565b610aaf610e92565b610ab887610c55565b606680546001600160a01b03199081166001600160a01b0389811691909117909255606980548216888416179055606a80548216878416908117909155606b80548316878516178155606c80548416878616178155606580546001818101835560008390527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c7918201805488169096179095559254815480860183558401805491881691871691909117905590548154938401909155910180549190931691161790558015610bc1576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050505050565b600080610bd561089f565b90506001600160a01b038116610bed57600091505090565b806001600160a01b031663ce1b815f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4f9190611964565b91505090565b610c5d610dd1565b6001600160a01b038116610cc25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016109cd565b610ccb81610e40565b50565b610ce08b8b8b8b8b8a8a8a8a8a610587565b610cee8b8b8a8a8a8e610d05565b5050505050505050505050565b600061092f610ec1565b600086610d10610cfb565b604051602001610d21929190611739565b60408051808303601f19018152918152815160209283012060008181526067909352912080546001600160a01b0319166001600160a01b038681169182178355600283018a9055600190920154929350911690827f07999de014823a9b9957f806838838c2ef506d5cea4edf7a268607b0b3a0be3489898988610da48f82610eef565b8f610dad610cfb565b604051610dc09796959493929190611b20565b60405180910390a450505050505050565b610dd9610cfb565b6001600160a01b0316610dea61082e565b6001600160a01b03161461082c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016109cd565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610eb95760405162461bcd60e51b81526004016109cd90611b98565b61082c611040565b600060143610801590610ed85750610ed833610513565b15610eea575060131936013560601c90565b503390565b6060600083610efc610cfb565b604051602001610f0d929190611739565b604051602081830303815290604052805190602001209050600083516001600160401b03811115610f4057610f40611110565b604051908082528060200260200182016040528015610f69578160200160208202803683370190505b50905060005b8151811015611035578260658281548110610f8c57610f8c6117e6565b9060005260206000200160009054906101000a90046001600160a01b0316868381518110610fbc57610fbc6117e6565b6020026020010151604051602001610ff0939291909283526001600160a01b03919091166020830152604082015260600190565b60405160208183030381529060405280519060200120828281518110611018576110186117e6565b60209081029190910101528061102d81611825565b915050610f6f565b509150505b92915050565b600054610100900460ff166110675760405162461bcd60e51b81526004016109cd90611b98565b61082c611072610cfb565b610e40565b60005b8381101561109257818101518382015260200161107a565b50506000910152565b60208152600082518060208401526110ba816040850160208701611077565b601f01601f19169190910160400192915050565b6001600160a01b0381168114610ccb57600080fd5b80356110ee816110ce565b919050565b60006020828403121561110557600080fd5b8135610442816110ce565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561114e5761114e611110565b604052919050565b60006001600160401b0382111561116f5761116f611110565b5060051b60200190565b600082601f83011261118a57600080fd5b8135602061119f61119a83611156565b611126565b82815260059290921b840181019181810190868411156111be57600080fd5b8286015b848110156111d957803583529183019183016111c2565b509695505050505050565b600080600080600060a086880312156111fc57600080fd5b853594506020860135935060408601356001600160401b038082111561122157600080fd5b61122d89838a01611179565b9450606088013591508082111561124357600080fd5b61124f89838a01611179565b9350608088013591508082111561126557600080fd5b5061127288828901611179565b9150509295509295909350565b60008060008060008060c0878903121561129857600080fd5b863595506020870135945060408701356001600160401b03808211156112bd57600080fd5b6112c98a838b01611179565b955060608901359150808211156112df57600080fd5b6112eb8a838b01611179565b9450608089013591508082111561130157600080fd5b5061130e89828a01611179565b92505060a087013561131f816110ce565b809150509295509295509295565b60006020828403121561133f57600080fd5b5035919050565b6001600160a01b03169052565b6001600160a01b0391909116815260200190565b60006020828403121561137957600080fd5b81356001600160401b0381111561138f57600080fd5b61139b84828501611179565b949350505050565b600082601f8301126113b457600080fd5b813560206113c461119a83611156565b82815260059290921b840181019181810190868411156113e357600080fd5b8286015b848110156111d95780356113fa816110ce565b83529183019183016113e7565b6000806000806000806000806000806101408b8d03121561142757600080fd5b8a35995060208b0135985060408b01356001600160401b038082111561144c57600080fd5b6114588e838f01611179565b995060608d013591508082111561146e57600080fd5b61147a8e838f01611179565b985060808d013591508082111561149057600080fd5b61149c8e838f01611179565b975060a08d013596506114b160c08e016110e3565b95506114bf60e08e016110e3565b94506101008d01359150808211156114d657600080fd5b6114e28e838f01611179565b93506101208d01359150808211156114f957600080fd5b506115068d828e016113a3565b9150509295989b9194979a5092959850565b600081518084526020808501945080840160005b838110156115515781516001600160a01b03168752958201959082019060010161152c565b509495945050505050565b6020815260006104426020830184611518565b60008060008060008060c0878903121561158857600080fd5b8635611593816110ce565b955060208701356115a3816110ce565b945060408701356115b3816110ce565b935060608701356115c3816110ce565b925060808701356115d3816110ce565b915060a087013561131f816110ce565b60008060008060008060008060008060006101608c8e03121561160557600080fd5b8b359a5060208c013599506001600160401b0360408d013581101561162957600080fd5b6116398e60408f01358f01611179565b99508060608e0135111561164c57600080fd5b61165c8e60608f01358f01611179565b98508060808e0135111561166f57600080fd5b61167f8e60808f01358f01611179565b975061168d60a08e016110e3565b965060c08d013595506116a260e08e016110e3565b94506116b16101008e016110e3565b9350806101208e013511156116c557600080fd5b6116d68e6101208f01358f01611179565b9250806101408e013511156116ea57600080fd5b506116fc8d6101408e01358e016113a3565b90509295989b509295989b9093969950565b805180151581146110ee57600080fd5b60006020828403121561173057600080fd5b6104428261170e565b9182526001600160a01b0316602082015260400190565b600081518084526020808501945080840160005b8381101561155157815187529582019590820190600101611764565b86815285602082015260c06040820152600061179f60c0830187611518565b82810360608401526117b18187611750565b905082810360808401526117c58186611750565b905082810360a08401526117d98185611750565b9998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561103a5761103a6117fc565b600060018201611837576118376117fc565b5060010190565b602081528151602082015260208201516040820152600060408301516101808060608501526118716101a0850183611518565b91506060850151601f198086850301608087015261188f8483611750565b935060808701519150808685030160a08701526118ac8483611750565b935060a08701519150808685030160c08701526118c98483611750565b935060c087015191506118df60e0870183611346565b60e087015161010087810191909152870151915061012061190281880184611346565b870151915061014061191687820184611346565b808801519250506101608187860301818801526119338584611750565b90880151878203909201848801529350905061194f8382611518565b9695505050505050565b80516110ee816110ce565b60006020828403121561197657600080fd5b8151610442816110ce565b600082601f83011261199257600080fd5b81516001600160401b038111156119ab576119ab611110565b6119be601f8201601f1916602001611126565b8181528460208386010111156119d357600080fd5b61139b826020830160208701611077565b600082601f8301126119f557600080fd5b81516020611a0561119a83611156565b82815260059290921b84018101918181019086841115611a2457600080fd5b8286015b848110156111d9578051611a3b816110ce565b8352918301918301611a28565b60008060008060008060008060006101208a8c031215611a6757600080fd5b611a708a611959565b60208b015160408c0151919a5098506001600160401b0380821115611a9457600080fd5b611aa08d838e01611981565b9850611aae60608d01611959565b975060808c0151965060a08c0151915080821115611acb57600080fd5b611ad78d838e016119e4565b955060c08c0151945060e08c0151915080821115611af457600080fd5b50611b018c828d01611981565b925050611b116101008b0161170e565b90509295985092959850929598565b87815260e060208201526000611b3960e0830189611750565b8281036040840152611b4b8189611750565b90508281036060840152611b5f8188611750565b90508281036080840152611b738187611750565b60a084019590955250506001600160a01b039190911660c09091015295945050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea264697066735822122005f80e72d1a572f9b1e5e959d64400aaa64d646c44c0d9547ffc207438c6197864736f6c63430008110033","address":"0x72F7ca14378e23D801aF9cF3479F7Df5194d4537","implementation":"0x72F7ca14378e23D801aF9cF3479F7Df5194d4537","version":"v3.5.5","libraries":{}}')}}]);