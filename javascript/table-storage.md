'use strict'

var table = document.getElementById('cookie-table');
var form = document.getElementById('newstore');
var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];
var stores = [];

// Creating a store via constructor function
// minCust => number
// maxCust => number
// avgCookiesPerCust => number
//avgCookiesPerHour => numberBetweenMin&Max * avgCookiesPerHour

function Store(storeName, minCust, maxCust, avgCookiesPerCust) {
    this.storeName = storeName;
    this.mixCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesPerCust = avgCookiesPerCust;
    this.cookiesAtEachHour = [];
    this.totalDailyCookies = 0;
    stores.push(this);
}

Store.prototype.generateCookiesAtHour = function () {
    //random number?
    //calc value between min and max
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;

    //multiply by avgCookiesperCust
    return Math.round(customers * this.avgCookiesPerCust);
}

Store.prototype.generateDailyCookies = function () {
    this.cookiesAtEachHour = [];
    for (var i = 0; i < storeHours.length; i++) {
        this.cookiesAtEachHour.push(this.generateCookiesAtHour());
    }
    return this.cookiesAtEachHour
}

//  Filling a table with values from our stores
// avgCookiesPerHour
// create table Row
// create table cells
// append Row to a Table

Store.prototype.renderToTable = function () {
    // takes all store data (name / cookiesPerHour)
    this.cookiesAtEachHour // an array of numbers
    //table head

    var table = document.getElementById('cookie-table');
    var tHead = document.createElement('thead');
    cookie-table.append(tHead);

    //render a row to our table
    var tableRow = document.createElement('tr'); // one row per store
    tHead.append(tableRow);

    var tableData = document.createElement('td'); // one data cell per hour
    // tableData.textContent = this.storeName; 
    tableRow.append(tableData);

    // lets find the cookie sales and append it to our row
    for (var i = 0; i < this.cookiesAtEachHour.length; i++) {
        tableData = document.createElement('td');
        tableData.textContent = this.cookiesAtEachHour[i];
        tableRow.append(tableData);
    }
}

// Store locations
var seattle = new Store('Seattle', 23, 65, 6.3);
seattle.generateDailyCookies();
seattle.renderToTable();

var tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.generateDailyCookies();
tokyo.renderToTable();

var dubai = new Store('Dubai', 11, 38, 3.7);
dubai.generateDailyCookies();
dubai.renderToTable();

var paris = new Store('Paris', 20, 38, 3.7);
paris.generateDailyCookies();
paris.renderToTable();

var lima = new Store('Lima', 2, 16, 4.6);
lima.generateDailyCookies();
lima.renderToTable();

console.log(stores);

function handleSubmit(event) {
    event.preventDefault();

var { name, minCust, maxCust, avgCookies } = event.target;

var store = new Store(name.value, parseInt(minCust.value), parseInt(maxCust.value), parseInt(avgCookies.value));
console.log(store);
store.generateDailyCookies();
store.renderToTable();
}



// Generating new Store from a form
form.addEventListener('submit', 'handleSubmit')

// attempt 1 starting line

// constructor for cookie locations 
// function StoreLocation(location, min, max, avgCookie, cookiesEachHour) {
//     this.locatename = location;
//     this.minCust = min;
//     this.maxCust = max;
//     this.avgCookie = avgCookie;
//     this.hourlySales = cookiesEachHour;
//     this.totalCookieSales = function () {
//         return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//     }
// }

// Store.prototype.render = function () {
//     var trElement = document.createElement('tr');
//     var tdElement = document.createElement('td');
//     tdElement.textContent - (this.name);
//     trElement.append(tdElement);

//     var totalCookiesPerDay = 0;
//     for (var i = 0; i < hours.length; i++) {

//         table = document.createElement('td');
//         var cookiesFor1hr = Math.round(this.totalCookieSales(this.minCust, this.maxCust) * avgCookie);
//         table.textContent = hours[i] + ': ' + cookiesFor1hr;
//         trElement.appendChild(table);
//         myTable.appendChild(trElement);
//         totalCookiesPerDay += cookiesFor1hr;

//     }
//     var total = document.createElement('td');
//     total.textContent = totalCookiesPerDay;
//     trElement.appendChild(total);
// }

