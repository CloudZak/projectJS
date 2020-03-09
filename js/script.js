"use strict";

let money, time;

// Определение бюджета и даты
function start(){
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == null || money == ""){
        money = +prompt('Ваш бюджет на месяц?', '');
    };
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: '',
    income : [],
    savings: true
};

// Обязательные расходы
function checkSallary() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");
 
    if ((typeof (a)) === 'string' && (typeof (b)) === 'number' && (typeof (a) != null) && (typeof (b) != null && a != '' && b != '' && a.length < 50)) {
      console.log('done');
      appData.expenses[a] = b;
    } else {
      i=i-1;
    }
  }
}
checkSallary();

// Расчет дневного бюджета  и вывод на экран этого значения
function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert('Бюджет на один день равен ' + appData.moneyPerDay);
}
detectDayBudget();

// Уровень достатка
function detectLevel(){
    if(appData.moneyPerDay <= 100){
        console.log("Минимальный уровень достатка");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("Высокий уровень достатка");
    } else{
        console.log("Ошибка");
    }
}
detectLevel();

// Доход с депозита
function checkSavings(){
    if(appData.savings === true){
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');

        appData.monthIncome = save/100/12*percent;
        alert('Ваш ежемесячный доход с депозита: ' + appData.monthIncome);
    }
}
checkSavings();

// Необязательные расходы
function chooseOptExpenses(){
    let optionalExpenses = {},
        optCost,
        i=1;
    while(i<4){
        optCost = prompt('Статья необязательных расходов?', '');
        optionalExpenses[i] = optCost;
        i++;
    }
    console.log(optionalExpenses);
}
chooseOptExpenses();