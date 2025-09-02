# Split Payment dApp

## Project Description

The Split Payment dApp is a decentralized application built on the Ethereum blockchain that automatically distributes incoming payments among multiple recipients based on predefined percentage allocations. This smart contract solution eliminates the need for manual payment splitting and ensures transparent, trustless distribution of funds.

The system allows users to create payment splits by specifying recipient addresses and their respective percentage shares. When payments are received, the contract automatically distributes the funds according to the predefined splits, making it perfect for revenue sharing, team payments, royalty distributions, and collaborative project funding.

## Project Vision

Our vision is to create a seamless, transparent, and automated payment distribution system that empowers creators, teams, and organizations to fairly share revenue without intermediaries. By leveraging blockchain technology, we aim to:

- Eliminate trust issues in payment splitting
- Reduce administrative overhead in revenue distribution
- Provide real-time transparency in financial transactions
- Enable global, borderless payment splitting
- Create a foundation for the future of collaborative finance

## Key Features

### 🔄 **Automated Payment Distribution**
- Instant and automatic splitting of incoming payments
- No manual intervention required once splits are configured
- Percentage-based allocation system (must sum to 100%)

### 👥 **Multi-Recipient Support**
- Support for up to 10 recipients per split
- Flexible percentage allocation for each recipient
- Easy management of recipient addresses and shares

### 🔍 **Transparency & Tracking**
- Real-time tracking of total payments received
- Complete transaction history through blockchain events
- Public visibility of split configurations and distributions

### 🛡️ **Security & Validation**
- Comprehensive input validation for all parameters
- Protection against invalid addresses and percentages
- Secure fund transfer mechanisms with failure handling

### 🎛️ **Split Management**
- Create multiple payment splits with unique descriptions
- Deactivate splits when no longer needed (recipient-only action)
- Query splits by user address or split ID

### 📊 **Information Retrieval**
- Get detailed information about any split configuration
- View all splits associated with a user address
- Track total number of splits created in the system

## Smart Contract Functions

### Core Functions

1. **`createSplit()`** - Creates a new payment split configuration with recipients and percentages
2. **`receivePayment()`** - Receives and automatically distributes payments according to split rules
3. **`deactivateSplit()`** - Allows recipients to deactivate a split configuration

### View Functions

- `getSplitInfo()` - Retrieves complete information about a specific split
- `getUserSplits()` - Gets all split IDs associated with a user
- `getTotalSplits()` - Returns the total number of splits created

## Future Scope

### 🚀 **Enhanced Features**
- **Time-Based Splits**: Implement splits that change percentages over time
- **Milestone-Based Distribution**: Release payments based on achievement of specific milestones
- **Multi-Token Support**: Extend beyond ETH to support ERC-20 token distributions
- **Escrow Functionality**: Add optional escrow periods before automatic distribution

### 🔧 **Technical Improvements**
- **Gas Optimization**: Implement more gas-efficient distribution mechanisms
- **Batch Operations**: Allow batch creation and management of multiple splits
- **Upgradeable Contracts**: Implement proxy patterns for contract upgradeability
- **Cross-Chain Compatibility**: Extend to multiple blockchain networks

### 🌐 **Integration & Ecosystem**
- **Frontend Dashboard**: Develop comprehensive web interface for split management
- **Mobile Application**: Create mobile app for on-the-go split monitoring
- **API Development**: Build RESTful APIs for third-party integrations
- **DeFi Integration**: Connect with DeFi protocols for yield-generating splits

### 💼 **Business Applications**
- **Creator Economy**: Specialized features for content creators and influencers
- **DAO Treasury**: Integration with DAO governance for automated treasury management
- **Subscription Models**: Support for recurring payment splits
- **Invoice Integration**: Connect with traditional invoicing systems

### 🔐 **Advanced Security**
- **Multi-Signature Support**: Require multiple signatures for split modifications
- **Access Control**: Role-based permissions for split management
- **Audit Trail**: Enhanced logging and compliance features
- **Emergency Controls**: Circuit breakers and emergency withdrawal mechanisms

---

## Getting Started

### Prerequisites
- Node.js and npm installed
- Hardhat development environment
- MetaMask or other Web3 wallet
- Test ETH for deployment and testing

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd split-payment-dapp

# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Deploy to local network
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

### Usage
1. Deploy the contract to your preferred network
2. Create a payment split using `createSplit()` with recipient addresses and percentages
3. Share the split ID with payers
4. Payments sent to `receivePayment()` will be automatically distributed
5. Monitor splits using the view functions

## Contributing

We welcome contributions to improve the Split Payment dApp! Please feel free to submit issues, feature requests, and pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for the decentralized future of payments**


**Contract Address** : 0xe13d37eb737b99a38ec88bfb0ee0fcb04fead1a8

**Transaction Screenshot** : 

https://drive.google.com/file/d/1epMsxCPdD-42H1dCg9YNWkGbTkADoJeX/view?usp=sharing

https://drive.google.com/file/d/1VfDW6Io5l3_t75Tm4NUPKyQ6FNP_uvGb/view?usp=sharing
