// ******** UYARI MESAJI *******
let alertDom = document.querySelector("#alert1")
const ALERT = (title , message , classname) => `<div class="alert alert-${classname} alert-dismissible fade show mb-0" role="alert">
<strong> ${title} </strong>  ${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

// ******** STAKE MESAJI *******
let stakeLevel1 = document.querySelector("#stakeLevel1")
const STAKE_ALERT = (title1 , message1) => `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <h3>${title1}<strong> ${message1}</strong></h3>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

// METAMASK BAĞLANTI
let metamaskConnect = document.querySelector("#metamaskConnect")
metamaskConnect.addEventListener("click" , metamaskClick)

function metamaskClick() {

// ***** METAMASK CÜZDAN BAĞLANTISI *************  

  let h1s = document.querySelector("#h1s")
  h1s.innerHTML = "Welcome to Your Financial Freedom"

// ******** WALLET - STAKE BİLGİLERİ *******

let walletBalance1 = document.querySelector("#walletBalance1")
walletBalance1.innerHTML = 5000

let walletBalance = document.querySelector("#walletBalance")
walletBalance.innerHTML = 500

let amountt = 0
let amountt1 = 0
let amountt2 = 0

let performanceFee1 = document.querySelector("#performanceFee1")
let performanceFee = document.querySelector("#performanceFee")

let lockTime1 = document.querySelector("#lockTime1")

// PUANLAMA SİSTEMİ YAPILACAK!!!

let puan = 0



// PUANLAMA SİSTEMİ YAPILACAK!!!

let userListDom1 = document.querySelector("#stakeAmountText1")
let userListDom = document.querySelector("#stakeAmountText2")

// ******** XXX DEPOSIT BÖLÜMÜ *******

let stakeAmountInput = document.querySelector("#stakeAmountInput")
let button3 = document.querySelector("#multiStakee1")
button3.addEventListener("submit" , fbutton3)

let depositFee1 = document.querySelector("#depositFee1")

function fbutton3(event) {
    event.preventDefault()  // preventDefault ile submitin default işlemi engelleniyor.

    if (stakeAmountInput.value>0 && (walletBalance1.innerHTML>(Number(stakeAmountInput.value)*0.001))) {
        if ((walletBalance1.innerHTML - stakeAmountInput.value) >= 0 ) {
          amountt1 = amountt1 + Number(stakeAmountInput.value)
          userListDom1.innerHTML = `Staked Amount: ${amountt1}`
          walletBalance1.innerHTML = walletBalance1.innerHTML - stakeAmountInput.value

          let fee = (Number(stakeAmountInput.value)*0.0001)        
          depositFee1.innerHTML = Number(depositFee1.innerHTML) + fee

          let perffee = (Number(stakeAmountInput.value)*0.001)
          performanceFee1.innerHTML = Number(performanceFee1.innerHTML) + perffee

          amountt2 = amountt1

          if (walletBalance1.innerHTML> (fee + perffee)) {
            walletBalance1.innerHTML = walletBalance1.innerHTML - fee - perffee
          } else {
            alertDom.innerHTML = ALERT (
              "ALERT!" , "Amount is not enough for GAS FEE!" , "danger" )
          }

          if (amountt1>0) {
            lockTime1.innerHTML = "30 Days"
          } else {
            lockTime1.innerHTML = "none"
          }
          
          alertDom.innerHTML = ALERT (
            "Congratulations!" , "You staked your amount!" , "success"
        )
        } else {
          alertDom.innerHTML = ALERT (
            "ALERT!" , "Amount is not enough!" , "danger" )
        }

        if ((amountt1>=1000 && amountt1<2000) || (amountt>=100 && amountt<200)) {
          stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "1")
        } else if ((amountt1>=2000 && amountt1<3000) || (amountt>=200 && amountt<300)) {
          stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "2")
        } else if ((amountt1>=3000 && amountt1<4000) || (amountt>=300 && amountt<400)) {
          stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "3")
        } else if ((amountt1>=4000 && amountt1<5000) || (amountt>=400 && amountt<500)) {
          stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "4")
        } else if ((amountt1>=5000) || (amountt>=500)) {
          stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "5")
        } else if ((amountt1<1000) || (amountt<100)) {
          stakeLevel1.innerHTML = ""
        }

    } else {
        alertDom.innerHTML = ALERT (
            "ALERT!" , "Please write a valid amount!" , "danger"
        )
    }
}

// DEPOSIT MAX BUTONU BÖLÜMÜ
// Input içerisine balance oto doldurma!!
let button1 = document.querySelector("#button1")
button1.addEventListener("click" , fbutton1)
function fbutton1() {
      console.log(walletBalance1.innerHTML)
      stakeAmountInput.value = walletBalance1.innerHTML  - ((walletBalance1.innerHTML*0.0001) + (walletBalance1.innerHTML*0.001))
}

