"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1833],{1833:e=>{e.exports=JSON.parse('{"name":"AaveCollateralWithdrawCondition","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"_conditionId","type":"bytes32"}],"name":"Fulfilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"CONDITION_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0x15c87f85"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"abortByTimeOut","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0x1ce19185"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"address","name":"_vaultAddress","type":"address"},{"internalType":"address","name":"_collateralAsset","type":"address"}],"name":"fulfill","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"payable","type":"function","signature":"0x70457337"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_valueHash","type":"bytes32"}],"name":"generateId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0xcb4e57e8"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[],"name":"getNvmConfigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xab9de230"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"hasNVMOperatorRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x108762d0"},{"inputs":[{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"address","name":"_vaultAddress","type":"address"},{"internalType":"address","name":"_collateralAsset","type":"address"}],"name":"hashValues","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0xf7bebc88"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_conditionStoreManagerAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x485cc955"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x572b6c05"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50611383806100206000396000f3fe6080604052600436106100d95760003560e01c8063108762d0146100de57806315c87f851461011357806316279055146101435780631ce1918514610164578063485cc95514610191578063572b6c05146101b35780635ced058e146101d35780635ea3ab85146101fe5780636fd902e11461021e5780637045733714610231578063715018a61461024457806382c947b7146102595780638da5cb5b14610280578063ab9de23014610295578063cb4e57e8146102aa578063ce1b815f146102f7578063f2fde38b1461030c578063f7bebc881461032c575b600080fd5b3480156100ea57600080fd5b506100fe6100f9366004610ee5565b61034c565b60405190151581526020015b60405180910390f35b34801561011f57600080fd5b5061013560008051602061132e83398151915281565b60405190815260200161010a565b34801561014f57600080fd5b506100fe61015e366004610ee5565b3b151590565b34801561017057600080fd5b5061018461017f366004610f02565b6103e4565b60405161010a9190610f53565b34801561019d57600080fd5b506101b16101ac366004610f61565b61051f565b005b3480156101bf57600080fd5b506100fe6101ce366004610ee5565b61069e565b3480156101df57600080fd5b506101f16101ee366004610f02565b90565b60405161010a9190610f9a565b34801561020a57600080fd5b50610135610219366004610fc4565b6106c3565b34801561022a57600080fd5b5043610135565b61018461023f366004611081565b610712565b34801561025057600080fd5b506101b1610a7c565b34801561026557600080fd5b50610135610274366004610ee5565b6001600160a01b031690565b34801561028c57600080fd5b506101f1610a90565b3480156102a157600080fd5b506101f1610a9f565b3480156102b657600080fd5b506101356102c53660046110cb565b604080516020808201949094523081830152606080820193909352815180820390930183526080019052805191012090565b34801561030357600080fd5b506101f1610b34565b34801561031857600080fd5b506101b1610327366004610ee5565b610bbf565b34801561033857600080fd5b506101356103473660046110ed565b610c38565b600080610357610a9f565b90506001600160a01b0381166103705750600092915050565b604051630108762d60e41b81526001600160a01b0382169063108762d09061039c908690600401610f9a565b602060405180830381865afa1580156103b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103dd919061112f565b9392505050565b606554604051636ed93cc560e01b8152600481018390526000916001600160a01b031690636ed93cc590602401602060405180830381865afa15801561042e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610452919061112f565b6104a35760405162461bcd60e51b815260206004820152601f60248201527f436f6e646974696f6e206e6565647320746f2062652074696d6564206f75740060448201526064015b60405180910390fd5b60655460405163295e072360e11b81526001600160a01b03909116906352bc0e46906104d6908590600390600401611151565b6020604051808303816000875af11580156104f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105199190611179565b92915050565b600054610100900460ff161580801561053f5750600054600160ff909116105b806105595750303b158015610559575060005460ff166001145b6105bc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161049a565b6000805460ff1916600117905580156105df576000805461ff0019166101001790555b6001600160a01b0382166106275760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b604482015260640161049a565b61062f610c92565b61063883610bbf565b606580546001600160a01b0319166001600160a01b0384161790558015610699576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b60006106a8610b34565b6001600160a01b0316826001600160a01b0316149050919050565b60008060005b835181101561070b578381815181106106e4576106e4611194565b6020026020010151826106f791906111c0565b915080610703816111d3565b9150506106c9565b5092915050565b600061071c610cc1565b826001600160a01b03811663709b8961610734610d1a565b6040518263ffffffff1660e01b81526004016107509190610f9a565b602060405180830381865afa15801561076d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610791919061112f565b6107cb5760405162461bcd60e51b815260206004820152600b60248201526a27b7363c903632b73232b960a91b604482015260640161049a565b600080606560009054906101000a90046001600160a01b03166001600160a01b0316632934a0ee846001600160a01b031663c765b8e26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610830573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085491906111ec565b6040518263ffffffff1660e01b815260040161087291815260200190565b60a060405180830381865afa15801561088f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b39190611205565b50929450909250600291506108c59050565b8160038111156108d7576108d7610f1b565b146109325760405162461bcd60e51b815260206004820152602560248201527f526570617920436f6e646974696f6e206e6565647320746f2062652046756c666044820152641a5b1b195960da1b606482015260840161049a565b826001600160a01b031663679c4de186856001600160a01b031663bcead63e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610980573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a49190611255565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401600060405180830381600087803b1580156109ec57600080fd5b505af1158015610a00573d6000803e3d6000fd5b505050506000610a15896102c58a8a8a610c38565b90506000610a638260028b6040518060400160405280601f81526020017f41617665436f6c6c61746572616c5769746864726177436f6e646974696f6e00815250610a5e610d1a565b610d24565b95505050505050610a746001606655565b949350505050565b610a84610daa565b610a8e6000610e19565b565b6033546001600160a01b031690565b6065546000906001600160a01b0316610ab85750600090565b606560009054906101000a90046001600160a01b03166001600160a01b031663ab9de2306040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2f9190611255565b905090565b600080610b3f610a9f565b90506001600160a01b038116610b5757600091505090565b806001600160a01b031663ce1b815f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb99190611255565b91505090565b610bc7610daa565b6001600160a01b038116610c2c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161049a565b610c3581610e19565b50565b6040805160008051602061132e83398151915260208201529081018490526001600160a01b0380841660608301528216608082015260009060a0016040516020818303038152906040528051906020012090509392505050565b600054610100900460ff16610cb95760405162461bcd60e51b815260040161049a90611272565b610a8e610e6b565b600260665403610d135760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161049a565b6002606655565b6000610b2f610ea2565b60655460405163d1a8ae8160e01b81526000916001600160a01b03169063d1a8ae8190610d5d9089908890889088908c906004016112bd565b6020604051808303816000875af1158015610d7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da09190611179565b9695505050505050565b610db2610d1a565b6001600160a01b0316610dc3610a90565b6001600160a01b031614610a8e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161049a565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610e925760405162461bcd60e51b815260040161049a90611272565b610a8e610e9d610d1a565b610e19565b600060143610801590610eb95750610eb93361069e565b15610ecb575060131936013560601c90565b503390565b6001600160a01b0381168114610c3557600080fd5b600060208284031215610ef757600080fd5b81356103dd81610ed0565b600060208284031215610f1457600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b60048110610f4f57634e487b7160e01b600052602160045260246000fd5b9052565b602081016105198284610f31565b60008060408385031215610f7457600080fd5b8235610f7f81610ed0565b91506020830135610f8f81610ed0565b809150509250929050565b6001600160a01b0391909116815260200190565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215610fd757600080fd5b82356001600160401b0380821115610fee57600080fd5b818501915085601f83011261100257600080fd5b81358181111561101457611014610fae565b8060051b604051601f19603f8301168101818110858211171561103957611039610fae565b60405291825284820192508381018501918883111561105757600080fd5b938501935b828510156110755784358452938501939285019261105c565b98975050505050505050565b6000806000806080858703121561109757600080fd5b843593506020850135925060408501356110b081610ed0565b915060608501356110c081610ed0565b939692955090935050565b600080604083850312156110de57600080fd5b50508035926020909101359150565b60008060006060848603121561110257600080fd5b83359250602084013561111481610ed0565b9150604084013561112481610ed0565b809150509250925092565b60006020828403121561114157600080fd5b815180151581146103dd57600080fd5b828152604081016103dd6020830184610f31565b80516004811061117457600080fd5b919050565b60006020828403121561118b57600080fd5b6103dd82611165565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610519576105196111aa565b6000600182016111e5576111e56111aa565b5060010190565b6000602082840312156111fe57600080fd5b5051919050565b600080600080600060a0868803121561121d57600080fd5b855161122881610ed0565b945061123660208701611165565b6040870151606088015160809098015196999198509695945092505050565b60006020828403121561126757600080fd5b81516103dd81610ed0565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b85815260006020868184015260a0604084015285518060a085015260005b818110156112f75787810183015185820160c0015282016112db565b50600060c0828601015260c0601f19601f8301168501019250505060018060a01b0384166060830152610da06080830184610f3156feb862fd8b3cfd8de2573921377aa850f87e20369faed56b30213c873595f77affa2646970667358221220b6916766f35bb948d8479bc7a9385cba9ff034b319af12cbd64b193c4f0967e364736f6c63430008110033","version":"v3.5.5","libraries":{}}')}}]);