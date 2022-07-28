let acctBalance = 10500

let container = document.querySelector(".container")
let banks = document.querySelector("#banks")
let acctNumber = document.querySelector("#acct-number")
let amount = document.querySelector("#amount")

function continueTran() {
    

    if (amount.value > acctBalance) {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                
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
    } else {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                
                <p>Please wait while we process your transaction...</p>
            </div>
            <div id="mssg">
                <h3>Process...</h3>
            </div>
        </div>
        `

    success(acctBalance, amount.value)
    }
}

//calculator
function success(mainBal, transaction) {
    setTimeout(() => {
        container.innerHTML = `
        <div id="screen">
            <div id="head">
                <p>SUCCESSFUL ✔</p>
            </div>
            <div id="mssg">
                <h3>
                ${amount.value} has transfered to ${banks.value}: ${acctNumber.value} Successfully
                <p>Account Balance: ${mainBal - transaction}</p>
                <button onclick="endTransaction()">End</button>
                </h3>
            </div>
        </div>
        `
    }, 1000);
}

// when user withdraws above acct balance
function insufficientBal() {
    container.innerHTML = `
        <div id="screen">
            <div id="head">
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
