export const mariageOption = [
  {
    value: 1,
    label: "Married"
  },
  {
    value: 2,
    label: "Single"
  },
  {
    value: 3,
    label: "Others"
  }
]

export const genderOption = [
  {
    value: 1,
    label: "Male"
  },
  {
    value: 2,
    label: "Female"
  }
]

export const getSexMarriage = (sex, marriage) => {
  let res
  if (sex === 1){
    switch(marriage){
      case 1:
        res = 1
        break
      case 2:
        res = 2
        break
      case 3:
        res = 3
        break
      default:
        break
    }
  } else if (sex === 2){
    switch(marriage){
      case 1:
        res = 4
        break
      case 2:
        res = 5
        break
      case 3:
        res = 6
        break
      default:
        break
    }
  }
  return res
}

export const educationOption = [
  {
    value: 1,
    label: "Graduate School"
  },
  {
    value: 2,
    label: "University"
  },
  {
    value: 3,
    label: "High School"
  },
  {
    value: 4,
    label: "Others"
  }
]

export const payStatusOption = [
  {
    value: -1,
    label: "Pay Duly"
  },
  {
    value: 1,
    label: "Payment Delayed for 1 Month"
  },
  {
    value: 2,
    label: "Payment Delayed for 2 Month"
  },
  {
    value: 3,
    label: "Payment Delayed for 3 Month"
  },
  {
    value: 4,
    label: "Payment Delayed for 4 Month"
  },
  {
    value: 5,
    label: "Payment Delayed for 5 Month"
  },
  {
    value: 6,
    label: "Payment Delayed for 6 Month"
  },
  {
    value: 7,
    label: "Payment Delayed for 7 Month"
  },
  {
    value: 8,
    label: "Payment Delayed for 8 Month"
  },
  {
    value: 9,
    label: "Payment Delayed for 9 Month or More"
  }
]