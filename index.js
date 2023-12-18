let victoryNumber = prompt(`Qual seu atual número de vitórias ?`); 
let defeatNumber = prompt(`Qual seu atual número de derrotas ?`);
let winningBalance = matchBalance(victoryNumber, defeatNumber);
let rank = rankerTier(winningBalance);

alert(`O herói tem saldo de ${winningBalance} vitórias e seu rank atual é ${rank}`);

function matchBalance (victoryNumber,  defeatNumber) {

   let balance = victoryNumber - defeatNumber;
   return balance;
}

function rankerTier (winningBalance) {
    let rankTier;
    if (winningBalance <= 10) {
        rankTier = `Ferro`;
    } else if (winningBalance > 11 && winningBalance <= 20) {
        rankTier = `Bronze`;
    } else if (winningBalance > 20 && winningBalance <= 50) {
        rankTier = `Prata`;
    } else if (winningBalance > 50 && winningBalance <= 80) {
        rankTier = `Ouro`;
    } else if (winningBalance > 80 && winningBalance <= 90) {
        rankTier = `Diamante`;
    } else if (winningBalance > 90 && winningBalance <= 100) {
        rankTier = `Lendário`;
    } else {
        rankTier =  `Imortal`;
    }
    
    return rankTier;
}