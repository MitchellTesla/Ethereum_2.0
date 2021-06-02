import BN from 'bn.js';
import { Address } from 'web3x/address';
import { EventLog, TransactionReceipt } from 'web3x/formatters';
import { Contract, ContractOptions, TxCall, TxSend, EventSubscriptionFactory } from 'web3x/contract';
import { Eth } from 'web3x/eth';
import abi from './DaiContractAbi';
export type MintEvent = {
  guy: Address;
  wad: string;
};
export type BurnEvent = {
  guy: Address;
  wad: string;
};
export type LogSetAuthorityEvent = {
  authority: Address;
};
export type LogSetOwnerEvent = {
  owner: Address;
};
export type LogNoteEvent = {
  sig: string;
  guy: Address;
  foo: string;
  bar: string;
  wad: string;
  fax: string;
};
export type ApprovalEvent = {
  src: Address;
  guy: Address;
  wad: string;
};
export type TransferEvent = {
  src: Address;
  dst: Address;
  wad: string;
};
export interface MintEventLog extends EventLog<MintEvent, 'Mint'> {}
export interface BurnEventLog extends EventLog<BurnEvent, 'Burn'> {}
export interface LogSetAuthorityEventLog extends EventLog<LogSetAuthorityEvent, 'LogSetAuthority'> {}
export interface LogSetOwnerEventLog extends EventLog<LogSetOwnerEvent, 'LogSetOwner'> {}
export interface LogNoteEventLog extends EventLog<LogNoteEvent, 'LogNote'> {}
export interface ApprovalEventLog extends EventLog<ApprovalEvent, 'Approval'> {}
export interface TransferEventLog extends EventLog<TransferEvent, 'Transfer'> {}
interface DaiContractEvents {
  Mint: EventSubscriptionFactory<MintEventLog>;
  Burn: EventSubscriptionFactory<BurnEventLog>;
  LogSetAuthority: EventSubscriptionFactory<LogSetAuthorityEventLog>;
  LogSetOwner: EventSubscriptionFactory<LogSetOwnerEventLog>;
  LogNote: EventSubscriptionFactory<LogNoteEventLog>;
  Approval: EventSubscriptionFactory<ApprovalEventLog>;
  Transfer: EventSubscriptionFactory<TransferEventLog>;
}
interface DaiContractEventLogs {
  Mint: MintEventLog;
  Burn: BurnEventLog;
  LogSetAuthority: LogSetAuthorityEventLog;
  LogSetOwner: LogSetOwnerEventLog;
  LogNote: LogNoteEventLog;
  Approval: ApprovalEventLog;
  Transfer: TransferEventLog;
}
interface DaiContractTxEventLogs {
  Mint: MintEventLog[];
  Burn: BurnEventLog[];
  LogSetAuthority: LogSetAuthorityEventLog[];
  LogSetOwner: LogSetOwnerEventLog[];
  LogNote: LogNoteEventLog[];
  Approval: ApprovalEventLog[];
  Transfer: TransferEventLog[];
}
export interface DaiContractTransactionReceipt extends TransactionReceipt<DaiContractTxEventLogs> {}
interface DaiContractMethods {
  name(): TxCall<string>;
  stop(): TxSend<DaiContractTransactionReceipt>;
  approve(guy: Address, wad: number | string | BN): TxSend<DaiContractTransactionReceipt>;
  setOwner(owner_: Address): TxSend<DaiContractTransactionReceipt>;
  totalSupply(): TxCall<string>;
  transferFrom(src: Address, dst: Address, wad: number | string | BN): TxSend<DaiContractTransactionReceipt>;
  decimals(): TxCall<string>;
  mint(guy: Address, wad: number | string | BN): TxSend<DaiContractTransactionReceipt>;
  burn(wad: number | string | BN): TxSend<DaiContractTransactionReceipt>;
  setName(name_: string): TxSend<DaiContractTransactionReceipt>;
  balanceOf(src: Address): TxCall<string>;
  stopped(): TxCall<boolean>;
  setAuthority(authority_: Address): TxSend<DaiContractTransactionReceipt>;
  owner(): TxCall<Address>;
  symbol(): TxCall<string>;
  burn(guy: Address, wad: number | string | BN): TxSend<DaiContractTransactionReceipt>;
  mint(wad: number | string | BN): TxSend<DaiContractTransactionReceipt>;
  transfer(dst: Address, wad: number | string | BN): TxSend<DaiContractTransactionReceipt>;
  push(dst: Address, wad: number | string | BN): TxSend<DaiContractTransactionReceipt>;
  move(src: Address, dst: Address, wad: number | string | BN): TxSend<DaiContractTransactionReceipt>;
  start(): TxSend<DaiContractTransactionReceipt>;
  authority(): TxCall<Address>;
  approve(guy: Address): TxSend<DaiContractTransactionReceipt>;
  allowance(src: Address, guy: Address): TxCall<string>;
  pull(src: Address, wad: number | string | BN): TxSend<DaiContractTransactionReceipt>;
}
export interface DaiContractDefinition {
  methods: DaiContractMethods;
  events: DaiContractEvents;
  eventLogs: DaiContractEventLogs;
}
export class DaiContract extends Contract<DaiContractDefinition> {
  constructor(eth: Eth, address?: Address, options?: ContractOptions) {
    super(eth, abi, address, options);
  }
  deploy(symbol_: string) {
    return super.deployBytecode(
      '0x606060405260126006556000600755341561001957600080fd5b604051602080610dd283398101604052808051600160a060020a03331660008181526001602052604080822082905590805560048054600160a060020a0319168317905591935091507fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94905160405180910390a2600555610d338061009f6000396000f3006060604052600436106101485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde03811461014d57806307da68f514610172578063095ea7b31461018757806313af4035146101bd57806318160ddd146101dc57806323b872dd146101ef578063313ce5671461021757806340c10f191461022a57806342966c681461024c5780635ac801fe1461026257806370a082311461027857806375f12b21146102975780637a9e5e4b146102aa5780638da5cb5b146102c957806395d89b41146102f85780639dc29fac1461030b578063a0712d681461032d578063a9059cbb14610343578063b753a98c14610365578063bb35783b14610387578063be9a6555146103af578063bf7e214f146103c2578063daea85c5146103d5578063dd62ed3e146103f4578063f2d5d56b14610419575b600080fd5b341561015857600080fd5b61016061043b565b60405190815260200160405180910390f35b341561017d57600080fd5b610185610441565b005b341561019257600080fd5b6101a9600160a060020a03600435166024356104e0565b604051901515815260200160405180910390f35b34156101c857600080fd5b610185600160a060020a036004351661050d565b34156101e757600080fd5b61016061058c565b34156101fa57600080fd5b6101a9600160a060020a0360043581169060243516604435610592565b341561022257600080fd5b610160610707565b341561023557600080fd5b610185600160a060020a036004351660243561070d565b341561025757600080fd5b6101856004356107d3565b341561026d57600080fd5b6101856004356107e0565b341561028357600080fd5b610160600160a060020a0360043516610806565b34156102a257600080fd5b6101a9610821565b34156102b557600080fd5b610185600160a060020a0360043516610831565b34156102d457600080fd5b6102dc6108b0565b604051600160a060020a03909116815260200160405180910390f35b341561030357600080fd5b6101606108bf565b341561031657600080fd5b610185600160a060020a03600435166024356108c5565b341561033857600080fd5b610185600435610a33565b341561034e57600080fd5b6101a9600160a060020a0360043516602435610a3d565b341561037057600080fd5b610185600160a060020a0360043516602435610a4a565b341561039257600080fd5b610185600160a060020a0360043581169060243516604435610a5a565b34156103ba57600080fd5b610185610a6b565b34156103cd57600080fd5b6102dc610b04565b34156103e057600080fd5b6101a9600160a060020a0360043516610b13565b34156103ff57600080fd5b610160600160a060020a0360043581169060243516610b39565b341561042457600080fd5b610185600160a060020a0360043516602435610b64565b60075481565b61045733600035600160e060020a031916610b6f565b151561046257600080fd5b600435602435808233600160a060020a031660008035600160e060020a0319169034903660405183815260406020820181815290820183905260608201848480828437820191505094505050505060405180910390a450506004805474ff0000000000000000000000000000000000000000191660a060020a179055565b60045460009060a060020a900460ff16156104fa57600080fd5b6105048383610c7b565b90505b92915050565b61052333600035600160e060020a031916610b6f565b151561052e57600080fd5b6004805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038381169190911791829055167fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9460405160405180910390a250565b60005490565b60045460009060a060020a900460ff16156105ac57600080fd5b33600160a060020a031684600160a060020a0316141580156105f65750600160a060020a038085166000908152600260209081526040808320339094168352929052205460001914155b1561065457600160a060020a038085166000908152600260209081526040808320339094168352929052205461062c9083610ce7565b600160a060020a03808616600090815260026020908152604080832033909416835292905220555b600160a060020a0384166000908152600160205260409020546106779083610ce7565b600160a060020a0380861660009081526001602052604080822093909355908516815220546106a69083610cf7565b600160a060020a03808516600081815260016020526040908190209390935591908616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b60065481565b61072333600035600160e060020a031916610b6f565b151561072e57600080fd5b60045460a060020a900460ff161561074557600080fd5b600160a060020a0382166000908152600160205260409020546107689082610cf7565b600160a060020a0383166000908152600160205260408120919091555461078f9082610cf7565b600055600160a060020a0382167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d41213968858260405190815260200160405180910390a25050565b6107dd33826108c5565b50565b6107f633600035600160e060020a031916610b6f565b151561080157600080fd5b600755565b600160a060020a031660009081526001602052604090205490565b60045460a060020a900460ff1681565b61084733600035600160e060020a031916610b6f565b151561085257600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038381169190911791829055167f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada460405160405180910390a250565b600454600160a060020a031681565b60055481565b6108db33600035600160e060020a031916610b6f565b15156108e657600080fd5b60045460a060020a900460ff16156108fd57600080fd5b33600160a060020a031682600160a060020a0316141580156109475750600160a060020a038083166000908152600260209081526040808320339094168352929052205460001914155b156109a557600160a060020a038083166000908152600260209081526040808320339094168352929052205461097d9082610ce7565b600160a060020a03808416600090815260026020908152604080832033909416835292905220555b600160a060020a0382166000908152600160205260409020546109c89082610ce7565b600160a060020a038316600090815260016020526040812091909155546109ef9082610ce7565b600055600160a060020a0382167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca58260405190815260200160405180910390a25050565b6107dd338261070d565b6000610504338484610592565b610a55338383610592565b505050565b610a65838383610592565b50505050565b610a8133600035600160e060020a031916610b6f565b1515610a8c57600080fd5b600435602435808233600160a060020a031660008035600160e060020a0319169034903660405183815260406020820181815290820183905260608201848480828437820191505094505050505060405180910390a450506004805474ff000000000000000000000000000000000000000019169055565b600354600160a060020a031681565b60045460009060a060020a900460ff1615610b2d57600080fd5b61050782600019610c7b565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b610a55823383610592565b600030600160a060020a031683600160a060020a03161415610b9357506001610507565b600454600160a060020a0384811691161415610bb157506001610507565b600354600160a060020a03161515610bcb57506000610507565b600354600160a060020a031663b70096138430856000604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8616028152600160a060020a039384166004820152919092166024820152600160e060020a03199091166044820152606401602060405180830381600087803b1515610c5957600080fd5b6102c65a03f11515610c6a57600080fd5b505050604051805190509050610507565b600160a060020a03338116600081815260026020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b8082038281111561050757600080fd5b8082018281101561050757600080fd00a165627a7a723058200877df264aa5d498c61a45dfe4fc04c68d11820448cf0cc7a275283a271173b40029',
      symbol_,
    ) as TxSend<DaiContractTransactionReceipt>;
  }
}
export var DaiContractAbi = abi;
