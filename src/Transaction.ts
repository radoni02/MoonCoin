export class Transaction{

    public fromAddress: string;
    public toAddress: string;
    public amount: number;

    constructor(fromAddress,toAddress,amount)
    {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}