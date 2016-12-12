var Bank = function() {
  this.accounts = [];
};

Bank.prototype = {
  addAccount: function(account) {
    this.accounts.push(account);
  },
  findAccountByOwnerName:function(ownerName) {
    var foundAccount = null;
    for (account of this.accounts) {
      if(account.owner === ownerName) {
        foundAccount = account;
      }
    }
    return foundAccount;
  },
  filteredAccounts: function(type) {
    if(!type) return this.accounts;
    var filteredAccounts = [];
    for (account of this.accounts) {
      if(type === account.type)
        filteredAccounts.push(account);
    }
    return filteredAccounts;
  },
  totalCash:function(type) {
    var total = 0;
    for (account of this.filteredAccounts(type)) {
      total += account.amount;
    }
    return total;
  },
  accountAverage:function(type) {
    return this.totalCash(type)/this.filteredAccounts(type).length;
  }, 
  payInterest:function(percentageInterest){
    for (account of this.accounts) {
      account.amount = Math.round(((account.amount/100)*(100 + percentageInterest))*100)/100;
    }
  }
};

module.exports = Bank;
