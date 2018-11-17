# Key Concepts

::: warning
_Please note: the OMG Network is still in development, and some details cannot yet be included. This knowledge base will be revised regularly to include updates and additional details._
:::

## Decentralized Network

In a decentralized network, data is not stored or administrated by a private server. Instead, the blockchain is redundantly stored and monitored by many nodes, distributed amongst a web of individual machines with different owners that perform continuous consensus on the validity of changes to its state. If this sounds like you’re being asked to trust a bunch of strangers to behave honestly, it’s actually quite the opposite: there are mechanisms in place to reward nodes which align themselves with network consensus, and penalize those which do not. (See the Proof of Stake section for more on OMG’s specific enforcement mechanisms)

Centralized networks require trust in a central party, which will maybe - even probably - act responsibly. However, centralized systems are necessarily opaque and gated, and centralized databases are vulnerable to attack because they present a single point of entry for bad actors looking to steal or manipulate that data. In contrast, decentralized networks are transparent in that every state and every state change (i.e. every balance and every transaction) is stored on a shared ledger which can be viewed by anyone, or are obscured in a way that makes voluntary provable traceability possible where necessary, so there is no need to trust the word of a central authority.


## Proof of Stake (PoS)

Unlike Proof of Work (PoW), in which a miner or validator has to expend an enormous amount of computing power in order to mine a block, Proof of Stake (PoS) requires a validator to "stake" their tokens in order to validate: essentially, put their tokens in a security deposit. If they validate actively and honestly they are rewarded; if they behave dishonestly they lose tokens. Both systems are designed to make faulty behavior cost more than it’s worth:

The brute computational strength needed to mine a block in a PoW system represents both a substantial investment in hardware and a great deal of energy consumed. The first miner to demonstrate correct PoW on a mined block receives a block reward as well as transaction fees associated with that block. That investment is a sunk cost regardless of the outcome; miners who misbehave (e.g. submitting incorrect proofs) will expend resources and see no returns, while honest ones have a chance of collecting block rewards that make them their money back and then some.

In PoS, we skip all the hardware and burned energy. Validators just put their investment (in the form of tokens) directly into the system, get rewarded in the form of transaction fees for non-faulty behavior and are penalized by the protocol for faulty behavior. That penalty can take the form of either hard slashing (loss of all staked tokens) or soft slashing (loss of returns). OMG will use soft slashing in its initial Honte implementation.

Returns are distributed in proportion to the number of tokens staked. However, PoS still represents a more equitable system in that returns are directly proportional to your stake. In PoW, the more computing power you have, the cheaper it is to add more - and since computing power is what earns you mining rewards, this leads to people with lots of money collecting disproportionately larger returns. In PoS, a dollar is a dollar no matter how many of them you have.  


## OMG token function

The OMG token is first and foremost a staking token. By holding OMG tokens, users gain the right to take an active role by running validator nodes on OMG’s Proof of Stake network, using their tokens as a security deposit. Returns may be paid out in any currency, including but not limited to OMG. OMG will be a conduit for bringing value to Ethereum mainnet, because the value of OMG will be backed by the value of the amounts transacted on the OMG network; both external, real-world money, and crypto-money that is being pushed through the network’s decentralized exchange (including the other applications, businesses, and token projects that are outsourcing their DEX requirements to it).

The token will have value derived from the fees derived from this network, with the obligation/cost of providing validation to its users. This token must have value, to prevent low-cost attacks and is necessary to enforce this network.

As the OMG platform and underlying network develops and evolves over time, so does the nature and role of the OMG token.


## Scalability with Plasma

Plasma is a framework for scalable decentralized applications, conceived by Lightning Network creator Joseph Poon and Ethereum creator Vitalik Buterin. We will provide a brief overview here; the full whitepaper can be found at http://plasma.io/.

OMG is being built as a scaling solution for decentralized nance on Ethereum, using the Plasma architecture. Plasma structures blockchain computation into MapReduce functions and uses a combination of proof-of-stake token bonding, fraud proofs to reduce the costs of computation, a withdrawal design to efficiently counter network attacks, and the network security provided by Ethereum as the root chain to safely enable unprecedented transaction and on-chain exchange processing speed and scale.

