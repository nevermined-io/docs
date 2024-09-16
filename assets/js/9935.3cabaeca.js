"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9935],{75756:e=>{e.exports=JSON.parse('{"name":"NFTSalesTemplate","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_accessConsumer","type":"address"},{"indexed":true,"internalType":"address","name":"_accessProvider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIdSeeds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32","name":"_idSeed","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_creator","type":"address"}],"name":"AgreementCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2e166f3e"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4183e72b"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPay","outputs":[],"stateMutability":"payable","type":"function","signature":"0x6104ff1a"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPayEscrow","outputs":[],"stateMutability":"payable","type":"function","signature":"0xf8fe1070"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"},{"internalType":"bytes[]","name":"_params","type":"bytes[]"}],"name":"createAgreementFulfill","outputs":[],"stateMutability":"payable","type":"function","signature":"0xe4fe989c"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"getAgreementData","outputs":[{"internalType":"address","name":"accessConsumer","type":"address"},{"internalType":"address","name":"accessProvider","type":"address"},{"internalType":"bytes32","name":"did","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0x6ff015ae"},{"inputs":[],"name":"getConditionTypes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","signature":"0x91a169bf"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[],"name":"getNvmConfigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xab9de230"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"hasNVMOperatorRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x108762d0"},{"inputs":[],"name":"id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0xaf640d0f"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_agreementStoreManagerAddress","type":"address"},{"internalType":"address","name":"_lockPaymentConditionAddress","type":"address"},{"internalType":"address","name":"_transferConditionAddress","type":"address"},{"internalType":"address payable","name":"_escrowPaymentAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x1459457a"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x572b6c05"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"nftPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x49199215"},{"inputs":[{"internalType":"address","name":"nftAddress","type":"address"},{"internalType":"bytes32","name":"nftId","type":"bytes32"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"nftSale","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0416aae8"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50612baf806100206000396000f3fe6080604052600436106101105760003560e01c80630416aae814610115578063108762d0146101375780631459457a1461016c578063162790551461018c5780632e166f3e146101ad5780634183e72b146101cd57806349199215146101ed578063572b6c05146102425780635ced058e146102625780635ea3ab851461028d5780636104ff1a146102ad5780636fd902e1146102c05780636ff015ae146102d3578063715018a61461031957806382c947b71461032e5780638da5cb5b1461035557806391a169bf1461036a578063ab9de2301461038c578063af640d0f146103a1578063ce1b815f146103b5578063e4fe989c146103ca578063f2fde38b146103dd578063f8fe1070146103fd575b600080fd5b34801561012157600080fd5b50610135610130366004611ad5565b610410565b005b34801561014357600080fd5b50610157610152366004611b1d565b610460565b60405190151581526020015b60405180910390f35b34801561017857600080fd5b50610135610187366004611b3a565b6104f8565b34801561019857600080fd5b506101576101a7366004611b1d565b3b151590565b3480156101b957600080fd5b506101356101c8366004611c7f565b6107e7565b3480156101d957600080fd5b506101356101e8366004611d1a565b61088e565b3480156101f957600080fd5b50610234610208366004611dc8565b606d60209081526000948552604080862082529385528385208152918452828420909152825290205481565b604051908152602001610163565b34801561024e57600080fd5b5061015761025d366004611b1d565b6108a9565b34801561026e57600080fd5b5061028061027d366004611e09565b90565b6040516101639190611e2f565b34801561029957600080fd5b506102346102a8366004611e43565b6108ce565b6101356102bb366004611ee3565b61091d565b3480156102cc57600080fd5b5043610234565b3480156102df57600080fd5b506102f36102ee366004611e09565b610a39565b604080516001600160a01b03948516815293909216602084015290820152606001610163565b34801561032557600080fd5b50610135610bb0565b34801561033a57600080fd5b50610234610349366004611b1d565b6001600160a01b031690565b34801561036157600080fd5b50610280610bc4565b34801561037657600080fd5b5061037f610bd3565b6040516101639190612038565b34801561039857600080fd5b50610280610c35565b3480156103ad57600080fd5b506001610234565b3480156103c157600080fd5b50610280610cca565b6101356103d8366004612072565b610d55565b3480156103e957600080fd5b506101356103f8366004611b1d565b611083565b61013561040b3660046121e3565b6110fc565b80606d600061041d611129565b6001600160a01b03908116825260208083019390935260409182016000908120988216815297835281882095168752938152838620948652939093525090912055565b60008061046b610c35565b90506001600160a01b0381166104845750600092915050565b604051630108762d60e41b81526001600160a01b0382169063108762d0906104b0908690600401611e2f565b602060405180830381865afa1580156104cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f1919061231e565b9392505050565b600054610100900460ff16158080156105185750600054600160ff909116105b806105325750303b158015610532575060005460ff166001145b61059a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156105bd576000805461ff0019166101001790555b6001600160a01b038616158015906105dd57506001600160a01b03851615155b80156105f157506001600160a01b03841615155b801561060557506001600160a01b03831615155b801561061957506001600160a01b03821615155b6106575760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606401610591565b61065f611133565b61066886611083565b606680546001600160a01b0319166001600160a01b0387169081179091556040805163579e6e3f60e01b8152905163579e6e3f916004808201926020929091908290030181865afa1580156106c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e59190612344565b606980546001600160a01b03199081166001600160a01b0393841617909155606a80548216878416908117909155606b80548316878516178155606c80548416878616178155606580546001818101835560008390527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c79182018054881690961790955592548154808601835584018054918816918716919091179055905481549384019091559101805491909316911617905580156107df576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b6066546001600160a01b031663955d0c2a86610801611129565b604051602001610812929190612361565b6040516020818303038152906040528051906020012086610831610bd3565b8787876040518763ffffffff1660e01b8152600401610855969594939291906123a8565b600060405180830381600087803b15801561086f57600080fd5b505af1158015610883573d6000803e3d6000fd5b505050505050505050565b61089b86868686866107e7565b6107df868685858589611162565b60006108b3610cca565b6001600160a01b0316826001600160a01b0316149050919050565b60008060005b8351811015610916578381815181106108ef576108ef61240e565b602002602001015182610902919061243a565b91508061090e8161244d565b9150506108d4565b5092915050565b6066546040805161018081019091526001600160a01b0390911690637c719793903490808e61094a611129565b60405160200161095b929190612361565b6040516020818303038152906040528051906020012081526020018d8152602001610984610bd3565b81526020018c81526020018b81526020018a81526020016109a3611129565b6001600160a01b03168152602001898152602001886001600160a01b03168152602001876001600160a01b03168152602001868152602001858152506040518363ffffffff1660e01b81526004016109fb9190612466565b6000604051808303818588803b158015610a1457600080fd5b505af1158015610a28573d6000803e3d6000fd5b505050505050505050505050505050565b6000806000806000905060606000606660009054906101000a90046001600160a01b03166001600160a01b031663579e6e3f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abe9190612344565b600088815260676020526040908190206002015490516322c6b51960e01b81529192506001600160a01b038316916322c6b51991610b029160040190815260200190565b600060405180830381865afa158015610b1f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b47919081019061264e565b505081519699509097505093159350610b80925050505781600081518110610b7157610b7161240e565b60200260200101519450610b84565b8294505b5050506000938452506067602052604090922080546002909101546001600160a01b0390911693909150565b610bb861122e565b610bc2600061129d565b565b6033546001600160a01b031690565b60606065805480602002602001604051908101604052809291908181526020018280548015610c2b57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610c0d575b5050505050905090565b6066546000906001600160a01b0316610c4e5750600090565b606660009054906101000a90046001600160a01b03166001600160a01b031663ab9de2306040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ca1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc59190612344565b905090565b600080610cd5610c35565b90506001600160a01b038116610ced57600091505090565b806001600160a01b031663ce1b815f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4f9190612344565b91505090565b600086610d60611129565b604051602001610d71929190612361565b60408051601f1981840301815282825280516020918201206003808552608085019093529350600092919082016060803683375050604080516002808252606082018352939450600093909250906020830190803683375050604080516002808252606082018352939450600093909250906020830190803683375050604080516002808252606082019092529293506000929150602082015b6060815260200190600190039081610e0b579050509050610e2a611129565b82600081518110610e3d57610e3d61240e565b60200260200101906001600160a01b031690816001600160a01b03168152505060005b6002811015610ed25780848281518110610e7c57610e7c61240e565b602002602001018181525050868181518110610e9a57610e9a61240e565b6020026020010151828281518110610eb457610eb461240e565b60200260200101819052508080610eca9061244d565b915050610e60565b5060005b6003811015610f2f57868181518110610ef157610ef161240e565b602002602001015180519060200120858281518110610f1257610f1261240e565b602090810291909101015280610f278161244d565b915050610ed6565b506000856065600081548110610f4757610f4761240e565b600091825260208220015487516001600160a01b03909116918891610f6e57610f6e61240e565b6020026020010151604051602001610f8893929190612726565b6040516020818303038152906040528051906020012090506000866065600181548110610fb757610fb761240e565b9060005260206000200160009054906101000a90046001600160a01b031687600181518110610fe857610fe861240e565b602002602001015160405160200161100293929190612726565b60405160208183030381529060405280519060200120905061102588838e6112ef565b846001815181106110385761103861240e565b60200260200101906001600160a01b031690816001600160a01b03168152505061106388838361163c565b6110748d8d888e8e8e8b8b8b611854565b50505050505050505050505050565b61108b61122e565b6001600160a01b0381166110f05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610591565b6110f98161129d565b50565b61110e8b8b8b8b8b8a8a8a8a8a61091d565b61111c8b8b8a8a8a8e611162565b5050505050505050505050565b6000610cc5611872565b600054610100900460ff1661115a5760405162461bcd60e51b815260040161059190612745565b610bc26118a0565b60008661116d611129565b60405160200161117e929190612361565b60408051808303601f19018152918152815160209283012060008181526067909352912080546001600160a01b0319166001600160a01b038681169182178355600283018a9055600190920154929350911690827f07999de014823a9b9957f806838838c2ef506d5cea4edf7a268607b0b3a0be34898989886112018f826118d7565b8f61120a611129565b60405161121d9796959493929190612790565b60405180910390a450505050505050565b611236611129565b6001600160a01b0316611247610bc4565b6001600160a01b031614610bc25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610591565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000806000806060808860008151811061130b5761130b61240e565b60200260200101518060200190518101906113269190612863565b809550819650829750839850849950505050505060008060008060008d6001815181106113555761135561240e565b602002602001015180602001905181019061137091906128ea565b9499509197509550935090915050898514801561138c5750898c145b6113c75760405162461bcd60e51b815260206004820152600c60248201526b0c8d2c840dad2e6dac2e8c6d60a31b6044820152606401610591565b8c82146114095760405162461bcd60e51b815260206004820152601060248201526f0d8dec6d640d2c840dad2e6dac2e8c6d60831b6044820152606401610591565b606560028154811061141d5761141d61240e565b6000918252602090912001546001600160a01b038a81169116146114775760405162461bcd60e51b8152602060048201526011602482015270726577617264206e6f7420657363726f7760781b6044820152606401610591565b606d60008760008151811061148e5761148e61240e565b6020908102919091018101516001600160a01b039081168352828201939093526040918201600090812085851682528252828120938c1681529281528183208f8452905281205490036115115760405162461bcd60e51b815260206004820152600b60248201526a6e6f74206f6e2073616c6560a81b6044820152606401610591565b866000815181106115245761152461240e565b602002602001015183606d6000896000815181106115445761154461240e565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000846001600160a01b03166001600160a01b0316815260200190815260200160002060008b6001600160a01b03166001600160a01b0316815260200190815260200160002060008f8152602001908152602001600020546115ce9190612946565b111561160e5760405162461bcd60e51b815260206004820152600f60248201526e746f6f20736d616c6c20707269636560881b6044820152606401610591565b856000815181106116215761162161240e565b60200260200101519a50505050505050505050509392505050565b6000806000606080876000815181106116575761165761240e565b60200260200101518060200190518101906116729190612863565b80955081965082975083985084995050505050506000606080600080600060608e6002815181106116a5576116a561240e565b60200260200101518060200190518101906116c0919061295d565b969d50949b509299509750909550909350909150508d82146117165760405162461bcd60e51b815260206004820152600f60248201526e3637b1b59036b4b9b6b0ba31b4101960891b6044820152606401610591565b805160011461175f5760405162461bcd60e51b81526020600482015260156024820152743130b2103932b632b0b9b29031b7b73234ba34b7b760591b6044820152606401610591565b868387876040516020016117769493929190612a2b565b604051602081830303815290604052805190602001208c8b8b8b6040516020016117a39493929190612a2b565b60405160208183030381529060405280519060200120146117f85760405162461bcd60e51b815260206004820152600f60248201526e0cae6c6e4deee40dad2e6dac2e8c6d608b1b6044820152606401610591565b8c8160008151811061180c5761180c61240e565b602002602001015114610a285760405162461bcd60e51b815260206004820152601060248201526f0e8e4c2dccccae440dad2e6dac2e8c6d60831b6044820152606401610591565b6118648989898989888888611a0e565b61088389898888888c611162565b6000601436108015906118895750611889336108a9565b1561189b575060131936013560601c90565b503390565b600054610100900460ff166118c75760405162461bcd60e51b815260040161059190612745565b610bc26118d2611129565b61129d565b60606000836118e4611129565b6040516020016118f5929190612361565b604051602081830303815290604052805190602001209050600083516001600160401b0381111561192857611928611bab565b604051908082528060200260200182016040528015611951578160200160208202803683370190505b50905060005b8151811015611a035782606582815481106119745761197461240e565b9060005260206000200160009054906101000a90046001600160a01b03168683815181106119a4576119a461240e565b60200260200101516040516020016119be93929190612726565b604051602081830303815290604052805190602001208282815181106119e6576119e661240e565b6020908102919091010152806119fb8161244d565b915050611957565b509150505b92915050565b6066546001600160a01b031663122b3d45348a611a29611129565b604051602001611a3a929190612361565b604051602081830303815290604052805190602001208a611a59610bd3565b8b8b8b8a8c8b6040518b63ffffffff1660e01b8152600401611a8399989796959493929190612a72565b6000604051808303818588803b158015611a9c57600080fd5b505af1158015611074573d6000803e3d6000fd5b6001600160a01b03811681146110f957600080fd5b8035611ad081611ab0565b919050565b60008060008060808587031215611aeb57600080fd5b8435611af681611ab0565b9350602085013592506040850135611b0d81611ab0565b9396929550929360600135925050565b600060208284031215611b2f57600080fd5b81356104f181611ab0565b600080600080600060a08688031215611b5257600080fd5b8535611b5d81611ab0565b94506020860135611b6d81611ab0565b93506040860135611b7d81611ab0565b92506060860135611b8d81611ab0565b91506080860135611b9d81611ab0565b809150509295509295909350565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611be957611be9611bab565b604052919050565b60006001600160401b03821115611c0a57611c0a611bab565b5060051b60200190565b600082601f830112611c2557600080fd5b81356020611c3a611c3583611bf1565b611bc1565b82815260059290921b84018101918181019086841115611c5957600080fd5b8286015b84811015611c745780358352918301918301611c5d565b509695505050505050565b600080600080600060a08688031215611c9757600080fd5b853594506020860135935060408601356001600160401b0380821115611cbc57600080fd5b611cc889838a01611c14565b94506060880135915080821115611cde57600080fd5b611cea89838a01611c14565b93506080880135915080821115611d0057600080fd5b50611d0d88828901611c14565b9150509295509295909350565b60008060008060008060c08789031215611d3357600080fd5b863595506020870135945060408701356001600160401b0380821115611d5857600080fd5b611d648a838b01611c14565b95506060890135915080821115611d7a57600080fd5b611d868a838b01611c14565b94506080890135915080821115611d9c57600080fd5b50611da989828a01611c14565b92505060a0870135611dba81611ab0565b809150509295509295509295565b60008060008060808587031215611dde57600080fd5b8435611de981611ab0565b93506020850135611df981611ab0565b92506040850135611b0d81611ab0565b600060208284031215611e1b57600080fd5b5035919050565b6001600160a01b03169052565b6001600160a01b0391909116815260200190565b600060208284031215611e5557600080fd5b81356001600160401b03811115611e6b57600080fd5b611e7784828501611c14565b949350505050565b600082601f830112611e9057600080fd5b81356020611ea0611c3583611bf1565b82815260059290921b84018101918181019086841115611ebf57600080fd5b8286015b84811015611c74578035611ed681611ab0565b8352918301918301611ec3565b6000806000806000806000806000806101408b8d031215611f0357600080fd5b8a35995060208b0135985060408b01356001600160401b0380821115611f2857600080fd5b611f348e838f01611c14565b995060608d0135915080821115611f4a57600080fd5b611f568e838f01611c14565b985060808d0135915080821115611f6c57600080fd5b611f788e838f01611c14565b975060a08d01359650611f8d60c08e01611ac5565b9550611f9b60e08e01611ac5565b94506101008d0135915080821115611fb257600080fd5b611fbe8e838f01611c14565b93506101208d0135915080821115611fd557600080fd5b50611fe28d828e01611e7f565b9150509295989b9194979a5092959850565b600081518084526020808501945080840160005b8381101561202d5781516001600160a01b031687529582019590820190600101612008565b509495945050505050565b6020815260006104f16020830184611ff4565b60006001600160401b0382111561206457612064611bab565b50601f01601f191660200190565b60008060008060008060c0878903121561208b57600080fd5b86359550602087013594506001600160401b0360408801358110156120af57600080fd5b6120bf8960408a01358a01611c14565b945080606089013511156120d257600080fd5b6120e28960608a01358a01611c14565b93506120f16080890135611ab0565b608088013592508060a0890135111561210957600080fd5b60a0880135880189601f82011261211f57600080fd5b61212c611c358235611bf1565b81358082526020808301929160051b8401018c101561214a57600080fd5b602083015b6020843560051b8501018110156121d157848135111561216e57600080fd5b803584018d603f82011261218157600080fd5b6020810135612192611c358261204b565b8181528f60408385010111156121a757600080fd5b8160408401602083013760006020838301015280865250505060208301925060208101905061214f565b50809450505050509295509295509295565b60008060008060008060008060008060006101608c8e03121561220557600080fd5b8b359a5060208c013599506001600160401b0360408d013581101561222957600080fd5b6122398e60408f01358f01611c14565b99508060608e0135111561224c57600080fd5b61225c8e60608f01358f01611c14565b98508060808e0135111561226f57600080fd5b61227f8e60808f01358f01611c14565b975061228d60a08e01611ac5565b965060c08d013595506122a260e08e01611ac5565b94506122b16101008e01611ac5565b9350806101208e013511156122c557600080fd5b6122d68e6101208f01358f01611c14565b9250806101408e013511156122ea57600080fd5b506122fc8d6101408e01358e01611e7f565b90509295989b509295989b9093969950565b80518015158114611ad057600080fd5b60006020828403121561233057600080fd5b6104f18261230e565b8051611ad081611ab0565b60006020828403121561235657600080fd5b81516104f181611ab0565b9182526001600160a01b0316602082015260400190565b600081518084526020808501945080840160005b8381101561202d5781518752958201959082019060010161238c565b86815285602082015260c0604082015260006123c760c0830187611ff4565b82810360608401526123d98187612378565b905082810360808401526123ed8186612378565b905082810360a08401526124018185612378565b9998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115611a0857611a08612424565b60006001820161245f5761245f612424565b5060010190565b602081528151602082015260208201516040820152600060408301516101808060608501526124996101a0850183611ff4565b91506060850151601f19808685030160808701526124b78483612378565b935060808701519150808685030160a08701526124d48483612378565b935060a08701519150808685030160c08701526124f18483612378565b935060c0870151915061250760e0870183611e22565b60e087015161010087810191909152870151915061012061252a81880184611e22565b870151915061014061253e87820184611e22565b8088015192505061016081878603018188015261255b8584612378565b9088015187820390920184880152935090506125778382611ff4565b9695505050505050565b60005b8381101561259c578181015183820152602001612584565b50506000910152565b600082601f8301126125b657600080fd5b81516125c4611c358261204b565b8181528460208386010111156125d957600080fd5b611e77826020830160208701612581565b600082601f8301126125fb57600080fd5b8151602061260b611c3583611bf1565b82815260059290921b8401810191818101908684111561262a57600080fd5b8286015b84811015611c7457805161264181611ab0565b835291830191830161262e565b60008060008060008060008060006101208a8c03121561266d57600080fd5b6126768a612339565b60208b015160408c0151919a5098506001600160401b038082111561269a57600080fd5b6126a68d838e016125a5565b98506126b460608d01612339565b975060808c0151965060a08c01519150808211156126d157600080fd5b6126dd8d838e016125ea565b955060c08c0151945060e08c01519150808211156126fa57600080fd5b506127078c828d016125a5565b9250506127176101008b0161230e565b90509295985092959850929598565b9283526001600160a01b03919091166020830152604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b87815260e0602082015260006127a960e0830189612378565b82810360408401526127bb8189612378565b905082810360608401526127cf8188612378565b905082810360808401526127e38187612378565b60a084019590955250506001600160a01b039190911660c09091015295945050505050565b600082601f83011261281957600080fd5b81516020612829611c3583611bf1565b82815260059290921b8401810191818101908684111561284857600080fd5b8286015b84811015611c74578051835291830191830161284c565b600080600080600060a0868803121561287b57600080fd5b85519450602086015161288d81611ab0565b604087015190945061289e81611ab0565b60608701519093506001600160401b03808211156128bb57600080fd5b6128c789838a01612808565b935060808801519150808211156128dd57600080fd5b50611d0d888289016125ea565b60008060008060008060c0878903121561290357600080fd5b86519550602087015161291581611ab0565b604088015190955061292681611ab0565b80945050606087015192506080870151915060a0870151611dba81611ab0565b8082028115828204841417611a0857611a08612424565b600080600080600080600080610100898b03121561297a57600080fd5b885160208a01519098506001600160401b038082111561299957600080fd5b6129a58c838d01612808565b985060408b01519150808211156129bb57600080fd5b6129c78c838d016125ea565b97506129d560608c01612339565b96506129e360808c01612339565b95506129f160a08c01612339565b945060c08b0151935060e08b0151915080821115612a0e57600080fd5b50612a1b8b828c01612808565b9150509295985092959890939650565b8481526001600160a01b0384166020820152608060408201819052600090612a5590830185612378565b8281036060840152612a678185611ff4565b979650505050505050565b60006101208b835260208b81850152816040850152612a938285018c611ff4565b91508382036060850152612aa7828b612378565b91508382036080850152612abb828a612378565b915083820360a0850152612acf8289612378565b915083820360c0850152612ae38288611ff4565b915083820360e0850152612af78287612378565b91508382036101008501528185518084528284019150828160051b85010183880160005b83811015612b6157601f198088850301865282518051808652612b43818a88018b8501612581565b96880196601f01909116939093018601925090850190600101612b1b565b505080955050505050509a995050505050505050505056fea26469706673582212207e89139a9025c2f2c2fd494ada914c17442ab204b3a048fc83172a9f647abaf964736f6c63430008110033","address":"0x1c52ed414EDd1bCC20Ea670d42289e8bFC03C095","implementation":"0x1c52ed414EDd1bCC20Ea670d42289e8bFC03C095","version":"v3.5.5","libraries":{}}')}}]);