// ******** XXX WITHDRAW BÖLÜMÜ *******

let stakeAmountInput1 = document.querySelector("#stakeAmountInput1")
let button5 = document.querySelector("#button5")
button5.addEventListener("click" , fbutton5)

let withdrawalFee1 = document.querySelector("#withdrawalFee1")

function fbutton5(event) {
  event.preventDefault()

  if (stakeAmountInput1.value>0) {

    if ((walletBalance1.innerHTML>(Number(stakeAmountInput1.value)*0.001))) {
      if (amountt1>0 && amountt1 >= stakeAmountInput1.value) {
        console.log("Withdraw Çalıştı!")
        amountt1 = amountt1 - Number(stakeAmountInput1.value)
        console.log(amountt1)
        userListDom1.innerHTML = `Staked Amount: ${amountt1}`
        walletBalance1.innerHTML = Number(walletBalance1.innerHTML)  + Number(stakeAmountInput1.value)
        console.log(walletBalance1.innerHTML)
    
        let fee = (Number(stakeAmountInput1.value)*0.0001)        
        withdrawalFee1.innerHTML = Number(withdrawalFee1.innerHTML) + fee
  
        let perffee = (Number(stakeAmountInput1.value)*0.001)
        performanceFee1.innerHTML = Number(performanceFee1.innerHTML) + perffee
        
  
        if (walletBalance1.innerHTML > (fee + perffee)) {
          walletBalance1.innerHTML = walletBalance1.innerHTML - fee - perffee
        } else {
          alertDom.innerHTML = ALERT (
            "ALERT!" , "Amount is not enough for GAS FEE!" , "danger" )
        }
  
        if (amountt1>0) {
          lockTime1.innerHTML = "30 Days"
        } else {
          lockTime1.innerHTML = "none"
        }
  
        alertDom.innerHTML = ALERT (
          "Congratulations!" , "You withdraw your amount!" , "primary"
      )
  
      if ((amountt1>=1000 && amountt1<2000) || (amountt>=100 && amountt<200)) {
        stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "1")
      } else if ((amountt1>=2000 && amountt1<3000) || (amountt>=200 && amountt<300)) {
        stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "2")
      } else if ((amountt1>=3000 && amountt1<4000) || (amountt>=300 && amountt<400)) {
        stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "3")
      } else if ((amountt1>=4000 && amountt1<5000) || (amountt>=400 && amountt<500)) {
        stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "4")
      } else if ((amountt1>=5000) || (amountt>=500)) {
        stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "5")
      } else if ((amountt1<1000) || (amountt<100)) {
        stakeLevel1.innerHTML = ""
      }
    
      } else {
        alertDom.innerHTML = ALERT (
          "ALERT!" , "Amount is not enough!" , "danger" )    
      }
    } else {
      alertDom.innerHTML = ALERT (
        "ALERT!" , "Amount is not enough for GAS FEE!" , "danger"
      )
    }
    } else {
    alertDom.innerHTML = ALERT (
      "ALERT!" , "Please write a valid amount!" , "danger"
    )
  }
}

// WITHDRAW MAX BUTONU BÖLÜMÜ
// Input içerisine balance oto doldurma!!
let button4 = document.querySelector("#button4")
button4.addEventListener("click" , fbutton4)
function fbutton4() {

  if ((amountt1 - ((Number(stakeAmountInput1.value)*0.0001) + (Number(stakeAmountInput1.value)*0.001)))>0) {
    stakeAmountInput1.value = amountt1 - ((Number(stakeAmountInput1.value)*0.0001) + (Number(stakeAmountInput1.value)*0.001))
  }
}

// ******** LP DEPOSIT BÖLÜMÜ *******

let stakeAmountInput2 = document.querySelector("#stakeAmountInput2")
let button7 = document.querySelector("#multiStake")
button7.addEventListener("submit" , fbutton7)

let depositFee = document.querySelector("#depositFee")

