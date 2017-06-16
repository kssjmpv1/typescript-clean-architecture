import { Account } from '../definitions/entities/account';
import { AccountContract } from '../definitions/contracts/account.contract';

export default class AccountBusiness {
  constructor(
    private accountContract: AccountContract
  ) { }

  getAll(): Promise<Account[]> {
    return this.accountContract.findAll();
  }

  create(owner: string, balance: number): Promise<Account> {
    return this.accountContract.create(owner, balance);
  }
}