import {Block} from './Block'

export class Blockchain{
    public chain : Block[];
    public difficulty = 4;

    constructor()
    {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock()
    {
        return new Block(0,Date.now(),"Genesis block", "0");
    }

    getLatestBlock()
    {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock : Block)
    {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid()
    {
        for(let i = 1;i< this.chain.length;i++)
        {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if(currentBlock.hash !== currentBlock.calculateHash()) 
                return false;
            if(currentBlock.previousHash !== previousBlock.hash)
                return false;

            return true;
        }
    }
}