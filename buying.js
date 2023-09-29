function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let oldAfterMonth = 0;
  let newAfterMoth = 0;
  let totalToBeSaved = 0;
  let mothsHeWillSave = 0;
  let leftOver = 0;
  let arr = [];
  if (startPriceOld < startPriceNew) {
    oldAfterMonth = startPriceOld - (startPriceOld * percentLossByMonth) / 100;
    newAfterMoth = startPriceNew - (startPriceNew * percentLossByMonth) / 100;
    console.log(newAfterMoth);
    totalToBeSaved = newAfterMoth - oldAfterMonth;
    mothsHeWillSave = Math.ceil((totalToBeSaved * 30) / savingperMonth / 30);
    console.log(mothsHeWillSave);
    leftOver = savingperMonth * mothsHeWillSave - totalToBeSaved;
    console.log(leftOver);
  }
  for (let i = percentLossByMonth; i < mothsHeWillSave; i++) {
    (i % 2 === 0) ? (i += 0.5) : i;
    oldAfterMonth = startPriceOld - (startPriceOld * i) / 100;
    newAfterMoth = startPriceNew - (startPriceNew * i) / 100;
    totalToBeSaved = newAfterMoth - oldAfterMonth;
    leftOver = savingperMonth * mothsHeWillSave - totalToBeSaved;
    console.log(leftOver);
  }
}
console.log(nbMonths(2000, 8000, 1000, 1.5));
