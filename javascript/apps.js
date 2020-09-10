'use strict'

var stores = null;
var storeInfo = document.getElementById('storeSales');
var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];
var myTable = document.getElementById("myTable");


// Creating elements within the DOM
// Create a new element
// add some content to the element
// appent that element to a container

//creates a table row of header elements with values NOT from a Store
function createTableHeader() {
    var trElement = document.createElement('tr');
    myTable.appendChild(trElement);
    var thElement = document.createElement('th');
    thElement.textContent = "Store location";
    trElement.appendChild(thElement);

    // ? for loop through hours
    //take each time from the hours array
    // put those into a <th>
    for (var i = 0; i < storeHours.length; i++) {
        thElement = document.createElement('th');
        thElement.textContent = storeHours[i];
        trElement.appendChild(thElement);
    }

    // add the last TH with "total"
    thElement = document.createElement('th');
    thElement.textContent = 'Total';
    trElement.appendChild(thElement);

}
createTableHeader();

// Add up early values from each store, displays the sum in a table row
function createTableFooter() {

    // create the row
    var trElement = document.createElement('tr');
    // append to table
    myTable.appendChild(trElement);


    // getting through each store and add up each hourly total
    // hit each store that exists
    // as we hit each store, we need to loop through the hours, and sum each other
    var grandTotal = 0;
    loop1: for (var i = 0; i < storeHours.length; i++) {

        // Define a value to sum
        var hourlySum = 0;

        //create our new Table Data cell
        var tdElement = document.createElement('td');
        trElement.appendChild(tdElement);

        // loop through each store
        loop2: for (var j = 0; j < storeHours.length; j++) {

            // grab values from a store, at an hour (6am / 7am ....)
            hourlySum += stores[j].cookiesEachHour[i];
            grandTotal += stores[j].cookiesEachHour[i];

        }

        // when loop2 is finished, we can add our content
        tdElement.textContent = hourlySum;
    }

    //create add content, append
    tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = grandTotal;

}

function Store(city, minCust, maxCust, aveCookieSale, cookiesEachHour) {
    this.city = city;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.aveCookieSale = aveCookieSale;
    this.cookiesEachHour = cookiesEachHour;
    this.totalCookies = function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1 )) + this.minCust;
    }
    //stores.push(this)
}

Store.prototype.render = function () {
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = (this.city);
    trElement.appendChild(tdElement);

    var totalCookiesPerDay = 0;
    for (var i = 0; i < storeHours.length; i++) {

        var table = document.createElement('td');
        var cookiesThisHour = Math.round(this.totalCookies(this.minCust, this.maxCust) * this.aveCookieSale);
        table.textContent = cookiesThisHour;
        trElement.appendChild(table)
        myTable.appendChild(trElement);
        totalCookiesPerDay += cookiesThisHour;
        this.cookiesEachHour.push(cookiesThisHour);
    }
    var total = document.createElement('td');
    total.textContent = totalCookiesPerDay;
    console.log(myTable)
    trElement.appendChild(total);
}


var Seattle = new Store('Seattle', 23, 65, 6.3, []);
var Tokyo = new Store('Tokyo', 3, 24, 1.2, []);
var Dubai = new Store('Dubai', 11, 38, 3.7, []);
var Paris = new Store('Paris', 20, 38, 2.3, []);
var Lima = new Store('Lima', 2, 16, 4.6, []);

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
stores = [Seattle, Tokyo, Dubai, Paris, Lima];

createTableFooter();

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