function fbutton7(event) {
    event.preventDefault()  // preventDefault ile submitin default işlemi engelleniyor.
    console.log("işlem gerçekleşti")

    if (stakeAmountInput2.value>0) {
        if ((walletBalance.innerHTML - stakeAmountInput2.value) >= 0 ) {
          amountt = amountt + Number(stakeAmountInput2.value)
          userListDom.innerHTML = `Staked Amount: ${amountt}`
          walletBalance.innerHTML = walletBalance.innerHTML - stakeAmountInput2.value

          let fee = (Number(stakeAmountInput2.value)*0.001)        
          depositFee.innerHTML = Number(depositFee.innerHTML) + fee

          let perffee = (Number(stakeAmountInput2.value)*0.01)
          performanceFee.innerHTML = Number(performanceFee.innerHTML) + perffee

          walletBalance.innerHTML = walletBalance.innerHTML - (Number(stakeAmountInput2.value)*0.001) - (Number(stakeAmountInput2.value)*0.01)

          alertDom.innerHTML = ALERT (
            "Congratulations!" , "You staked your amount!" , "success"
        )

        if ((amountt1>=1000 && amountt1<2000) || (amountt>=100 && amountt<200)) {
          stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "1")
        } else if ((amountt1>=2000 && amountt1<3000) || (amountt>=200 && amountt<300)) {
          stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "2")
        } else if ((amountt1>=3000 && amountt1<4000) || (amountt>=300 && amountt<400)) {
          stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "3")
        } else if ((amountt1>=4000 && amountt1<5000) || (amountt>=400 && amountt<500)) {
          stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "4")
        } else if ((amountt1>=5000) || (amountt>=500)) {
          stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "5")
        } else if ((amountt1<1000) || (amountt<100)) {
          stakeLevel1.innerHTML = ""
        }
        
        } else {
          alertDom.innerHTML = ALERT (
            "ALERT!" , "Amount is not enough!" , "danger" )
        }
    } else {
        alertDom.innerHTML = ALERT (
            "ALERT!" , "Please write a valid amount!" , "danger"
        )
    }
}

// DEPOSIT MAX BUTONU BÖLÜMÜ
let button6 = document.querySelector("#button6")
button6.addEventListener("click" , fbutton6)
function fbutton6() {
      console.log(walletBalance.innerHTML)
      stakeAmountInput2.value = walletBalance.innerHTML // Input içerisine balance oto doldurma!!
}

// ******** LP WITHDRAW BÖLÜMÜ *******

let stakeAmountInput3 = document.querySelector("#stakeAmountInput3")
let button8 = document.querySelector("#button8")
button8.addEventListener("click" , fbutton8)

let withdrawalFee = document.querySelector("#withdrawalFee")

function fbutton8(event) {
  event.preventDefault()

  if (stakeAmountInput3.value>0 ) {
    if (amountt>0 && amountt >= stakeAmountInput3.value) {
      console.log("Withdraw Çalıştı!")
      amountt = amountt - Number(stakeAmountInput3.value)
      console.log(amountt)
      userListDom.innerHTML = `Staked Amount: ${amountt}`
      walletBalance.innerHTML = Number(walletBalance.innerHTML)  + Number(stakeAmountInput3.value)
      console.log(walletBalance.innerHTML)
  
      let fee = (Number(stakeAmountInput3.value)*0.001)        
      withdrawalFee.innerHTML = Number(withdrawalFee.innerHTML) + fee

      let perffee = (Number(stakeAmountInput2.value)*0.01)
      performanceFee.innerHTML = Number(performanceFee.innerHTML) + perffee

      walletBalance.innerHTML = walletBalance.innerHTML - (Number(stakeAmountInput2.value)*0.001) - (Number(stakeAmountInput2.value)*0.01)
  
      alertDom.innerHTML = ALERT (
        "Congratulations!" , "You withdraw your amount!" , "primary"
    )

    if ((amountt1>=1000 && amountt1<2000) || (amountt>=100 && amountt<200)) {
      stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "1")
    } else if ((amountt1>=2000 && amountt1<3000) || (amountt>=200 && amountt<300)) {
      stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "2")
    } else if ((amountt1>=3000 && amountt1<4000) || (amountt>=300 && amountt<400)) {
      stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "3")
    } else if ((amountt1>=4000 && amountt1<5000) || (amountt>=400 && amountt<500)) {
      stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "4")
    } else if ((amountt1>=5000) || (amountt>=500)) {
      stakeLevel1.innerHTML = STAKE_ALERT ("Your Level" , "5")
    } else if ((amountt1<1000) || (amountt<100)) {
      stakeLevel1.innerHTML = ""
    }
  
    } else {
      alertDom.innerHTML = ALERT (
        "ALERT!" , "Amount is not enough!" , "danger" )    
    }
  } else {
    alertDom.innerHTML = ALERT (
      "ALERT!" , "Please write a valid amount!" , "danger"
    )
  }
}

// WITHDRAW MAX BUTONU BÖLÜMÜ
let button77 = document.querySelector("#button77")
button77.addEventListener("click" , fbutton77)
function fbutton77() {
      stakeAmountInput3.value = amountt // Input içerisine balance oto doldurma!!
}

}

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- PRE-SALE BÖLÜMÜ *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- FETCH API *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

fetch("data/info.json").then(
  response => {
      return response.json()
  }
).then(responseJson => {
  console.log(responseJson[0])
  console.log(responseJson[1])
})

// AYNI ÖRNEK
/*
fetch("data/info.json").then(
  response => response.json()
).then(responseJson => console.log(responseJson.Age))
*/

let payload = {
      userName : "Ruya" ,
      surName : "Sisman" ,
      Age : 8

}

let endPoint = "http://127.0.0.1:5500/calisma/data/info.json"