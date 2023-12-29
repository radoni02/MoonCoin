import {Block} from './Block'
import {Transaction} from './Transaction'

export class Blockchain{
    public chain : Block[];
    public difficulty = 2;
    public pendingTransactions : Transaction[];
    public miningReward = 100;

    constructor()
    {
        this.chain = [this.createGenesisBlock()];
        this.pendingTransactions = [];
    }

    createGenesisBlock()
    {
        return new Block(Date.now(),[new Transaction(null,null,0)], "0");
    }

    getLatestBlock()
    {
        return this.chain[this.chain.length - 1];
    }

    // addBlock(newBlock : Block)
    // {
    //     newBlock.previousHash = this.getLatestBlock().hash;
    //     newBlock.mineBlock(this.difficulty);
    //     this.chain.push(newBlock);
    // }
    minePendingTransactions(miningRewardAddress : string)
    {
        let block = new Block(Date.now(),this.pendingTransactions);
        block.previousHash = this.getLatestBlock().hash;
        block.mineBlock(this.difficulty);
        console.log('Block successfully mined!');
        this.chain.push(block);

        this.pendingTransactions = [new Transaction(null,miningRewardAddress,this.miningReward)];
        //the above line is used to give the reward to the miner who creates and add this block to the blockchain, fromAddress is null because the miner received it from the system and not a specific user
    }

    addTransaction(transation: Transaction)
    {
        if(!transation.fromAddress || !transation.toAddress)
        {
            throw new Error('Transaction must include fromAddress and toAddress')
        }

        if(!transation.isValid())
        {
            throw new Error('Cannot add invalid transaction to chain');
        }
        this.pendingTransactions.push(transation);
    }

    getBalaceOfAddress(address: string)
    {
        let balace = 0;

        for(const block of this.chain)
        {
            for(const trans of block.transactions)
            {
                if (trans.fromAddress === address)
                {
                    balace -= trans.amount;
                }

                if(trans.toAddress === address)
                {
                    balace += trans.amount;
                }
            }
        }

        return balace;
    }

    isChainValid()
    {
        for(let i = 1;i< this.chain.length;i++)
        {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(!currentBlock.hasValidTransactions())
                return false;
            if(currentBlock.hash !== currentBlock.calculateHash()) 
                return false;
            if(currentBlock.previousHash !== previousBlock.hash)
                return false;
        }
        return true;
    }
}