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
    savings: true,
    checkSallary: function() {
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
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert('Бюджет на один день равен ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay <= 100){
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("Высокий уровень достатка");
        } else{
            console.log("Ошибка");
        }
    },
    checkSavings: function() {
        if(appData.savings === true){
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
    
            appData.monthIncome = save/100/12*percent;
            alert('Ваш ежемесячный доход с депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i=1;i<4;i++){
            optCost = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = optCost;
        }  
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        for(let i=0;i<1;i++){
            if((typeof(items)) === 'string' && items != '' && (typeof(items)) != null ){
                appData.income = items.split(',');
                appData.income.sort();
                appData.income.push(prompt('Может что-то ещё?'));
                appData.income.forEach(function(element, index) {
                    if(element != null){
                        alert("Способы доп. заработка: " + index + ": " + element);
                    }
                });
            }else{
                i=i-1;
            }
        }
    }
};

for(let key in appData){
    console.log('Наша программа включает в себя данные: ' + key);
}