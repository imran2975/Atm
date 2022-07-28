let acctBalance = 10500
let container = document.querySelector(".container")
let thirdPartyAmount = document.querySelector("#amount")
let phoneNumber = document.querySelector("#phone")

function continueTran() {
    

    if (thirdPartyAmount.value > acctBalance) {
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

    success(acctBalance, thirdPartyAmount.value)
    }
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
                ${phoneNumber.value} has been recharged ${thirdPartyAmount.value}
                <p>Account Balance: ${mainBal - transaction}</p>
                <button onclick="endTransaction()">End</button>
                </h3>
            </div>
        </div>
        `
    }, 1000);
}

//end transaction
function endTransaction() {
    setTimeout(() => {
        container.innerHTML = `
    <div id="end">
        <h2>Thank You for your Patronage🙌
        <button onclick="refresh()">Refresh</button>
    </div>
    `
    }, 1000);
}

//restart
function refresh() {
    return window.location.assign("index.html")
}