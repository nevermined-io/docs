"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8457],{48457:e=>{e.exports=JSON.parse('{"name":"NFT721AccessProofTemplate","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_accessConsumer","type":"address"},{"indexed":true,"internalType":"address","name":"_accessProvider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIdSeeds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32","name":"_idSeed","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_creator","type":"address"}],"name":"AgreementCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2e166f3e"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4183e72b"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPay","outputs":[],"stateMutability":"payable","type":"function","signature":"0x6104ff1a"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPayEscrow","outputs":[],"stateMutability":"payable","type":"function","signature":"0xf8fe1070"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"getAgreementData","outputs":[{"internalType":"address","name":"accessConsumer","type":"address"},{"internalType":"address","name":"accessProvider","type":"address"},{"internalType":"bytes32","name":"did","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0x6ff015ae"},{"inputs":[],"name":"getConditionTypes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","signature":"0x91a169bf"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[],"name":"getNvmConfigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xab9de230"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"hasNVMOperatorRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x108762d0"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_agreementStoreManagerAddress","type":"address"},{"internalType":"address","name":"_nftHolderConditionAddress","type":"address"},{"internalType":"address","name":"_accessConditionAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf8c8765e"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x572b6c05"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50611b8f806100206000396000f3fe6080604052600436106100e45760003560e01c8063108762d0146100e9578063162790551461011e5780632e166f3e1461013f5780634183e72b14610161578063572b6c05146101815780635ced058e146101a15780635ea3ab85146101cc5780636104ff1a146101fa5780636fd902e11461020d5780636ff015ae14610220578063715018a61461026657806382c947b71461027b5780638da5cb5b146102a257806391a169bf146102b7578063ab9de230146102d9578063ce1b815f146102ee578063f2fde38b14610303578063f8c8765e14610323578063f8fe107014610343575b600080fd5b3480156100f557600080fd5b50610109610104366004611060565b610356565b60405190151581526020015b60405180910390f35b34801561012a57600080fd5b50610109610139366004611060565b3b151590565b34801561014b57600080fd5b5061015f61015a366004611151565b6103ee565b005b34801561016d57600080fd5b5061015f61017c3660046111ec565b610495565b34801561018d57600080fd5b5061010961019c366004611060565b6104b8565b3480156101ad57600080fd5b506101bf6101bc36600461129a565b90565b60405161011591906112c0565b3480156101d857600080fd5b506101ec6101e73660046112d4565b6104dd565b604051908152602001610115565b61015f610208366004611374565b61052c565b34801561021957600080fd5b50436101ec565b34801561022c57600080fd5b5061024061023b36600461129a565b610648565b604080516001600160a01b03948516815293909216602084015290820152606001610115565b34801561027257600080fd5b5061015f6107bf565b34801561028757600080fd5b506101ec610296366004611060565b6001600160a01b031690565b3480156102ae57600080fd5b506101bf6107d3565b3480156102c357600080fd5b506102cc6107e2565b60405161011591906114c9565b3480156102e557600080fd5b506101bf610844565b3480156102fa57600080fd5b506101bf6108d9565b34801561030f57600080fd5b5061015f61031e366004611060565b610964565b34801561032f57600080fd5b5061015f61033e3660046114dc565b6109e2565b61015f610351366004611538565b610c92565b600080610361610844565b90506001600160a01b03811661037a5750600092915050565b604051630108762d60e41b81526001600160a01b0382169063108762d0906103a69086906004016112c0565b602060405180830381865afa1580156103c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e79190611673565b9392505050565b6066546001600160a01b031663955d0c2a86610408610cbf565b60405160200161041992919061168e565b60405160208183030381529060405280519060200120866104386107e2565b8787876040518763ffffffff1660e01b815260040161045c969594939291906116d5565b600060405180830381600087803b15801561047657600080fd5b505af115801561048a573d6000803e3d6000fd5b505050505050505050565b6104a286868686866103ee565b6104b0868685858589610cc9565b505050505050565b60006104c26108d9565b6001600160a01b0316826001600160a01b0316149050919050565b60008060005b8351811015610525578381815181106104fe576104fe61173b565b6020026020010151826105119190611767565b91508061051d8161177a565b9150506104e3565b5092915050565b6066546040805161018081019091526001600160a01b0390911690637c719793903490808e610559610cbf565b60405160200161056a92919061168e565b6040516020818303038152906040528051906020012081526020018d81526020016105936107e2565b81526020018c81526020018b81526020018a81526020016105b2610cbf565b6001600160a01b03168152602001898152602001886001600160a01b03168152602001876001600160a01b03168152602001868152602001858152506040518363ffffffff1660e01b815260040161060a9190611793565b6000604051808303818588803b15801561062357600080fd5b505af1158015610637573d6000803e3d6000fd5b505050505050505050505050505050565b6000806000806000905060606000606660009054906101000a90046001600160a01b03166001600160a01b031663579e6e3f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106cd91906118b9565b600088815260676020526040908190206002015490516322c6b51960e01b81529192506001600160a01b038316916322c6b519916107119160040190815260200190565b600060405180830381865afa15801561072e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261075691908101906119be565b50508151969950909750509315935061078f9250505057816000815181106107805761078061173b565b60200260200101519450610793565b8294505b5050506000938452506067602052604090922080546002909101546001600160a01b0390911693909150565b6107c7610d95565b6107d16000610e04565b565b6033546001600160a01b031690565b6060606580548060200260200160405190810160405280929190818152602001828054801561083a57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161081c575b5050505050905090565b6066546000906001600160a01b031661085d5750600090565b606660009054906101000a90046001600160a01b03166001600160a01b031663ab9de2306040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d491906118b9565b905090565b6000806108e4610844565b90506001600160a01b0381166108fc57600091505090565b806001600160a01b031663ce1b815f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561093a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095e91906118b9565b91505090565b61096c610d95565b6001600160a01b0381166109d65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6109df81610e04565b50565b600054610100900460ff1615808015610a025750600054600160ff909116105b80610a1c5750303b158015610a1c575060005460ff166001145b610a7f5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016109cd565b6000805460ff191660011790558015610aa2576000805461ff0019166101001790555b6001600160a01b03851615801590610ac257506001600160a01b03841615155b8015610ad657506001600160a01b03831615155b8015610aea57506001600160a01b03821615155b610b285760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016109cd565b610b30610e56565b610b3985610964565b606680546001600160a01b0319166001600160a01b0386169081179091556040805163579e6e3f60e01b8152905163579e6e3f916004808201926020929091908290030181865afa158015610b92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb691906118b9565b606980546001600160a01b03199081166001600160a01b0393841617909155606a80548216868416908117909155606b80548316868516178155606580546001818101835560008390527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c79182018054871690951790945591548154938401909155910180549190931691161790558015610c8b576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050565b610ca48b8b8b8b8b8a8a8a8a8a61052c565b610cb28b8b8a8a8a8e610cc9565b5050505050505050505050565b60006108d4610e85565b600086610cd4610cbf565b604051602001610ce592919061168e565b60408051808303601f19018152918152815160209283012060008181526067909352912080546001600160a01b0319166001600160a01b038681169182178355600283018a9055600190920154929350911690827f07999de014823a9b9957f806838838c2ef506d5cea4edf7a268607b0b3a0be3489898988610d688f82610eb3565b8f610d71610cbf565b604051610d849796959493929190611a96565b60405180910390a450505050505050565b610d9d610cbf565b6001600160a01b0316610dae6107d3565b6001600160a01b0316146107d15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016109cd565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610e7d5760405162461bcd60e51b81526004016109cd90611b0e565b6107d1611004565b600060143610801590610e9c5750610e9c336104b8565b15610eae575060131936013560601c90565b503390565b6060600083610ec0610cbf565b604051602001610ed192919061168e565b604051602081830303815290604052805190602001209050600083516001600160401b03811115610f0457610f0461107d565b604051908082528060200260200182016040528015610f2d578160200160208202803683370190505b50905060005b8151811015610ff9578260658281548110610f5057610f5061173b565b9060005260206000200160009054906101000a90046001600160a01b0316868381518110610f8057610f8061173b565b6020026020010151604051602001610fb4939291909283526001600160a01b03919091166020830152604082015260600190565b60405160208183030381529060405280519060200120828281518110610fdc57610fdc61173b565b602090810291909101015280610ff18161177a565b915050610f33565b509150505b92915050565b600054610100900460ff1661102b5760405162461bcd60e51b81526004016109cd90611b0e565b6107d1611036610cbf565b610e04565b6001600160a01b03811681146109df57600080fd5b803561105b8161103b565b919050565b60006020828403121561107257600080fd5b81356103e78161103b565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156110bb576110bb61107d565b604052919050565b60006001600160401b038211156110dc576110dc61107d565b5060051b60200190565b600082601f8301126110f757600080fd5b8135602061110c611107836110c3565b611093565b82815260059290921b8401810191818101908684111561112b57600080fd5b8286015b84811015611146578035835291830191830161112f565b509695505050505050565b600080600080600060a0868803121561116957600080fd5b853594506020860135935060408601356001600160401b038082111561118e57600080fd5b61119a89838a016110e6565b945060608801359150808211156111b057600080fd5b6111bc89838a016110e6565b935060808801359150808211156111d257600080fd5b506111df888289016110e6565b9150509295509295909350565b60008060008060008060c0878903121561120557600080fd5b863595506020870135945060408701356001600160401b038082111561122a57600080fd5b6112368a838b016110e6565b9550606089013591508082111561124c57600080fd5b6112588a838b016110e6565b9450608089013591508082111561126e57600080fd5b5061127b89828a016110e6565b92505060a087013561128c8161103b565b809150509295509295509295565b6000602082840312156112ac57600080fd5b5035919050565b6001600160a01b03169052565b6001600160a01b0391909116815260200190565b6000602082840312156112e657600080fd5b81356001600160401b038111156112fc57600080fd5b611308848285016110e6565b949350505050565b600082601f83011261132157600080fd5b81356020611331611107836110c3565b82815260059290921b8401810191818101908684111561135057600080fd5b8286015b848110156111465780356113678161103b565b8352918301918301611354565b6000806000806000806000806000806101408b8d03121561139457600080fd5b8a35995060208b0135985060408b01356001600160401b03808211156113b957600080fd5b6113c58e838f016110e6565b995060608d01359150808211156113db57600080fd5b6113e78e838f016110e6565b985060808d01359150808211156113fd57600080fd5b6114098e838f016110e6565b975060a08d0135965061141e60c08e01611050565b955061142c60e08e01611050565b94506101008d013591508082111561144357600080fd5b61144f8e838f016110e6565b93506101208d013591508082111561146657600080fd5b506114738d828e01611310565b9150509295989b9194979a5092959850565b600081518084526020808501945080840160005b838110156114be5781516001600160a01b031687529582019590820190600101611499565b509495945050505050565b6020815260006103e76020830184611485565b600080600080608085870312156114f257600080fd5b84356114fd8161103b565b9350602085013561150d8161103b565b9250604085013561151d8161103b565b9150606085013561152d8161103b565b939692955090935050565b60008060008060008060008060008060006101608c8e03121561155a57600080fd5b8b359a5060208c013599506001600160401b0360408d013581101561157e57600080fd5b61158e8e60408f01358f016110e6565b99508060608e013511156115a157600080fd5b6115b18e60608f01358f016110e6565b98508060808e013511156115c457600080fd5b6115d48e60808f01358f016110e6565b97506115e260a08e01611050565b965060c08d013595506115f760e08e01611050565b94506116066101008e01611050565b9350806101208e0135111561161a57600080fd5b61162b8e6101208f01358f016110e6565b9250806101408e0135111561163f57600080fd5b506116518d6101408e01358e01611310565b90509295989b509295989b9093969950565b8051801515811461105b57600080fd5b60006020828403121561168557600080fd5b6103e782611663565b9182526001600160a01b0316602082015260400190565b600081518084526020808501945080840160005b838110156114be578151875295820195908201906001016116b9565b86815285602082015260c0604082015260006116f460c0830187611485565b828103606084015261170681876116a5565b9050828103608084015261171a81866116a5565b905082810360a084015261172e81856116a5565b9998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610ffe57610ffe611751565b60006001820161178c5761178c611751565b5060010190565b602081528151602082015260208201516040820152600060408301516101808060608501526117c66101a0850183611485565b91506060850151601f19808685030160808701526117e484836116a5565b935060808701519150808685030160a087015261180184836116a5565b935060a08701519150808685030160c087015261181e84836116a5565b935060c0870151915061183460e08701836112b3565b60e0870151610100878101919091528701519150610120611857818801846112b3565b870151915061014061186b878201846112b3565b8088015192505061016081878603018188015261188885846116a5565b9088015187820390920184880152935090506118a48382611485565b9695505050505050565b805161105b8161103b565b6000602082840312156118cb57600080fd5b81516103e78161103b565b600082601f8301126118e757600080fd5b81516001600160401b038111156119005761190061107d565b6020611914601f8301601f19168201611093565b828152858284870101111561192857600080fd5b60005b8381101561194657858101830151828201840152820161192b565b506000928101909101919091529392505050565b600082601f83011261196b57600080fd5b8151602061197b611107836110c3565b82815260059290921b8401810191818101908684111561199a57600080fd5b8286015b848110156111465780516119b18161103b565b835291830191830161199e565b60008060008060008060008060006101208a8c0312156119dd57600080fd5b6119e68a6118ae565b60208b015160408c0151919a5098506001600160401b0380821115611a0a57600080fd5b611a168d838e016118d6565b9850611a2460608d016118ae565b975060808c0151965060a08c0151915080821115611a4157600080fd5b611a4d8d838e0161195a565b955060c08c0151945060e08c0151915080821115611a6a57600080fd5b50611a778c828d016118d6565b925050611a876101008b01611663565b90509295985092959850929598565b87815260e060208201526000611aaf60e08301896116a5565b8281036040840152611ac181896116a5565b90508281036060840152611ad581886116a5565b90508281036080840152611ae981876116a5565b60a084019590955250506001600160a01b039190911660c09091015295945050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea264697066735822122017af36ab6ae9d1d5d866827c8d13a793e2d83deac33b8805ee8cd1489ac10ab064736f6c63430008110033","address":"0x883316ee73709847eC3B31Ee935b173901dAac81","implementation":"0x883316ee73709847eC3B31Ee935b173901dAac81","version":"v3.5.5","libraries":{}}')}}]);