This is achieved by allowing many “child chains” to run on top of the main blockchain, each interacting with the root chain with its own customized set of smart contracts. Computation happens primarily within these child chains, and only state proofs (tiny data packets, essentially snapshots of the balances within the child chain) are committed to and enforced by the root chain. This means that transactions can be processed instantly o-chain, but are ultimately stored on and enforced by the Ethereum root chain.


## Plasma: The Basics

As an ultimate safeguard, Plasma also employs an exit mechanism which allows account holders who identify suspicious behavior within a child chain to withdraw to the root chain, reverting all accounts on the child chain to the last root chain-finalized state. We have a team actively working on building a release-ready Minimum Viable Plasma implementation. You can read more about our progress on the MVP here.


## Hazards of Centralization

On a global scale, centralization in monetary systems create and perpetuate inequality: a tiny minority of people act as gatekeepers to the vast majority of the world’s wealth. Wealth buys power, power begets wealth, and resources are siphoned into a black hole from which they rarely return: the richest 1% of people own more wealth than the rest of the planet combined and this disparity is only increasing.

Our current financial institutions don’t just enable this hoarding of wealth (whether intentionally or inadvertently), they also control the channels by which ordinary people can hold and move money, and impose regressive fee structures which make it very expensive to be poor. Many banks now impose fees on accounts that do not maintain a high enough balance - literally charging customers for not having enough money

Even for the consumer who can maintain a healthy account balance, avoid crushing debt and manage to establish a comfortable financial position, privatized systems are motivated by profit first before customers’ needs. They charge a lot to use, are kind of unpleasant, and are resistant to improvements that don't first improve conditions for owners. No ‘interoperability' between networks means customers must juggle many accounts, wallets and payment systems, often paying high fees to transfer money or assets between networks.

On OMG’s decentralized network, transaction fees will directly reflect the actual cost of validation, not the whims of a third party. Fees serve as an incentive to validators to enforce consensus across the network, rather than funneling to a central self-enriching authority. The cost of using the network is no more or less than the cost of maintaining it.

The OMG network is also optimized for interoperability: providers can allow their customers to send and receive payments not only inside their own channels, but also cross-channel. The OMG network allows for seamless interchange between wallets, while the OMG blockchain keeps a universal ledger of every wallet’s current balance.

As long as everyday users have no other option, financial institutions have no incentive to change (and to be fair, these institutions haven’t really had a better alternative either). With blockchain technology, we can now do better. Existing institutions that adopt this technology will be able to serve their users better, decrease fraud risk and improve efficiency. Institutions that do not may find themselves out-competed by the adopters.

OMG will use centralized mechanisms only ever as a transitional stage, with an understanding that decentralized mechanisms will replace them, along with the open-source culture of a public development progress. At no time will Omise or OmiseGO charge rent on the network or impose mandatory fees on network users other than those earned in the same way as anyone else - as validators on the network.


## Unbanking the Banked

Billions of people across the world are unbanked, meaning they don’t have access to traditional banking infrastructure such as cards, loans, etc and primarily use at cash for everything from getting paid to buying groceries.

Much of the discussion has been around “banking the unbanked”, bringing the unbanked into traditional financial systems via mobile nance tools. We think the truly exciting opportunities digitized nance opens up are quite the opposite. It opens up the possibility of a decentralized financial system where being “banked” is not a requirement for world citizenship and financial freedom is not a privilege of the wealthy but a basic right available to anyone.

We are building infrastructure that will provide unprecedented financial access and sovereignty to people that is unmatched by banks today. The design permits user custody of funds, which decentralizes some of the functionality of banks, but not all, while simultaneously increasing usability. Banks still have roles to play, and many of them are interested in using the OMG network for their asset exchange needs. We hope to also help them increase the quality of the services they can provide to people who are their voluntary customers.  
