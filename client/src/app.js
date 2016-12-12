var Bank = require('./bank/bank.js');
var BankView = require('./views/bank_view.js');
var sampleAccounts = require('../sample.json');
var Account = require('./bank/account.js');

window.onload = function() {

  var bank = new Bank();
  for(var account of sampleAccounts){
    bank.addAccount(new Account(account));
  }

  localStorage.setItem('bankAccounts', JSON.stringify(bank.accounts));

  var bankView = new BankView(bank);

  bankView.render();

  bankView.getInterestButton().onclick = function(){
    localStorage.removeItem('bankAccounts');
    bank.payInterest(10);
    localStorage.setItem('bankAccounts', JSON.stringify(bank.accounts));
    bankView.render();
  }
};