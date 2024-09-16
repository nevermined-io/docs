"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9665],{39665:e=>{e.exports=JSON.parse('{"name":"AccessTemplate","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_accessConsumer","type":"address"},{"indexed":true,"internalType":"address","name":"_accessProvider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIdSeeds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32","name":"_idSeed","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_creator","type":"address"}],"name":"AgreementCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2e166f3e"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4183e72b"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPay","outputs":[],"stateMutability":"payable","type":"function","signature":"0x6104ff1a"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPayEscrow","outputs":[],"stateMutability":"payable","type":"function","signature":"0xf8fe1070"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"getAgreementData","outputs":[{"internalType":"address","name":"accessConsumer","type":"address"},{"internalType":"address","name":"accessProvider","type":"address"}],"stateMutability":"view","type":"function","signature":"0x6ff015ae"},{"inputs":[],"name":"getConditionTypes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","signature":"0x91a169bf"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_agreementStoreManagerAddress","type":"address"},{"internalType":"address","name":"_didRegistryAddress","type":"address"},{"internalType":"address","name":"_accessConditionAddress","type":"address"},{"internalType":"address","name":"_lockConditionAddress","type":"address"},{"internalType":"address payable","name":"_escrowConditionAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xcc2a9a5b"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b506116b4806100206000396000f3fe6080604052600436106100815760003560e01c80632e166f3e146100865780634183e72b146100a85780636104ff1a146100c85780636ff015ae146100db578063715018a6146101205780638da5cb5b1461013557806391a169bf14610162578063cc2a9a5b14610184578063f2fde38b146101a4578063f8fe1070146101c4575b600080fd5b34801561009257600080fd5b506100a66100a1366004610cd8565b6101d7565b005b3480156100b457600080fd5b506100a66100c3366004610d98565b61027b565b6100a66100d6366004610eaa565b61029e565b3480156100e757600080fd5b506100fb6100f6366004610fbb565b6103a8565b604080516001600160a01b039384168152929091166020830152015b60405180910390f35b34801561012c57600080fd5b506100a661052d565b34801561014157600080fd5b5061014a610541565b6040516001600160a01b039091168152602001610117565b34801561016e57600080fd5b50610177610550565b6040516101179190611025565b34801561019057600080fd5b506100a661019f36600461103f565b6105b2565b3480156101b057600080fd5b506100a66101bf3660046110b3565b610848565b6100a66101d23660046110d0565b6108c1565b6066546040516001600160a01b039091169063955d0c2a906101ff90889033906020016111fb565b604051602081830303815290604052805190602001208661021e610550565b8787876040518763ffffffff1660e01b815260040161024296959493929190611242565b600060405180830381600087803b15801561025c57600080fd5b505af1158015610270573d6000803e3d6000fd5b505050505050505050565b61028886868686866101d7565b6102968686858585896108ee565b505050505050565b6066546040805161018081019091526001600160a01b0390911690637c719793903490806102d18f336101a084016111fb565b6040516020818303038152906040528051906020012081526020018d81526020016102fa610550565b81526020018c81526020018b81526020018a8152602001336001600160a01b03168152602001898152602001886001600160a01b03168152602001876001600160a01b03168152602001868152602001858152506040518363ffffffff1660e01b815260040161036a91906112a8565b6000604051808303818588803b15801561038357600080fd5b505af1158015610397573d6000803e3d6000fd5b505050505050505050505050505050565b600080600060606000606660009054906101000a90046001600160a01b03166001600160a01b031663579e6e3f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103ff57600080fd5b505afa158015610413573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043791906113ce565b600087815260676020526040908190206002015490516322c6b51960e01b81529192506001600160a01b038316916322c6b5199161047b9160040190815260200190565b60006040518083038186803b15801561049357600080fd5b505afa1580156104a7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104cf919081019061144f565b5050815196995090975050931593506105089250505057816000815181106104f9576104f961157c565b6020026020010151935061050c565b8293505b505050600092835260676020526040909220546001600160a01b0316929050565b6105356109ac565b61053f6000610a0b565b565b6033546001600160a01b031690565b606060658054806020026020016040519081016040528092919081815260200182805480156105a857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161058a575b5050505050905090565b600054610100900460ff16158080156105d25750600054600160ff909116105b806105ec5750303b1580156105ec575060005460ff166001145b6106545760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610677576000805461ff0019166101001790555b6001600160a01b0387161580159061069757506001600160a01b03861615155b80156106ab57506001600160a01b03851615155b80156106bf57506001600160a01b03841615155b80156106d357506001600160a01b03831615155b80156106e757506001600160a01b03821615155b6107255760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b604482015260640161064b565b61072d610a5d565b61073687610848565b606680546001600160a01b03199081166001600160a01b0389811691909117909255606980548216888416179055606a80548216878416908117909155606b80548316878516178155606c80548416878616178155606580546001818101835560008390527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c791820180548816909617909555925481548086018355840180549188169187169190911790559054815493840190915591018054919093169116179055801561083f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050505050565b6108506109ac565b6001600160a01b0381166108b55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161064b565b6108be81610a0b565b50565b6108d38b8b8b8b8b8a8a8a8a8a61029e565b6108e18b8b8a8a8a8e6108ee565b5050505050505050505050565b600086336040516020016109039291906111fb565b60408051808303601f19018152918152815160209283012060008181526067909352912080546001600160a01b0319166001600160a01b038681169182178355600283018a9055600190920154929350911690827f07999de014823a9b9957f806838838c2ef506d5cea4edf7a268607b0b3a0be34898989886109868f82610a8c565b8f3360405161099b9796959493929190611592565b60405180910390a450505050505050565b336109b5610541565b6001600160a01b03161461053f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161064b565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610a845760405162461bcd60e51b815260040161064b9061160a565b61053f610bd4565b606060008333604051602001610aa39291906111fb565b604051602081830303815290604052805190602001209050600083516001600160401b03811115610ad657610ad6610c04565b604051908082528060200260200182016040528015610aff578160200160208202803683370190505b50905060005b8151811015610bcb578260658281548110610b2257610b2261157c565b9060005260206000200160009054906101000a90046001600160a01b0316868381518110610b5257610b5261157c565b6020026020010151604051602001610b86939291909283526001600160a01b03919091166020830152604082015260600190565b60405160208183030381529060405280519060200120828281518110610bae57610bae61157c565b602090810291909101015280610bc381611655565b915050610b05565b50949350505050565b600054610100900460ff16610bfb5760405162461bcd60e51b815260040161064b9061160a565b61053f33610a0b565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715610c4257610c42610c04565b604052919050565b60006001600160401b03821115610c6357610c63610c04565b5060051b60200190565b600082601f830112610c7e57600080fd5b81356020610c93610c8e83610c4a565b610c1a565b82815260059290921b84018101918181019086841115610cb257600080fd5b8286015b84811015610ccd5780358352918301918301610cb6565b509695505050505050565b600080600080600060a08688031215610cf057600080fd5b853594506020860135935060408601356001600160401b0380821115610d1557600080fd5b610d2189838a01610c6d565b94506060880135915080821115610d3757600080fd5b610d4389838a01610c6d565b93506080880135915080821115610d5957600080fd5b50610d6688828901610c6d565b9150509295509295909350565b6001600160a01b03811681146108be57600080fd5b8035610d9381610d73565b919050565b60008060008060008060c08789031215610db157600080fd5b863595506020870135945060408701356001600160401b0380821115610dd657600080fd5b610de28a838b01610c6d565b95506060890135915080821115610df857600080fd5b610e048a838b01610c6d565b94506080890135915080821115610e1a57600080fd5b50610e2789828a01610c6d565b92505060a0870135610e3881610d73565b809150509295509295509295565b600082601f830112610e5757600080fd5b81356020610e67610c8e83610c4a565b82815260059290921b84018101918181019086841115610e8657600080fd5b8286015b84811015610ccd578035610e9d81610d73565b8352918301918301610e8a565b6000806000806000806000806000806101408b8d031215610eca57600080fd5b8a35995060208b0135985060408b01356001600160401b0380821115610eef57600080fd5b610efb8e838f01610c6d565b995060608d0135915080821115610f1157600080fd5b610f1d8e838f01610c6d565b985060808d0135915080821115610f3357600080fd5b610f3f8e838f01610c6d565b975060a08d01359650610f5460c08e01610d88565b9550610f6260e08e01610d88565b94506101008d0135915080821115610f7957600080fd5b610f858e838f01610c6d565b93506101208d0135915080821115610f9c57600080fd5b50610fa98d828e01610e46565b9150509295989b9194979a5092959850565b600060208284031215610fcd57600080fd5b5035919050565b6001600160a01b03169052565b600081518084526020808501945080840160005b8381101561101a5781516001600160a01b031687529582019590820190600101610ff5565b509495945050505050565b6020815260006110386020830184610fe1565b9392505050565b60008060008060008060c0878903121561105857600080fd5b863561106381610d73565b9550602087013561107381610d73565b9450604087013561108381610d73565b9350606087013561109381610d73565b925060808701356110a381610d73565b915060a0870135610e3881610d73565b6000602082840312156110c557600080fd5b813561103881610d73565b60008060008060008060008060008060006101608c8e0312156110f257600080fd5b8b359a5060208c013599506001600160401b0360408d013581101561111657600080fd5b6111268e60408f01358f01610c6d565b99508060608e0135111561113957600080fd5b6111498e60608f01358f01610c6d565b98508060808e0135111561115c57600080fd5b61116c8e60808f01358f01610c6d565b975061117a60a08e01610d88565b965060c08d0135955061118f60e08e01610d88565b945061119e6101008e01610d88565b9350806101208e013511156111b257600080fd5b6111c38e6101208f01358f01610c6d565b9250806101408e013511156111d757600080fd5b506111e98d6101408e01358e01610e46565b90509295989b509295989b9093969950565b9182526001600160a01b0316602082015260400190565b600081518084526020808501945080840160005b8381101561101a57815187529582019590820190600101611226565b86815285602082015260c06040820152600061126160c0830187610fe1565b82810360608401526112738187611212565b905082810360808401526112878186611212565b905082810360a084015261129b8185611212565b9998505050505050505050565b602081528151602082015260208201516040820152600060408301516101808060608501526112db6101a0850183610fe1565b91506060850151601f19808685030160808701526112f98483611212565b935060808701519150808685030160a08701526113168483611212565b935060a08701519150808685030160c08701526113338483611212565b935060c0870151915061134960e0870183610fd4565b60e087015161010087810191909152870151915061012061136c81880184610fd4565b870151915061014061138087820184610fd4565b8088015192505061016081878603018188015261139d8584611212565b9088015187820390920184880152935090506113b98382610fe1565b9695505050505050565b8051610d9381610d73565b6000602082840312156113e057600080fd5b815161103881610d73565b600082601f8301126113fc57600080fd5b8151602061140c610c8e83610c4a565b82815260059290921b8401810191818101908684111561142b57600080fd5b8286015b84811015610ccd57805161144281610d73565b835291830191830161142f565b60008060008060008060008060006101208a8c03121561146e57600080fd5b895161147981610d73565b60208b81015160408d0151929b509950906001600160401b038082111561149f57600080fd5b818d0191508d601f8301126114b357600080fd5b8151818111156114c5576114c5610c04565b6114d7601f8201601f19168501610c1a565b8181528f858386010111156114eb57600080fd5b60005b828110156115095784810186015182820187015285016114ee565b8281111561151a5760008684840101525b509a5061152b905060608e016113c3565b985060808d0151975060a08d015192508083111561154857600080fd5b50506115568c828d016113eb565b94505060c08a0151925060e08a015191506101008a015190509295985092959850929598565b634e487b7160e01b600052603260045260246000fd5b87815260e0602082015260006115ab60e0830189611212565b82810360408401526115bd8189611212565b905082810360608401526115d18188611212565b905082810360808401526115e58187611212565b60a084019590955250506001600160a01b039190911660c09091015295945050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600060001982141561167757634e487b7160e01b600052601160045260246000fd5b506001019056fea26469706673582212209ec15f37ac32a431123833907e9834f4e527a175830d24dbb32607c80dbee49764736f6c63430008090033","address":"0x95BE1256985D2E6eF677903128e46E046376A22b","implementation":"0x86B95024312bb4dc7B3fcff0bf06633eFDaD8D9a","version":"v2.1.0","libraries":{}}')}}]);