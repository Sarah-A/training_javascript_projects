'use strict';

// Design a cash register drawer function checkCashRegister() that accepts purchase 
// price as the first argument (price), payment as the second argument (cash), 
// and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
// or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value 
// for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
// sorted in highest to lowest order, as the value of the change key.

// Note: I assume valid input i.e. cash is equal/larger than price.
function checkCashRegister(price, cash, cid) {

    function dollarsToCents(dollars) {
        return Math.round(dollars * 100);
    }

    function centsToDollars(cents) {
        return (Math.round(cents) / 100);
    }

    function timesInChange(currencyValue, changeLeftInCents, totalCurrencyInCid) {
        let times = 0;
        while( (currencyValue <= changeLeftInCents) && (totalCurrencyInCid > 0) ) {
            totalCurrencyInCid -= currencyValue;
            changeLeftInCents -= currencyValue;
            times++;
        }
        return times;
    }
   
    const currenciesInCents = new Map([["ONE HUNDRED", 10000],
                                ["TWENTY", 2000],
                                ["TEN", 1000],
                                ["FIVE", 500],
                                ["ONE", 100],
                                ["QUARTER", 25],
                                ["DIME", 10],
                                ["NICKEL", 5],
                                ["PENNY", 1]]);
    let cidInCents = new Map(cid.map(([key,value]) => [key, dollarsToCents(value)]));
    let totalChangeInCents = new Map();
    let changeLeftToReturn = dollarsToCents(cash - price);

    for( let [currency, value]  of currenciesInCents) {
        let totalCurrencyInCid = cidInCents.get(currency);
        let times = timesInChange(value, changeLeftToReturn, totalCurrencyInCid);
        console.log(`[currency, value]: ${currency, value} , in cid: ${totalCurrencyInCid} , times: ${times}`);
        if( times > 0 ) {
            totalChangeInCents.set(currency, value*times);
            cidInCents.set(currency, totalCurrencyInCid - (value * times));
            changeLeftToReturn -= (value * times);
            if( changeLeftToReturn === 0) {
                break;
            }
            console.log(`key: ${currency} , total Change: ${Array.from(totalChangeInCents)}`);     
        }
    }
    if( changeLeftToReturn > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    
    for(let value of cidInCents.values()) {
        if(value > 0) {
            let totalChangeInDollars = Array.from(totalChangeInCents, ([key, value]) => [key, centsToDollars(value)]);    
            return { status: "OPEN", change: totalChangeInDollars};
        }
    }

    return { status: "CLOSED", change: cid};

}


module.exports = {
    checkCashRegister: checkCashRegister
};