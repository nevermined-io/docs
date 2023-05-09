"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1666],{21666:f=>{f.exports=JSON.parse('{"name":"PlonkVerifier","abi":[{"inputs":[{"internalType":"bytes","name":"proof","type":"bytes"},{"internalType":"uint256[]","name":"pubSignals","type":"uint256[]"}],"name":"verifyProof","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x1e8e1e13"}],"bytecode":"0x608060405234801561001057600080fd5b506119b4806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631e8e1e1314610030575b600080fd5b61004361003e366004611867565b610057565b604051901515815260200160405180910390f35b6000611737565b600080600184846000805b821561008b575092938183058581029091039350909181830290039081610069565b505050600181111561009c57600080fd5b505060008112156100aa5783015b9392505050565b60405181602084028301815160208301925060005b828410156100f75781855260008051602061195f8339815191528451830991506020850194506020840193506100c6565b61010f60008051602061195f8339815191528361005e565b91506020850394506020840393508592505b828411156101665760008051602061195f83398151915285518309905060008051602061195f83398151915284518309818552601f1995860195909401939150610121565b5090915250505050565b60008051602061195f833981519152811061018f576000805260206000f35b50565b6103208151146101a6576000805260206000f35b6101b4610260820151610170565b6101c2610280820151610170565b6101d06102a0820151610170565b6101de6102c0820151610170565b6101ec6102e0820151610170565b6101fa610300820151610170565b61018f610320820151610170565b600080602085015161038085015260408501516103a085015260608501516103c085015260808501516103e085015260a085015161040085015260c085015161042085015260e085015161044085015260208301516104608501526020800183015161048085015260406020018301516104a085015260606020018301516104c085015260806020018301516104e085015260a060200183015161050085015260008051602061195f8339815191526101a061038086012006905080602085015260008051602061195f83398151915260208086012006604085015260008051602061195f833981519152604060e085012006600085015260008051602061195f83398151915260c061012085012006915081606085015260008051602061195f83398151915282820960a08501525060008051602061195f833981519152818209905060008051602061195f833981519152818209905060008051602061195f833981519152818209905060008051602061195f833981519152818209905060008051602061195f833981519152818209905060008051602061195f833981519152818209905060008051602061195f833981519152818209905060008051602061195f833981519152818209905060008051602061195f833981519152818209905060008051602061195f833981519152818209905060008051602061195f833981519152818209905060008051602061195f833981519152818209905060008051602061195f833981519152818209905060008051602061195f833981519152818209905080608084015260008051602061195f833981519152806001830301069050806102608401528061028084015260008051602061195f83398151915260e0610260840120068060c085015260008051602061195f83398151915281820991508160e085015260008051602061195f83398151915281830991508161010085015260008051602061195f83398151915281830991508161012085015260008051602061195f83398151915281830991508161014085015260008051602061195f833981519152818309610160850152505060806101e0919091012060008051602061195f83398151915290066101809091015250565b600160008051602061195f8339815191528060008051602061195f833981519152836060860151030106614000096102a083015260008051602061195f83398151915260008051602061191f8339815191528209905060008051602061195f8339815191528060008051602061195f833981519152836060860151030106614000096102c083015260008051602061195f83398151915260008051602061191f8339815191528209905060008051602061195f8339815191528060008051602061195f833981519152836060860151030106614000096102e083015260008051602061195f83398151915260008051602061191f8339815191528209905060008051602061195f8339815191528060008051602061195f8339815191528360608601510301066140000961030083015260008051602061195f83398151915260008051602061191f8339815191528209905060008051602061195f8339815191528060008051602061195f8339815191528360608601510301066140000961032083015260008051602061195f83398151915260008051602061191f8339815191528209905060008051602061195f8339815191528060008051602061195f8339815191528360608601510301066140000961034083015260008051602061195f83398151915260008051602061191f8339815191528209905060008051602061195f8339815191528060008051602061195f8339815191528360608601510301066140000961036083015261077f600861028084016100b1565b6102608201516001915060008051602061195f833981519152816102a0850151096102a084015260008051602061195f83398151915260008051602061191f8339815191528309915060008051602061195f83398151915280826102c08601510983096102c084015260008051602061195f83398151915260008051602061191f8339815191528309915060008051602061195f83398151915280826102e08601510983096102e084015260008051602061195f83398151915260008051602061191f8339815191528309915060008051602061195f833981519152808261030086015109830961030084015260008051602061195f83398151915260008051602061191f8339815191528309915060008051602061195f833981519152808261032086015109830961032084015260008051602061195f83398151915260008051602061191f8339815191528309915060008051602061195f833981519152808261034086015109830961034084015260008051602061195f83398151915260008051602061191f8339815191528309915060008051602061195f8339815191528082610360860151098309610360840152505050565b600060008051602061195f8339815191528060008051602061195f83398151915260208601516102a08601510983030106905060008051602061195f8339815191528060008051602061195f83398151915260408601516102c08601510983030106905060008051602061195f8339815191528060008051602061195f83398151915260608601516102e08601510983030106905060008051602061195f8339815191528060008051602061195f83398151915260808601516103008601510983030106905060008051602061195f8339815191528060008051602061195f83398151915260a08601516103208601510983030106905060008051602061195f8339815191528060008051602061195f83398151915260c08601516103408601510983030106905060008051602061195f8339815191528060008051602061195f83398151915260e086015161036086015109830301069050806101a0830152505050565b600080600060008051602061195f8339815191526101a086015161032086015108925060008051602061195f83398151915260208601516102c086015109915060008051602061195f8339815191526102608501518308915060008051602061195f83398151915260408601518308915060008051602061195f83398151915260208601516102e086015109905060008051602061195f8339815191526102808501518208905060008051602061195f83398151915260408601518208905060008051602061195f833981519152818309915060008051602061195f83398151915260408601516102a086015108905060008051602061195f833981519152818309915060008051602061195f8339815191526103008501518309915060008051602061195f83398151915260008601518309915060008051602061195f83398151915260008601516102a087015109905060008051602061195f83398151915260008601518209905060008051602061195f83398151915281830891505060008051602061195f8339815191528160008051602061195f8339815191528401030691505060008051602061195f83398151915261028084015182099050806101c0840152505050565b6040518151815260208201516020820152825160408201526020830151606082015260408260808360066107d05a03fa905080610ca7576000805260206000f35b505050565b6000604051835181526020840151602082015284604082015260408160608360076107d05a03fa915081610ce4576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa91505080610d15576000805260206000f35b50505050565b600060405183815284602082015285604082015260408160608360076107d05a03fa915081610d4e576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa91505080610d7f576000805260206000f35b5050505050565b600060405183815284602082015285604082015260408360608360076107d05a03fa91505080610d7f576000805260206000f35b6101e08201610dd76101e083018281518152602091820151910152565b610ca7610180840151610220840183610cac565b600080610220840160008051602061195f83398151915260c0860151610260860151099250610e5c837f069fb7e790625d0b413e22cb5e294dd5275a196e9ebcf262e7be88041d930aaa7f1126d31a227aee5327e3b5a3775498af5835edbf7885d08dd5e0dde922cd044684610d86565b60008051602061195f83398151915261028085015184099250610ec1837f17511cb4ba5593c717cbae05a7210fc41c14f04b4929a812e61ac13f7f96223e7f0e6eb4d06e6cb5f4bb39987875e25b4bb28101524eb6e8afed40529e50b2a15584610d1b565b60008051602061195f83398151915260c0860151610280860151099250610f2a837f104c4c9a4761f77ec9c9456611d04f68075cd57b7667b7dcee7971fd4cd131d77f0b6c1955494ddc7b46c5633ad08884d212d116f22d6d3d25ad83c4d9136ed81184610d1b565b60008051602061195f83398151915260c08601516102a0860151099250610f93837f07c7ac949f33bd8790283a2b659f9746c1f8efd85eb25e7328969af0957a46fe7f2a61c4ea9e085a707e6173ce0a6cb1214eb7c022e13b194d6323cc7b249c8a9684610d1b565b60c08501519250610fe6837f082c2dd284ce08dd43c2d5f17eddfbbaf294ba328ccf4db2a437a73147912b697f124225f84ddb3b7c34a34cca0aa71c5d4244f4a159367b8fdb9b913eb7851bde84610d1b565b60008051602061195f83398151915260a086015161026086015108925060008051602061195f83398151915260408601518408925060008051602061195f83398151915260a0860151600209915060008051602061195f8339815191526102808501518308915060008051602061195f83398151915260408601518308915060008051602061195f833981519152828409925060008051602061195f83398151915260a0860151600309915060008051602061195f8339815191526102a08501518308915060008051602061195f83398151915260408601518308915060008051602061195f833981519152828409925060008051602061195f83398151915260008601518409925060008051602061195f83398151915260c08601518409925060008051602061195f83398151915260008601516102a087015109915060008051602061195f83398151915260008601518309915060008051602061195f83398151915260c08601518309915060008051602061195f833981519152828408925060008051602061195f8339815191526101808601518408925061118f8360e0860183610cac565b60008051602061195f8339815191526102c0850151602087015109925060008051602061195f8339815191526102608501518408925060008051602061195f83398151915260408601518408925060008051602061195f8339815191526102e0850151602087015109915060008051602061195f8339815191526102808501518308915060008051602061195f83398151915260408601518308915060008051602061195f833981519152828409925060008051602061195f83398151915260008601518409925060008051602061195f83398151915260c08601518409925060008051602061195f83398151915260208601518409925060008051602061195f833981519152610300850151840960008051602061195f8339815191529081030692506112ff837f10afa56b5618ac7e0908120c2db69f25ec0c8ac3e4da6e83a9ba9085792ac2c47f2a2f22d944ab5cb089ebe3ec2f240f847c4ee272dadd2005465ea97c5b233d6b84610d1b565b61130d610120850182610c66565b6080850151925061132383610160860183610cac565b60008051602061195f8339815191528384099250611346836101a0860183610cac565b61135860e08601516020860183610cac565b61136b6101008601516060860183610cac565b61137e61012086015160a0860183610cac565b6113cf6101408601517f081c3085641e98cbe58d2a3359d8c38bf456c35cf6f5dd1bf4e36b901a344e2c7f21806cd1876fae75357fae4c0a7e56530005ac2f23afcb5faa1b08a1903b393484610d1b565b6114206101608601517f141fcfd1730e6f2e010f1c94e875ebf1ced42dd3aa25bda2f60aea571d849bb97f02b99b96b5dee1859e3b6160386ce8d38a7d907e1e55bbbdf91dc76960e0512584610d1b565b6101c0850151925060008051602061195f8339815191528060c0870151610320870151098408925060008051602061195f8339815191528060e0870151610260870151098408925060008051602061195f83398151915280610100870151610280870151098408925060008051602061195f833981519152806101208701516102a0870151098408925060008051602061195f833981519152806101408701516102c0870151098408925060008051602061195f833981519152806101608701516102e0870151098408925060008051602061195f8339815191528061018087015161030087015109840860008051602061195f83398151915290810306925061152e836002600184610d1b565b60608501519250611544836101e0860183610cac565b60008051602061195f833981519152606086015161018087015109925060008051602061195f83398151915260008051602061191f83398151915284099250610d7f83610220860183610cac565b60006040516101e0830151815260206101e08401015160208201527f26186a2d65ee4d2f9c9a5b91f86597d35f192cd120caf7e935d8443d1938e23d60408201527f30441fd1b5d3370482c42152a8899027716989a6996c2535bc9f7fee8aaef79e60608201527f1970ea81dd6992adfbc571effb03503adbbb6a857f578403c6c40e22d65b3c0260808201527f054793348f12c0cf5622c340573cb277586319de359ab9389778f689786b1e4860a082015261022083015160c082015260206102208401015160008051602061193f8339815191528160008051602061193f833981519152030690508060e0830152507f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26101008201527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6101208201527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6101408201527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa6101608201526020816101808360086107d05a03fa90511692915050565b604051610380810160405261174b84610192565b611756838286610208565b61175f81610544565b6117698382610937565b6117738185610a9c565b61177d8185610dba565b6117878185610deb565b61179081611592565b61038082036040528060005260206000f35b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156117e0576117e06117a2565b604052919050565b600082601f8301126117f957600080fd5b813560206001600160401b03821115611814576118146117a2565b8160051b6118238282016117b8565b928352848101820192828101908785111561183d57600080fd5b83870192505b8483101561185c57823582529183019190830190611843565b979650505050505050565b6000806040838503121561187a57600080fd5b82356001600160401b038082111561189157600080fd5b818501915085601f8301126118a557600080fd5b81356020828211156118b9576118b96117a2565b6118cb601f8301601f191682016117b8565b82815288828487010111156118df57600080fd5b8282860183830137600092810182019290925290945085013591508082111561190757600080fd5b50611914858286016117e8565b915050925092905056fe2d965651cdd9e4811f4e51b80ddca8a8b4a93ee17420aae6adaa01c2617c6e8530644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4730644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001a264697066735822122012dfa3a71f0a425ad65a3508b49b6537ebac1b3b337da661b31d3db5b51c487964736f6c63430008110033","address":"0xEa4Dd57adfAE44180ad33F7Fcb2580DbaE8Dc1c1","implementation":"0xEa4Dd57adfAE44180ad33F7Fcb2580DbaE8Dc1c1","version":"v3.0.0","libraries":{}}')}}]);