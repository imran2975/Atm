let userPin = 1234
let acctBalance = 10500

//select AMOUNT option
let fiveKilo = 5000
let fifteenKilo = 15000
let tenKilo = 10000 

//select AMOUNT for airtime top up
let hundred = 100
let twoHundred = 200
let fiveHundred = 500

//selectors      
let user = document.querySelector("#username")
let field = document.querySelector("#number")
let btn = document.querySelector("#btn")
let container = document.querySelector(".container")




btn.addEventListener("click", function() {
    if (field.value == userPin) {
        alert(`PIN Correct \n Welcome back ${user.value}\n\n Press Ok to Continue`)

        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Enjoy out Latest offer on Airtime purchase</p>
            </div>
            <div id="withdraw"><button onclick="withdraw()">Withdraw</button></div>
            <div id="transfer"><button onclick="transfer()">Transfer</button></div>
            <div id="airtime"><button onclick="airtime()">Buy Airtime</button></div>
            <div id="report"><button onclick="report()">Report</button></div>
        </div>
        `
        
    } else if (field.value != userPin) {
        let warn = document.querySelector("#warn")
        warn.textContent = "Wrong PIN"
        tryLimit -= 1
    } 
})

//withdraw button
function withdraw() {
    setTimeout(() => {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Select ACCOUNT</p>
            </div>
            <div id="withdraw"><button onclick="savings()">Savings</button></div>
            <div id="transfer"><button onclick="current()">Current</button></div>
        </div>
        `
    }, 1000);
}

//savings button
function savings() {
    setTimeout(() => {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Select AMOUNT</p>
            </div>
            <div id="withdraw"><button onclick="fiveK()">${fiveKilo}</button></div>
            <div id="transfer"><button onclick="fifteenK()">${fifteenKilo}</button></div>
            <div id="airtime"><button onclick="tenK()">${tenKilo}</button></div>
            <div id="report"><button onclick="other()">Other</button></div>
        </div>
        `
    }, 1000);
}

//current button
function current() {
    setTimeout(() => {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Select AMOUNT</p>
            </div>
            <div id="withdraw"><button onclick="fiveK()">${fiveKilo}</button></div>
            <div id="transfer"><button onclick="fifteenK()">${fifteenKilo}</button></div>
            <div id="airtime"><button onclick="tenK()">${tenKilo}</button></div>
            <div id="report"><button onclick="other()">Other</button></div>
        </div>
        `
    }, 1000);
}

//5000 withdrawal option
function fiveK() {
    setTimeout(() => {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Please wait while we process your transaction...</p>
            </div>
            <div id="mssg">
                <h3>Process...</h3>
            </div>
        </div>
        `
        setTimeout(() => {
            success(acctBalance, fiveKilo)
        }, 1000);
    }, 1000);
}

//10000 withdrawal option
function tenK() {
    setTimeout(() => {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Please wait while we process your transaction...</p>
            </div>
            <div id="mssg">
                <h3>Process...</h3>
            </div>
        </div>
        `
        setTimeout(() => {
            success(acctBalance, tenKilo)
        }, 1000);
    }, 1000);
}

//15000 withdrawal option
function fifteenK() {
    setTimeout(() => {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Please wait while we process your transaction...</p>
            </div>
            <div id="mssg">
                <h3>Process...</h3>
            </div>
        </div>
        `
        setTimeout(() => {
            insufficientBal()
        }, 1000);
    }, 1000);
}

// when user withdraws above acct balance
function insufficientBal() {
    container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Insufficient Balance</p>
            </div>
            <div id="mssg">
                <h3>
                    Transaction Failed
                    <p>Insufficient Balance</p>
                    <p>Account Balance: ${acctBalance}</p>
                    <button onclick="refresh()">Refresh</button>
                </h3>
            </div>
        </div>
        `
}

//buy airtime
function airtime() {
    setTimeout(() => {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Select ACCOUNT</p>
            </div>
            <div id="withdraw"><button onclick="self()">Self</button></div>
            <div id="transfer"><button onclick="thirdParty()">Third party</button></div>
        </div>
        `
    }, 1000);
}

//self top up
function self() {
    setTimeout(() => {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Select AMOUNT</p>
            </div>
            <div id="withdraw"><button onclick="one()">${hundred}</button></div>
            <div id="transfer"><button onclick="two()">${twoHundred}</button></div>
            <div id="airtime"><button onclick="five()">${fiveHundred}</button></div>
            <div id="report"><button onclick="other()">Other</button></div>
        </div>
        `
    }, 1000);
}

//100 airtime top up
function one() {
    setTimeout(() => {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Please wait while we process your transaction...</p>
            </div>
            <div id="mssg">
                <h3>Process...</h3>
            </div>
        </div>
        `
        setTimeout(() => {
            success(acctBalance, hundred)
        }, 1000);
    }, 1000);
}

//200 hundred airtime top up
function two() {
    setTimeout(() => {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Please wait while we process your transaction...</p>
            </div>
            <div id="mssg">
                <h3>Process...</h3>
            </div>
        </div>
        `
        setTimeout(() => {
            success(acctBalance, twoHundred)
        }, 1000);
    }, 1000);
}

//500 hundred airtime top up
function five() {
    setTimeout(() => {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${acctBalance}</p>
                <p>Please wait while we process your transaction...</p>
            </div>
            <div id="mssg">
                <h3>Process...</h3>
            </div>
        </div>
        `
        setTimeout(() => {
            success(acctBalance, fiveHundred)
        }, 1000);
    }, 1000);
}

//third party topup
function thirdParty() {
    return window.location.assign("thirdParty.html")
}

//other withdrawal option
function other() {
    return window.location.assign("other.html")
        
}

//transfer button
function transfer() {
    return window.location.assign("transfer.html")
}

//report button
function report() {
    return window.location.assign("report.html")
}

//calculator
function success(mainBal, transaction) {
    container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>User: ${user.value}</p>
                <p>Balance: ${mainBal - transaction}</p>
                <p>SUCCESSFUL ✔</p>
            </div>
            <div id="mssg">
                <h3>
                Transaction Successful
                <p>Account Balance: ${mainBal - transaction}</p>
                <button onclick="endTransaction()">End</button>
                </h3>
            </div>
        </div>
        `
}



//end transaction
function endTransaction() {
    container.innerHTML = `
    <div id="end">
        <h2>Thank You for your Patronage🙌
        <button onclick="refresh()">Refresh</button>
    </div>
    `
}

//restart
function refresh() {
    return window.location.assign("index.html")
}

//buy airtime.html

