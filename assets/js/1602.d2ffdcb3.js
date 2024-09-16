"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1602],{30146:e=>{e.exports=JSON.parse('{"name":"NFTAccessProofTemplate","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_accessConsumer","type":"address"},{"indexed":true,"internalType":"address","name":"_accessProvider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIdSeeds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32","name":"_idSeed","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_creator","type":"address"}],"name":"AgreementCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2e166f3e"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4183e72b"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPay","outputs":[],"stateMutability":"payable","type":"function","signature":"0x6104ff1a"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPayEscrow","outputs":[],"stateMutability":"payable","type":"function","signature":"0xf8fe1070"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"getAgreementData","outputs":[{"internalType":"address","name":"accessConsumer","type":"address"},{"internalType":"address","name":"accessProvider","type":"address"}],"stateMutability":"view","type":"function","signature":"0x6ff015ae"},{"inputs":[],"name":"getConditionTypes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","signature":"0x91a169bf"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_agreementStoreManagerAddress","type":"address"},{"internalType":"address","name":"_nftHolderConditionAddress","type":"address"},{"internalType":"address","name":"_accessConditionAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf8c8765e"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b506116ca806100206000396000f3fe6080604052600436106100815760003560e01c80632e166f3e146100865780634183e72b146100a85780636104ff1a146100c85780636ff015ae146100db578063715018a6146101205780638da5cb5b1461013557806391a169bf14610162578063f2fde38b14610184578063f8c8765e146101a4578063f8fe1070146101c4575b600080fd5b34801561009257600080fd5b506100a66100a1366004610d06565b6101d7565b005b3480156100b457600080fd5b506100a66100c3366004610dc6565b61027b565b6100a66100d6366004610ed8565b61029e565b3480156100e757600080fd5b506100fb6100f6366004610fe9565b6103a8565b604080516001600160a01b039384168152929091166020830152015b60405180910390f35b34801561012c57600080fd5b506100a661052d565b34801561014157600080fd5b5061014a610541565b6040516001600160a01b039091168152602001610117565b34801561016e57600080fd5b50610177610550565b6040516101179190611053565b34801561019057600080fd5b506100a661019f36600461106d565b6105b2565b3480156101b057600080fd5b506100a66101bf36600461108a565b610630565b6100a66101d23660046110e6565b6108ef565b6066546040516001600160a01b039091169063955d0c2a906101ff9088903390602001611211565b604051602081830303815290604052805190602001208661021e610550565b8787876040518763ffffffff1660e01b815260040161024296959493929190611258565b600060405180830381600087803b15801561025c57600080fd5b505af1158015610270573d6000803e3d6000fd5b505050505050505050565b61028886868686866101d7565b61029686868585858961091c565b505050505050565b6066546040805161018081019091526001600160a01b0390911690637c719793903490806102d18f336101a08401611211565b6040516020818303038152906040528051906020012081526020018d81526020016102fa610550565b81526020018c81526020018b81526020018a8152602001336001600160a01b03168152602001898152602001886001600160a01b03168152602001876001600160a01b03168152602001868152602001858152506040518363ffffffff1660e01b815260040161036a91906112be565b6000604051808303818588803b15801561038357600080fd5b505af1158015610397573d6000803e3d6000fd5b505050505050505050505050505050565b600080600060606000606660009054906101000a90046001600160a01b03166001600160a01b031663579e6e3f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103ff57600080fd5b505afa158015610413573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043791906113e4565b600087815260676020526040908190206002015490516322c6b51960e01b81529192506001600160a01b038316916322c6b5199161047b9160040190815260200190565b60006040518083038186803b15801561049357600080fd5b505afa1580156104a7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104cf9190810190611465565b5050815196995090975050931593506105089250505057816000815181106104f9576104f9611592565b6020026020010151935061050c565b8293505b505050600092835260676020526040909220546001600160a01b0316929050565b6105356109da565b61053f6000610a39565b565b6033546001600160a01b031690565b606060658054806020026020016040519081016040528092919081815260200182805480156105a857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161058a575b5050505050905090565b6105ba6109da565b6001600160a01b0381166106245760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61062d81610a39565b50565b600054610100900460ff16158080156106505750600054600160ff909116105b8061066a5750303b15801561066a575060005460ff166001145b6106cd5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161061b565b6000805460ff1916600117905580156106f0576000805461ff0019166101001790555b6001600160a01b0385161580159061071057506001600160a01b03841615155b801561072457506001600160a01b03831615155b801561073857506001600160a01b03821615155b6107765760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b604482015260640161061b565b61077e610a8b565b610787856105b2565b606680546001600160a01b0319166001600160a01b0386169081179091556040805163579e6e3f60e01b8152905163579e6e3f91600480820192602092909190829003018186803b1580156107db57600080fd5b505afa1580156107ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081391906113e4565b606980546001600160a01b03199081166001600160a01b0393841617909155606a80548216868416908117909155606b80548316868516178155606580546001818101835560008390527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c791820180548716909517909455915481549384019091559101805491909316911617905580156108e8576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050565b6109018b8b8b8b8b8a8a8a8a8a61029e565b61090f8b8b8a8a8a8e61091c565b5050505050505050505050565b60008633604051602001610931929190611211565b60408051808303601f19018152918152815160209283012060008181526067909352912080546001600160a01b0319166001600160a01b038681169182178355600283018a9055600190920154929350911690827f07999de014823a9b9957f806838838c2ef506d5cea4edf7a268607b0b3a0be34898989886109b48f82610aba565b8f336040516109c997969594939291906115a8565b60405180910390a450505050505050565b336109e3610541565b6001600160a01b03161461053f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161061b565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610ab25760405162461bcd60e51b815260040161061b90611620565b61053f610c02565b606060008333604051602001610ad1929190611211565b604051602081830303815290604052805190602001209050600083516001600160401b03811115610b0457610b04610c32565b604051908082528060200260200182016040528015610b2d578160200160208202803683370190505b50905060005b8151811015610bf9578260658281548110610b5057610b50611592565b9060005260206000200160009054906101000a90046001600160a01b0316868381518110610b8057610b80611592565b6020026020010151604051602001610bb4939291909283526001600160a01b03919091166020830152604082015260600190565b60405160208183030381529060405280519060200120828281518110610bdc57610bdc611592565b602090810291909101015280610bf18161166b565b915050610b33565b50949350505050565b600054610100900460ff16610c295760405162461bcd60e51b815260040161061b90611620565b61053f33610a39565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715610c7057610c70610c32565b604052919050565b60006001600160401b03821115610c9157610c91610c32565b5060051b60200190565b600082601f830112610cac57600080fd5b81356020610cc1610cbc83610c78565b610c48565b82815260059290921b84018101918181019086841115610ce057600080fd5b8286015b84811015610cfb5780358352918301918301610ce4565b509695505050505050565b600080600080600060a08688031215610d1e57600080fd5b853594506020860135935060408601356001600160401b0380821115610d4357600080fd5b610d4f89838a01610c9b565b94506060880135915080821115610d6557600080fd5b610d7189838a01610c9b565b93506080880135915080821115610d8757600080fd5b50610d9488828901610c9b565b9150509295509295909350565b6001600160a01b038116811461062d57600080fd5b8035610dc181610da1565b919050565b60008060008060008060c08789031215610ddf57600080fd5b863595506020870135945060408701356001600160401b0380821115610e0457600080fd5b610e108a838b01610c9b565b95506060890135915080821115610e2657600080fd5b610e328a838b01610c9b565b94506080890135915080821115610e4857600080fd5b50610e5589828a01610c9b565b92505060a0870135610e6681610da1565b809150509295509295509295565b600082601f830112610e8557600080fd5b81356020610e95610cbc83610c78565b82815260059290921b84018101918181019086841115610eb457600080fd5b8286015b84811015610cfb578035610ecb81610da1565b8352918301918301610eb8565b6000806000806000806000806000806101408b8d031215610ef857600080fd5b8a35995060208b0135985060408b01356001600160401b0380821115610f1d57600080fd5b610f298e838f01610c9b565b995060608d0135915080821115610f3f57600080fd5b610f4b8e838f01610c9b565b985060808d0135915080821115610f6157600080fd5b610f6d8e838f01610c9b565b975060a08d01359650610f8260c08e01610db6565b9550610f9060e08e01610db6565b94506101008d0135915080821115610fa757600080fd5b610fb38e838f01610c9b565b93506101208d0135915080821115610fca57600080fd5b50610fd78d828e01610e74565b9150509295989b9194979a5092959850565b600060208284031215610ffb57600080fd5b5035919050565b6001600160a01b03169052565b600081518084526020808501945080840160005b838110156110485781516001600160a01b031687529582019590820190600101611023565b509495945050505050565b602081526000611066602083018461100f565b9392505050565b60006020828403121561107f57600080fd5b813561106681610da1565b600080600080608085870312156110a057600080fd5b84356110ab81610da1565b935060208501356110bb81610da1565b925060408501356110cb81610da1565b915060608501356110db81610da1565b939692955090935050565b60008060008060008060008060008060006101608c8e03121561110857600080fd5b8b359a5060208c013599506001600160401b0360408d013581101561112c57600080fd5b61113c8e60408f01358f01610c9b565b99508060608e0135111561114f57600080fd5b61115f8e60608f01358f01610c9b565b98508060808e0135111561117257600080fd5b6111828e60808f01358f01610c9b565b975061119060a08e01610db6565b965060c08d013595506111a560e08e01610db6565b94506111b46101008e01610db6565b9350806101208e013511156111c857600080fd5b6111d98e6101208f01358f01610c9b565b9250806101408e013511156111ed57600080fd5b506111ff8d6101408e01358e01610e74565b90509295989b509295989b9093969950565b9182526001600160a01b0316602082015260400190565b600081518084526020808501945080840160005b838110156110485781518752958201959082019060010161123c565b86815285602082015260c06040820152600061127760c083018761100f565b82810360608401526112898187611228565b9050828103608084015261129d8186611228565b905082810360a08401526112b18185611228565b9998505050505050505050565b602081528151602082015260208201516040820152600060408301516101808060608501526112f16101a085018361100f565b91506060850151601f198086850301608087015261130f8483611228565b935060808701519150808685030160a087015261132c8483611228565b935060a08701519150808685030160c08701526113498483611228565b935060c0870151915061135f60e0870183611002565b60e087015161010087810191909152870151915061012061138281880184611002565b870151915061014061139687820184611002565b808801519250506101608187860301818801526113b38584611228565b9088015187820390920184880152935090506113cf838261100f565b9695505050505050565b8051610dc181610da1565b6000602082840312156113f657600080fd5b815161106681610da1565b600082601f83011261141257600080fd5b81516020611422610cbc83610c78565b82815260059290921b8401810191818101908684111561144157600080fd5b8286015b84811015610cfb57805161145881610da1565b8352918301918301611445565b60008060008060008060008060006101208a8c03121561148457600080fd5b895161148f81610da1565b60208b81015160408d0151929b509950906001600160401b03808211156114b557600080fd5b818d0191508d601f8301126114c957600080fd5b8151818111156114db576114db610c32565b6114ed601f8201601f19168501610c48565b8181528f8583860101111561150157600080fd5b60005b8281101561151f578481018601518282018701528501611504565b828111156115305760008684840101525b509a50611541905060608e016113d9565b985060808d0151975060a08d015192508083111561155e57600080fd5b505061156c8c828d01611401565b94505060c08a0151925060e08a015191506101008a015190509295985092959850929598565b634e487b7160e01b600052603260045260246000fd5b87815260e0602082015260006115c160e0830189611228565b82810360408401526115d38189611228565b905082810360608401526115e78188611228565b905082810360808401526115fb8187611228565b60a084019590955250506001600160a01b039190911660c09091015295945050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600060001982141561168d57634e487b7160e01b600052601160045260246000fd5b506001019056fea264697066735822122001006fae1194b73e20c32134af31404ff1557cfe3563e76128f0b9793790de6864736f6c63430008090033","address":"0x68ADc18C0624b85411A6E743ba3D4fDD83DEbFA6","implementation":"0xfA589f9889b8924B00EB112C30Cb946c83E1a4a3","version":"v2.1.0","libraries":{}}')}}]);