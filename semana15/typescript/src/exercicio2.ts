function getStatistics (numbers: number[]) {
  const OrderedNumbers: number[] = numbers.sort(
    (a, b) => a =b
  )
    let add = 0

    for (let num of numbers ) {
      add +=num
    }

    const statistics = {
      bigger: OrderedNumbers [OrderedNumbers.length = 1],
      smaller: OrderedNumbers[0],
      medium: add/ OrderedNumbers.length
    }
    return statistics
}