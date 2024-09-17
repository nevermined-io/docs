"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4290],{4290:e=>{e.exports=JSON.parse('{"name":"TemplateStoreManager","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"address","name":"_id","type":"address"}],"name":"approveTemplate","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa79cf51c"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[],"name":"getNvmConfigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xab9de230"},{"inputs":[{"internalType":"address","name":"_id","type":"address"}],"name":"getTemplate","outputs":[{"internalType":"enum TemplateStoreLibrary.TemplateState","name":"state","type":"uint8"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"lastUpdatedBy","type":"address"},{"internalType":"uint256","name":"blockNumberUpdated","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0xf0d6f5d7"},{"inputs":[],"name":"getTemplateListSize","outputs":[{"internalType":"uint256","name":"size","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x722e0b0e"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"hasNVMOperatorRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x108762d0"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc4d66de8"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[{"internalType":"address","name":"_id","type":"address"}],"name":"isTemplateApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0xb727a255"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x572b6c05"},{"inputs":[],"name":"nvmConfig","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xe9c1e045"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[{"internalType":"address","name":"_id","type":"address"}],"name":"proposeTemplate","outputs":[{"internalType":"uint256","name":"size","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0xfe4b7724"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_id","type":"address"}],"name":"revokeTemplate","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdb80bb9a"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setNvmConfigAddress","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x02acb9a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50610eb1806100206000396000f3fe608060405234801561001057600080fd5b50600436106101075760003560e01c806302acb9a61461010c578063108762d0146101215780631627905514610149578063572b6c051461015d5780635ced058e146101705780635ea3ab851461018e5780636fd902e1146101af578063715018a6146101b5578063722e0b0e146101bd57806382c947b7146101c55780638da5cb5b146101df578063a79cf51c146101e7578063ab9de230146101fa578063b727a25514610202578063c4d66de814610215578063ce1b815f14610228578063db80bb9a14610230578063e9c1e04514610243578063f0d6f5d714610256578063f2fde38b146102b0578063fe4b7724146102c3575b600080fd5b61011f61011a366004610c21565b6102d6565b005b61013461012f366004610c21565b610300565b60405190151581526020015b60405180910390f35b610134610157366004610c21565b3b151590565b61013461016b366004610c21565b610398565b61018161017e366004610c3e565b90565b6040516101409190610c57565b6101a161019c366004610c81565b6103bd565b604051908152602001610140565b436101a1565b61011f61040c565b6066546101a1565b6101a16101d3366004610c21565b6001600160a01b031690565b610181610420565b61011f6101f5366004610c21565b61042f565b61018161044f565b610134610210366004610c21565b61045e565b61011f610223366004610c21565b610496565b6101816105fe565b61011f61023e366004610c21565b610689565b606754610181906001600160a01b031681565b6102a0610264366004610c21565b6001600160a01b0390811660009081526065602052604090208054600182015460029092015460ff821694610100909204841693929092169190565b6040516101409493929190610d54565b61011f6102be366004610c21565b610736565b6101a16102d1366004610c21565b6107ac565b6102de6107c9565b606780546001600160a01b0319166001600160a01b0392909216919091179055565b60008061030b61044f565b90506001600160a01b0381166103245750600092915050565b604051630108762d60e41b81526001600160a01b0382169063108762d090610350908690600401610c57565b602060405180830381865afa15801561036d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103919190610d99565b9392505050565b60006103a26105fe565b6001600160a01b0316826001600160a01b0316149050919050565b60008060005b8351811015610405578381815181106103de576103de610dbb565b6020026020010151826103f19190610de7565b9150806103fd81610dfa565b9150506103c3565b5092915050565b6104146107c9565b61041e6000610838565b565b6033546001600160a01b031690565b6104376107c9565b61044c8161044361088a565b60659190610899565b50565b6067546001600160a01b031690565b600060026001600160a01b03831660009081526065602052604090205460ff16600381111561048f5761048f610d3e565b1492915050565b600054610100900460ff16158080156104b65750600054600160ff909116105b806104d05750303b1580156104d0575060005460ff166001145b6105385760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801561055b576000805461ff0019166101001790555b6001600160a01b0382166105a35760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b604482015260640161052f565b6105ab610976565b6105b482610736565b80156105fa576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b60008061060961044f565b90506001600160a01b03811661062157600091505090565b806001600160a01b031663ce1b815f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561065f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106839190610e13565b91505090565b80610692610420565b6001600160a01b03166106a361088a565b6001600160a01b031614806106e057506106bb61088a565b6001600160a01b03828116600090815260656020526040902054610100900481169116145b6107215760405162461bcd60e51b8152602060048201526012602482015271496e76616c696420557064617465526f6c6560701b604482015260640161052f565b6105fa8261072d61088a565b606591906109a5565b61073e6107c9565b6001600160a01b0381166107a35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161052f565b61044c81610838565b60006107c3826107ba61088a565b60659190610a43565b92915050565b6107d161088a565b6001600160a01b03166107e2610420565b6001600160a01b03161461041e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161052f565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610894610ba7565b905090565b60016001600160a01b03831660009081526020859052604090205460ff1660038111156108c8576108c8610d3e565b1461090d5760405162461bcd60e51b815260206004820152601560248201527415195b5c1b185d19481b9bdd08141c9bdc1bdcd959605a1b604482015260640161052f565b6001600160a01b038216600090815260208490526040902080546002919060ff19166001835b02179055506001600160a01b03918216600090815260209390935260409092206001810180546001600160a01b0319169390921692909217905543600290910155565b600054610100900460ff1661099d5760405162461bcd60e51b815260040161052f90610e30565b61041e610bd5565b60026001600160a01b03831660009081526020859052604090205460ff1660038111156109d4576109d4610d3e565b14610a195760405162461bcd60e51b815260206004820152601560248201527415195b5c1b185d19481b9bdd08105c1c1c9bdd9959605a1b604482015260640161052f565b6001600160a01b038216600090815260208490526040902080546003919060ff1916600183610933565b6000806001600160a01b03841660009081526020869052604090205460ff166003811115610a7357610a73610d3e565b14610ac05760405162461bcd60e51b815260206004820152601e60248201527f54656d706c617465496420616c726561647920696e697469616c697a65640000604482015260640161052f565b604080516080810190915280600181526001600160a01b03808516602080840182905260408085019290925243606090940193909352908616600090815291879052902081518154829060ff19166001836003811115610b2257610b22610d3e565b021790555060208281015182546001600160a01b0391821661010002610100600160a81b03199091161783556040840151600180850180549284166001600160a01b0319938416179055606090950151600290940193909355968301805493840181556000818152919091209092018054959096169416939093179093555054919050565b600060143610801590610bbe5750610bbe33610398565b15610bd0575060131936013560601c90565b503390565b600054610100900460ff16610bfc5760405162461bcd60e51b815260040161052f90610e30565b61041e610c0761088a565b610838565b6001600160a01b038116811461044c57600080fd5b600060208284031215610c3357600080fd5b813561039181610c0c565b600060208284031215610c5057600080fd5b5035919050565b6001600160a01b0391909116815260200190565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215610c9457600080fd5b82356001600160401b0380821115610cab57600080fd5b818501915085601f830112610cbf57600080fd5b813581811115610cd157610cd1610c6b565b8060051b604051601f19603f83011681018181108582111715610cf657610cf6610c6b565b604052918252848201925083810185019188831115610d1457600080fd5b938501935b82851015610d3257843584529385019392850192610d19565b98975050505050505050565b634e487b7160e01b600052602160045260246000fd5b6080810160048610610d7657634e487b7160e01b600052602160045260246000fd5b9481526001600160a01b0393841660208201529190921660408201526060015290565b600060208284031215610dab57600080fd5b8151801515811461039157600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156107c3576107c3610dd1565b600060018201610e0c57610e0c610dd1565b5060010190565b600060208284031215610e2557600080fd5b815161039181610c0c565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea26469706673582212201e4f42930a18eeaba13fbf142677a848b00658d308863366410584b2fecc072164736f6c63430008110033","address":"0x9535555E0B8867c9e8E12c0A9fE1d146A5D8bf6d","implementation":"0x9535555E0B8867c9e8E12c0A9fE1d146A5D8bf6d","version":"v3.5.5","libraries":{}}')}}]);