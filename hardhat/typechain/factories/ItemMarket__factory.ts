/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ItemMarket, ItemMarketInterface } from "../ItemMarket";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "BuyItem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "ListItem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RemoveItem",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_metallicAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "buyItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllItems",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct ItemMarket.SaleInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalItems",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "inventory",
    outputs: [
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "listItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "removeItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506001600081905550611e8c806100286000396000f3fe6080604052600436106100965760003560e01c806366de6ebb11610069578063bcb143ef1161004e578063bcb143ef146101b0578063be63f782146101d9578063f23a6e611461021957610096565b806366de6ebb1461014a578063bc197c811461017357610096565b806301ffc9a71461009b578063266fa895146100d8578063310aac69146100f45780634ba1d6aa1461011f575b600080fd5b3480156100a757600080fd5b506100c260048036038101906100bd91906112c3565b610256565b6040516100cf91906116ff565b60405180910390f35b6100f260048036038101906100ed919061110b565b6102d0565b005b34801561010057600080fd5b5061010961078d565b6040516101169190611875565b60405180910390f35b34801561012b57600080fd5b5061013461079a565b60405161014191906116dd565b60405180910390f35b34801561015657600080fd5b50610171600480360381019061016c91906111f4565b610998565b005b34801561017f57600080fd5b5061019a60048036038101906101959190611053565b610b3d565b6040516101a7919061171a565b60405180910390f35b3480156101bc57600080fd5b506101d760048036038101906101d2919061123f565b610b52565b005b3480156101e557600080fd5b5061020060048036038101906101fb91906112e8565b610dce565b60405161021094939291906115e0565b60405180910390f35b34801561022557600080fd5b50610240600480360381019061023b919061116a565b610e1e565b60405161024d919061171a565b60405180910390f35b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806102c957506102c882610e33565b5b9050919050565b60026000541415610316576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030d90611815565b60405180910390fd5b60026000819055506000811415610362576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035990611775565b60405180910390fd5b60008290506000600160008361ffff1661ffff168152602001908152602001600020905082816002015410156103cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c490611855565b60405180910390fd5b6000816003015490506000670de0b6b3a764000085836103ed91906119ab565b6103f791906119ab565b9050808873ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161043391906115c5565b60206040518083038186803b15801561044b57600080fd5b505afa15801561045f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610483919061130d565b10156104c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bb90611755565b60405180910390fd5b60008873ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b8152600401610501929190611625565b60206040518083038186803b15801561051957600080fd5b505afa15801561052d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610551919061130d565b905081811015610596576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058d906117f5565b60405180910390fd5b8873ffffffffffffffffffffffffffffffffffffffff166323b872dd338660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b81526004016105f79392919061164e565b602060405180830381600087803b15801561061157600080fd5b505af1158015610625573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610649919061129e565b508773ffffffffffffffffffffffffffffffffffffffff1663f242432a30338a8a6040518563ffffffff1660e01b81526004016106899493929190611685565b600060405180830381600087803b1580156106a357600080fd5b505af11580156106b7573d6000803e3d6000fd5b50505050858460020160008282546106cf9190611a05565b925050819055508773ffffffffffffffffffffffffffffffffffffffff168460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fb10ea0416ebf85c36e0ba132a99151eb95174ec53fb76bbbba5058de53074c918a8a88604051610772939291906118b9565b60405180910390a45050505050600160008190555050505050565b6000600280549050905090565b606060006107a661078d565b905060008167ffffffffffffffff8111156107ea577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561082357816020015b610810610e9d565b8152602001906001900390816108085790505b50905060005b8281101561098f576000819050600060028261ffff1681548110610876577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090601091828204019190066002029054906101000a900461ffff169050600160008261ffff1661ffff1681526020019081526020016000206040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152505084848151811061096f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052505050808061098790611b1f565b915050610829565b50809250505090565b60008114156109dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d390611735565b60405180910390fd5b60008290506000600160008361ffff1661ffff16815260200190815260200160002090508281600201541015610a47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3e906117d5565b60405180910390fd5b828160020154610a579190611a05565b81600201819055508473ffffffffffffffffffffffffffffffffffffffff1663f242432a303387876040518563ffffffff1660e01b8152600401610a9e9493929190611685565b600060405180830381600087803b158015610ab857600080fd5b505af1158015610acc573d6000803e3d6000fd5b505050508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167e217e26650c4967b729231fe20b51f925d29551961ca00166a67709c094871a8686604051610b2e929190611890565b60405180910390a35050505050565b600063bc197c8160e01b905095945050505050565b60008111610b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8c90611835565b60405180910390fd5b6000821415610bd9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd0906117b5565b60405180910390fd5b60008390506000600160008361ffff1661ffff16815260200190815260200160002090506000816002015414610c44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3b90611795565b60405180910390fd5b848160010181905550838160020181905550828160030181905550338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060028290806001815401808255809150506001900390600052602060002090601091828204019190066002029091909190916101000a81548161ffff021916908361ffff1602179055508573ffffffffffffffffffffffffffffffffffffffff1663f242432a333088886040518563ffffffff1660e01b8152600401610d2b9493929190611685565b600060405180830381600087803b158015610d4557600080fd5b505af1158015610d59573d6000803e3d6000fd5b505050508573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f63dae334df4ed88251ae019d58f6e1d070bc2ce749a4d5d8670852420323dc09878787604051610dbe939291906118b9565b60405180910390a3505050505050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154905084565b600063f23a6e6160e01b905095945050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6040518060800160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081525090565b6000610eee610ee984611915565b6118f0565b90508083825260208201905082856020860285011115610f0d57600080fd5b60005b85811015610f3b57610f228783611029565b8352602083019250602082019150600181019050610f10565b5050509392505050565b6000610f58610f5384611941565b6118f0565b905082815260208101848484011115610f7057600080fd5b610f7b848285611adf565b509392505050565b600081359050610f9281611de3565b92915050565b600082601f830112610fa8578081fd5b8135610fb8848260208601610edb565b91505092915050565b600081519050610fd081611dfa565b92915050565b600081359050610fe581611e11565b92915050565b600082601f830112610ffb578081fd5b813561100b848260208601610f45565b91505092915050565b60008135905061102381611e28565b92915050565b60008135905061103881611e3f565b92915050565b60008151905061104d81611e3f565b92915050565b600080600080600060a0868803121561106a578081fd5b61107687828801610f83565b9450602061108688828901610f83565b945050604086013567ffffffffffffffff8111156110a2578182fd5b6110ae88828901610f98565b935050606086013567ffffffffffffffff8111156110ca578182fd5b6110d688828901610f98565b925050608086013567ffffffffffffffff8111156110f2578182fd5b6110fe88828901610feb565b9150509295509295909350565b60008060008060808587031215611120578384fd5b61112c86858701610f83565b9350602061113c87828801610f83565b935050604061114d87828801611029565b925050606061115e87828801611029565b91505092959194509250565b600080600080600060a08688031215611181578081fd5b61118d87828801610f83565b9450602061119d88828901610f83565b94505060406111ae88828901611029565b93505060606111bf88828901611029565b925050608086013567ffffffffffffffff8111156111db578182fd5b6111e788828901610feb565b9150509295509295909350565b600080600060608486031215611208578283fd5b61121485848601610f83565b9250602061122486828701611029565b925050604061123586828701611029565b9150509250925092565b60008060008060808587031215611254578384fd5b61126086858701610f83565b9350602061127087828801611029565b935050604061128187828801611029565b925050606061129287828801611029565b91505092959194509250565b6000602082840312156112af578081fd5b6112bb83828401610fc1565b905092915050565b6000602082840312156112d4578081fd5b6112e083828401610fd6565b905092915050565b6000602082840312156112f9578081fd5b61130583828401611014565b905092915050565b60006020828403121561131e578081fd5b61132a8382840161103e565b905092915050565b61133c8282611566565b506000608082019050919050565b61135381611abb565b82525050565b61136281611a39565b82525050565b61137181611a39565b82525050565b600061138282611982565b61138c818561199a565b935061139783611972565b825b828110156113c65781516113ad8782611332565b9650506113b98261198d565b9150600181019050611399565b50505082905092915050565b6113db81611a4b565b82525050565b6113ea81611a57565b82525050565b6113fb601f8261199a565b905061140681611bd7565b6000602082019050919050565b61141e60328261199a565b905061142981611c00565b6000604082019050919050565b611441601c8261199a565b905061144c81611c4f565b6000602082019050919050565b611464602b8261199a565b905061146f81611c78565b6000604082019050919050565b611487601d8261199a565b905061149281611cc7565b6000602082019050919050565b6114aa60228261199a565b90506114b581611cf0565b6000604082019050919050565b6114cd60198261199a565b90506114d881611d3f565b6000602082019050919050565b60006114f1818361199a565b91508082019050919050565b611508601f8261199a565b905061151381611d68565b6000602082019050919050565b61152b601c8261199a565b905061153681611d91565b6000602082019050919050565b61154e60208261199a565b905061155981611dba565b6000602082019050919050565b60008101516115786000840182611359565b50602081015161158b60208401826115b6565b50604081015161159e60408401826115b6565b5060608101516115b160608401826115b6565b505050565b6115bf81611ab1565b82525050565b60006020820190506115da6000830184611368565b92915050565b60006080820190506115f56000830187611359565b61160260208301866115b6565b61160f60408301856115b6565b61161c60608301846115b6565b95945050505050565b600060408201905061163a6000830185611368565b6116476020830184611368565b9392505050565b60006060820190506116636000830186611368565b611670602083018561134a565b61167d60408301846115b6565b949350505050565b600060a08201905061169a6000830187611368565b6116a76020830186611368565b6116b460408301856115b6565b6116c160608301846115b6565b81810360808301526116d2816114e5565b905095945050505050565b600060208201905081810360008301526116f78184611377565b905092915050565b600060208201905061171460008301846113d2565b92915050565b600060208201905061172f60008301846113e1565b92915050565b6000602082019050818103600083015261174e816113f0565b9050919050565b6000602082019050818103600083015261176e81611413565b9050919050565b6000602082019050818103600083015261178e81611436565b9050919050565b600060208201905081810360008301526117ae81611459565b9050919050565b600060208201905081810360008301526117ce8161147c565b9050919050565b600060208201905081810360008301526117ee8161149f565b9050919050565b6000602082019050818103600083015261180e816114c2565b9050919050565b6000602082019050818103600083015261182e816114fd565b9050919050565b6000602082019050818103600083015261184e81611520565b9050919050565b6000602082019050818103600083015261186e81611543565b9050919050565b600060208201905061188a60008301846115b6565b92915050565b60006040820190506118a560008301856115b6565b6118b260208301846115b6565b9392505050565b60006060820190506118ce60008301866115b6565b6118db60208301856115b6565b6118e860408301846115b6565b949350505050565b60006118fa61190b565b90506119068282611aee565b919050565b6000604051905090565b600067ffffffffffffffff8211156119305761192f611b97565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561195c5761195b611b97565b5b61196582611bc6565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b818152600060208201905092915050565b6119b481611ab1565b90506119bf82611ab1565b91506000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156119fa576119f9611b68565b5b828202905092915050565b611a0e81611ab1565b9050611a1982611ab1565b9150600082821015611a2e57611a2d611b68565b5b828203905092915050565b6000611a4482611a91565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611ac682611acd565b9050919050565b6000611ad882611a39565b9050919050565b82818337600083830152505050565b611af782611bc6565b810181811067ffffffffffffffff82111715611b1657611b15611b97565b5b80604052505050565b611b2881611ab1565b905060007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611b5d57611b5c611b68565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4d61726b6574506c6163653a206e6f7468696e6720746f2072656d6f76652e00600082015250565b7f4d61726b6574706c6163653a206e6f7420656e6f75676874204d544c20746f2060008201527f636f76657220746f74616c2070726963652e0000000000000000000000000000602082015250565b7f4d61726b6574506c6163653a206e6f7468696e6720746f206275792e00000000600082015250565b7f4d61726b6574506c6163653a2063616e63656c206578697374696e67206c697360008201527f74696e672066697273742e000000000000000000000000000000000000000000602082015250565b7f4d61726b6574506c6163653a206e6f7468696e6720746f206c6973742e000000600082015250565b7f4d61726b6574506c6163653a206e6f7420656e6f75676820746f2072656d6f7660008201527f652e000000000000000000000000000000000000000000000000000000000000602082015250565b7f436865636b2074686520746f6b656e20616c6c6f77616e636500000000000000600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f5072696365206d757374206265206174206c6561737420312077656900000000600082015250565b7f4d61726b6574506c6163653a206e6f7420656e6f75676820746f2073656c6c2e600082015250565b611dec81611a39565b8114611df757600080fd5b50565b611e0381611a4b565b8114611e0e57600080fd5b50565b611e1a81611a57565b8114611e2557600080fd5b50565b611e3181611a83565b8114611e3c57600080fd5b50565b611e4881611ab1565b8114611e5357600080fd5b5056fea2646970667358221220c7f06c41d911d38591c12382933f5ed2692df633bf15c3eddc53af627c25840564736f6c63430008040033";

export class ItemMarket__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ItemMarket> {
    return super.deploy(overrides || {}) as Promise<ItemMarket>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ItemMarket {
    return super.attach(address) as ItemMarket;
  }
  connect(signer: Signer): ItemMarket__factory {
    return super.connect(signer) as ItemMarket__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ItemMarketInterface {
    return new utils.Interface(_abi) as ItemMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ItemMarket {
    return new Contract(address, _abi, signerOrProvider) as ItemMarket;
  }
}
