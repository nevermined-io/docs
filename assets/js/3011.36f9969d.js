"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3011],{3011:e=>{e.exports=JSON.parse('{"name":"StandardRoyalties","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"inputs":[],"name":"DENOMINATOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x918f8674"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"},{"internalType":"address","name":"","type":"address"}],"name":"check","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x8c41304b"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[],"name":"getNvmConfigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xab9de230"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[{"internalType":"address","name":"_registry","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc4d66de8"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x572b6c05"},{"inputs":[],"name":"registry","outputs":[{"internalType":"contract DIDRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x7b103999"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"royalties","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x9f5ac2da"},{"inputs":[{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"uint256","name":"_royalty","type":"uint256"}],"name":"setRoyalty","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc2b1824a"}],"bytecode":"0x608060405234801561001057600080fd5b50610ba2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c806316279055146100bf578063572b6c05146100e85780635ced058e146100fb5780635ea3ab85146101245780636fd902e1146101455780637b1039991461014b57806382c947b7146101645780638c41304b1461017e578063918f8674146101915780639f5ac2da1461019b578063ab9de230146101bb578063c2b1824a146101c3578063c4d66de8146101d8578063ce1b815f146101eb575b600080fd5b6100d36100cd366004610875565b3b151590565b60405190151581526020015b60405180910390f35b6100d36100f6366004610875565b6101f3565b61010c610109366004610899565b90565b6040516001600160a01b0390911681526020016100df565b610137610132366004610986565b610218565b6040519081526020016100df565b43610137565b60005461010c906201000090046001600160a01b031681565b610137610172366004610875565b6001600160a01b031690565b6100d361018c3660046109ba565b610267565b610137620f424081565b6101376101a9366004610899565b60016020526000908152604090205481565b61010c61040f565b6101d66101d1366004610a96565b6104a8565b005b6101d66101e6366004610875565b610668565b61010c610794565b60006101fd610794565b6001600160a01b0316826001600160a01b0316149050919050565b60008060005b83518110156102605783818151811061023957610239610ab8565b60200260200101518261024c9190610ae4565b91508061025881610afd565b91505061021e565b5092915050565b600084815260016020526040812054808203610287576001915050610407565b6000805b86518110156102cd578681815181106102a6576102a6610ab8565b6020026020010151826102b99190610ae4565b9150806102c581610afd565b91505061028b565b506000620f42406102de8484610b16565b6102e89190610b2d565b9050806000036102fe5760019350505050610407565b60008054604051633b21f84f60e01b8152600481018b9052620100009091046001600160a01b031690633b21f84f90602401602060405180830381865afa15801561034d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103719190610b4f565b90506000805b88518110156103cd5788818151811061039257610392610ab8565b60200260200101516001600160a01b0316836001600160a01b0316036103bb57600191506103cd565b806103c581610afd565b915050610377565b816103e15760009650505050505050610407565b838a82815181106103f4576103f4610ab8565b6020026020010151101596505050505050505b949350505050565b600080546201000090046001600160a01b031661042c5750600090565b600060029054906101000a90046001600160a01b03166001600160a01b031663ab9de2306040518163ffffffff1660e01b8152600401602060405180830381865afa15801561047f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a39190610b4f565b905090565b620f42408111156105005760405162461bcd60e51b815260206004820181905260248201527f726f79616c74792063616e6e6f74206265206d6f7265207468616e203130302560448201526064015b60405180910390fd5b60005460405163234f04cd60e01b815260048101849052620100009091046001600160a01b03169063234f04cd90602401602060405180830381865afa15801561054e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105729190610b4f565b6001600160a01b031661058361081f565b6001600160a01b031614806105b857506000546201000090046001600160a01b03166105ad61081f565b6001600160a01b0316145b6105fc5760405162461bcd60e51b81526020600482015260156024820152746f6e6c79206f776e65722063616e206368616e676560581b60448201526064016104f7565b600082815260016020526040902054156106565760405162461bcd60e51b815260206004820152601b60248201527a1c9bde585b1d1a595cc818d85b9b9bdd0818994818da185b99d959602a1b60448201526064016104f7565b60009182526001602052604090912055565b600054610100900460ff16158080156106885750600054600160ff909116105b806106a25750303b1580156106a2575060005460ff166001145b6107055760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104f7565b6000805460ff191660011790558015610728576000805461ff0019166101001790555b6000805462010000600160b01b031916620100006001600160a01b038516021790558015610790576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b60008061079f61040f565b90506001600160a01b0381166107b757600091505090565b806001600160a01b031663ce1b815f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108199190610b4f565b91505090565b6000601436108015906108365750610836336101f3565b15610848575060131936013560601c90565b503390565b6001600160a01b038116811461086257600080fd5b50565b80356108708161084d565b919050565b60006020828403121561088757600080fd5b81356108928161084d565b9392505050565b6000602082840312156108ab57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156108f0576108f06108b2565b604052919050565b60006001600160401b03821115610911576109116108b2565b5060051b60200190565b600082601f83011261092c57600080fd5b8135602061094161093c836108f8565b6108c8565b82815260059290921b8401810191818101908684111561096057600080fd5b8286015b8481101561097b5780358352918301918301610964565b509695505050505050565b60006020828403121561099857600080fd5b81356001600160401b038111156109ae57600080fd5b6104078482850161091b565b600080600080608085870312156109d057600080fd5b843593506020808601356001600160401b03808211156109ef57600080fd5b6109fb89838a0161091b565b95506040880135915080821115610a1157600080fd5b508601601f81018813610a2357600080fd5b8035610a3161093c826108f8565b81815260059190911b8201830190838101908a831115610a5057600080fd5b928401925b82841015610a77578335610a688161084d565b82529284019290840190610a55565b8096505050505050610a8b60608601610865565b905092959194509250565b60008060408385031215610aa957600080fd5b50508035926020909101359150565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610af757610af7610ace565b92915050565b600060018201610b0f57610b0f610ace565b5060010190565b8082028115828204841417610af757610af7610ace565b600082610b4a57634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215610b6157600080fd5b81516108928161084d56fea26469706673582212209f519ef2a4ff0ae0d57e3f33ee6b9def6290baf32d81300e2b36ee338ff5909164736f6c63430008110033","address":"0xA937B8EA44aBDf69A87619E3C709Bc364aC08482","implementation":"0xdd835aE8Fd88a1b150080124Ff6F844750f61d3d","version":"v3.0.0","libraries":{}}')}}]);