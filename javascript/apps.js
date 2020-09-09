'use strict';

// variables to put graphs into html 
// var locateSeattle = document.getElementById('stSeattle');
// var locateTokyo = document.getElementById('stTokyo');
// var locateDubai = document.getElementById('stDubai');
// var locateParis = document.getElementById('stParis');
// var locateLima = document.getElementById('stLima');

// cookie data to put into html
var cookieData = document.getElementById('cookieTable');

// store hours 
var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];

// Generates random cookie data numbers in between min and max arguments
function randomCookieGen (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// constructor for cookie locations 
function StoreLocation(location, min, max, avgCookie, cookiesEachHour) {
    this.locatename = location;
    this.minCust = min;
    this.maxCust = max;
    this.avgCookie = avgCookie;
    this.hourlySales = cookiesEachHour;
    this.totalCookieSales = function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    }
}

Store.prototype.render = function () {
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent - (this.name);
    trElement.append(tdElement);

    var totalCookiesPerDay = 0;
    for (var i = 0; i < hours.length; i++) {

        table = document.createElement('td');
        var cookiesFor1hr = Math.round(this.totalCookieSales(this.minCust, this.maxCust) * avgCookie);
        table.textContent = hours[i] + ': ' + cookiesFor1hr;
        trElement.appendChild(table);
        myTable.appendChild(trElement);
        totalCookiesPerDay += cookiesFor1hr;

    }
    var total = document.createElement('td');
    total.textContent = totalCookiesPerDay;
    trElement.appendChild(total);
}

// Store locations
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 3.7);
var lima = new Store('Lima', 2, 16, 4.6);


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

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