const saturdayFun = (activity= 'roller-skate') => {
  return (`This Saturday, I want to ${activity}!`)

}
  console.log(saturdayFun())
  console.log(saturdayFun('bungee jump'))


  const mondayWork = (duty= 'go to the office') => {
    return (`This Monday, I will ${duty}.`) 
  }

    console.log(mondayWork())
    console.log(mondayWork('work from home'))

    function wrapAdjective(wrapper = "*") {
      return function (adjective= "special") {  // return function
        return (`You are ${wrapper}${adjective}${wrapper}!`) // wrapper wraps around 
      }
    }
      console.log(wrapAdjective("%")("a dedicated programmer"))