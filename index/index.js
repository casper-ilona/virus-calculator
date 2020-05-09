const expectedlyIllPerson = 70; // ожидаемо колличество переболевших человек
const infectionSpreadsPerDay = 10; // Степень распостранения человек в день
const numberDaysDisease = 14;   // Колличесьво дней течении болезни
const numberPeopleTested = 100000000;// Колличества тес-х человек
const expectedIllPersonsTotal = numberPeopleTested * expectedlyIllPerson / 100;
let totalDays = 0; //колличесвто   дней понадобившихся для выздоравления

for (
    let numberSickPerson = 1;
    numberSickPerson < expectedIllPersonsTotal;
    numberSickPerson += Math.max(2, numberSickPerson * infectionSpreadsPerDay / 100), totalDays++
) {
console.log(totalDays, `>`, parseInt(numberSickPerson, 10));
}

console.log(`>> days`, totalDays+numberDaysDisease);