// // Store locations
// var seattle = new Store('Seattle', 23, 65, 6.3);
// var tokyo = new Store('Tokyo', 3, 24, 1.2);
// var dubai = new Store('Dubai', 11, 38, 3.7);
// var paris = new Store('Paris', 20, 38, 3.7);
// var lima = new Store('Lima', 2, 16, 4.6);


// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();

// end of attempt 1

//     var store1 = {
//         name: 'Seattle',
//         minCust: 23,
//         maxCust: 65,
//         avgCookie: 6.3,
//         hourlySales: [],
//         customerCount: function () {
//             return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust); //the max is inclusive and the minimum is inclusive
//         },
        // calcsales: function () {
        //     for (var i = 0; i < storeHours.length; i++) {
        //         var sales = Math.round(this.customerCount() * this.avgCookie)
        //         this.hourlySales.push(sales);
//             } 
//         }, 
//         renderStore: function () {
//             this.calcsales();
//             var list = document.createElement('ul');
//             for(var i = 0; i < this.hourlySales.length; i++) {
//                 var listItem = document.createElement('li');
//                 listItem.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies 🍪';
//                 list.appendChild(listItem);
//             }
//             locateSeattle.appendChild(list)
//         } 
//     }
// store1.renderStore();

// var store2 = {
//     name: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookie: 1.2, 
//     hourlySales: [],
//         customerCount: function () {
//             return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust); 
//         },
//         calcsales: function () {
//             for (var i = 0; i < storeHours.length; i++) {
//                 var sales = Math.round(this.customerCount() * this.avgCookie)
//                 this.hourlySales.push(sales);
//             } 
//         }, 
//         renderStore: function () {
//             this.calcsales();
//             var list = document.createElement('ul');
//             for(var i = 0; i < this.hourlySales.length; i++) {
//                 var listItem = document.createElement('li');
//                 listItem.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies 🍪';
//                 list.appendChild(listItem);
//             }
//             locateTokyo.appendChild(list)
//         } 
//     }
// store2.renderStore();

// var store3 = {
//     name: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookie: 3.7,
//     hourlySales: [],
//         customerCount: function () {
//             return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust); 
//         },
//         calcsales: function () {
//             for (var i = 0; i < storeHours.length; i++) {
//                 var sales = Math.round(this.customerCount() * this.avgCookie)
//                 this.hourlySales.push(sales);
//             } 
//         }, 
//         renderStore: function () {
//             this.calcsales();
//             var list = document.createElement('ul');
//             for(var i = 0; i < this.hourlySales.length; i++) {
//                 var listItem = document.createElement('li');
//                 listItem.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies 🍪';
//                 list.appendChild(listItem);
//             }
//             locateDubai.appendChild(list)
//         } 
//     }
// store3.renderStore();

// var store4 = {
//     name: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookie: 2.3,
//     hourlySales: [],
//         customerCount: function () {
//             return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) * this.minCust);
//         },
//         calcsales: function () {
//             for (var i = 0; i < storeHours.length; i++) {
//                 var sales = Math.round(this.customerCount() * this.avgCookie)
//                 this.hourlySales.push(sales);
//             }
//         },
//     renderStore: function () {
//         this.calcsales();
//         var list = document.createElement('ul');
//         for(var i = 0; i < this.hourlySales.length; i++) {
//             var listItem = document.createElement('li');
//             listItem.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies 🍪';
//             list.appendChild(listItem);
//             }
//             locateParis.appendChild(list)
//     }
// }
// store4.renderStore();

// var store5 = {
//     name: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookie: 4.6,
//     hourlySales: [],
//     customerCount: function() {
//         return (Math.random() * (this.maxCust - this.minCust + 1) * this.minCust);
//     },
//     calcsales: function () {
//         for (var i = 0; i < storeHours.length; i++) {
//             var sales = Math.round(this.customerCount() * this.avgCookie)
//             this.hourlySales.push(sales);
//         }
//     },
//     renderStore: function () {
//         this.calcsales();
//         var list = document.createElement('ul');
//         for(var i = 0; i < this.hourlySales.length; i++) {
//             var listItem = document.createElement('li');
//             listItem.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies 🍪';
//             list.appendChild(listItem);
//         }
//         locateLima.appendChild(list)
//     }
// }
// store5.renderStore();

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));;
// }

// console.log(getRandomInt(3));

// console.log(Math.random());