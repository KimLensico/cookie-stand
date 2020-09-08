'use strict'

var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM']

    var store1 = {
        name: 'Seattle',
        minCust: 23,
        maxCust: 65,
        avgCookie: 6.3,
        dailySales: [],
        hour1customercount: function () {
            return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust); //the max is inclusive and the minimum is inclusive
        },
        calcsales: function () {
            for (var i = 0; i < storeHours.length; i++) {
                var sales = Math.round(this.hour1customercount() * this.avgCookie)
                this.dailySales.push(sales);
                document.getElementById("S6AM").innerHTML = this.hour1customercount();  
            } 
        }
    }


var store2 = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2, 
    dailySales: [],
    hour1customercount: function() {
        return (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    calcsales: function () {
        for (var i = 0; i < storeHours.length; i++) {
            var sales = Math.round(this.hour1customercount() * this.avgCookie)
            this.dailySales.push(sales);
        }
    }
}

var store3 = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    dailySales: [],
    hour1customercount: function() {
        return (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    calcsales: function () {
        for (var i = 0; i < storeHours.length; i++) {
            var sale = Math.round(this.hour1customercount() * this.avgCookie)
            this.dailySales.push(sales);
        }
    }
}

var store4 = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    dailySales: [],
    hour1customercount: function() {
        return (Math.random() * (this.maxCust - this.minCust + 1) * this.minCust);
    },
    calcsales: function () {
        for (var i = 0; i < storeHours.length; i++) {
            var sale = Math.round(this.hour1customercount() * this.avgCookie)
            this.dailySales.push(sales);
        }
    }
}

var store5 = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    dailySales: [],
    hour1customercount: function() {
        return (Math.random() * (this.maxCust - this.minCust + 1) * this.minCust);
    },
    calcsales: function () {
        for (var i = 0; i < storeHours.length; i++) {
            var sale = Math.round(this.hour1customercount() * this.avgCookie)
            this.dailySales.push(sales);
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));;
}

console.log(getRandomInt(3));

console.log(Math.random()); 