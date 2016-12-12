var BankView = function(bank){
  this.bank = bank;
};

BankView.prototype = {

  render: function(){
    this.displayTotal('total');
    this.displayAccountList('accounts');
    this.displayAverage('average');

    this.displayTotal('business-total', 'business');
    this.displayAccountList('business-accounts', 'business');
    this.displayAverage('business-accounts-average', 'business');

    this.displayTotal('personal-total', 'personal');
    this.displayAccountList('personal-accounts', 'personal');
    this.displayAverage('personal-accounts-average', 'personal');
  },

  displayTotal: function(elementId, totalType){
     var totalElement = document.getElementById(elementId);
     totalElement.innerHTML = "Total: £" + this.bank.totalCash(totalType).toFixed(2);
  },

  displayAccountList: function(elementId, accountType){
    var accountListElement = document.getElementById(elementId);
    var accounts = this.bank.filteredAccounts(accountType);
    this.populateAccountList(accountListElement, accounts);
  },

  displayAverage: function(elementId, accountType){
    var averageElement = document.getElementById(elementId);
    averageElement.innerHTML = "Average: £" + (Math.round(this.bank.accountAverage(accountType)*100)/100).toFixed(2);
  },

  populateAccountList: function(listElement, accounts){
    while (listElement.firstChild){
      listElement.removeChild(listElement.firstChild);
    }
    for (account of accounts){
      var accountListItem = document.createElement('li');
      listElement.appendChild(accountListItem);
      accountListItem.innerHTML = account.owner + ": £" + account.amount.toFixed(2);
    }
  }, 

  getInterestButton: function(){
    return document.getElementById('pay-interest');
  }
}

module.exports = BankView;