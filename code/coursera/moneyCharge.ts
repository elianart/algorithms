export function moneyCharge(money, coins) {
 
  var saver = {
    charge: null,
    min: 0,
  };

  coins.reduce((arr, current) => {
    justDo(() => {
      var result = calculateEquals(current, money);
      if (result.isOk) {
        return { charge: result.charge, isOk: result.isOk };
      } else {
        if (arr.length === 0) {
          return { isOk: false };
        }

        var remResult = calculate(coins, result.remainder);
        if (remResult.isOk) {
          result.charge.splice(
            result.charge.length - 1,
            0,
            ...remResult.charge
          );
          return { charge: result.charge, isOk: remResult.isOk };
        }

        return { isOk: false };
      }
    }, saver);
    arr.push(current);
    justDo(() => calculate(arr, money), saver);
    return arr;
  }, []);

  return saver.charge;
}

function justDo(func, saver) {
  var result = func();
  if (result.isOk) {
    var count = result.charge.reduce((sum, curr) => sum + curr.count, 0);
    if (!saver.min || count < saver.min) {
      saver.min = count;
      saver.charge = result.charge;
    }

    return;
  }
}

function calculateEquals(coin, money) {
  var charge = [];

  if (money < coin) {
    return { charge: charge, isOk: money === 0, remainder: money };
  }

  var remainder = Math.floor(money / coin);
  money = money - remainder * coin;
  charge.push({ count: remainder, value: coin });
  return { charge: charge, isOk: money === 0, remainder: money };
}

function calculate(coins, money) {
  var charge = [];

  for (let index = 0; index < coins.length; index++) {
    if (money === 0) {
      return { charge: charge, isOk: true };
    }
    const element = coins[index];
    var remainder = Math.floor(money / element);
    charge.push({ count: remainder, value: element });
    money = money - remainder * element;
  }

  return { charge: charge, isOk: money === 0, remainder: money };
}
