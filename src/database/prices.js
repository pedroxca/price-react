const monthlyPrices = {
  basic: {
    price: 10,
    description: ['Standard package', 'Only 5GB', '1000 requests per month'],
    title: 'Standard'
  },
  medium: {
    price: 25,
    description: ['Best cost-benefit package', '25GB', '5000 requests per month'],
    title: 'Normal'
  },
  premium: {
    price: 50,
    description: ['Premium package package', '100GB', '11000 requests per month'],
    title: 'Premium'
  },
}
const yearlyPrices = {
  basic: {
    price: 110,
    description: monthlyPrices.basic.description,
    title: monthlyPrices.basic.title
  },
  medium: {
    price: 270,
    description: monthlyPrices.medium.description,
    title: monthlyPrices.medium.title
  },
  premium: {
    price: 486,
    description: monthlyPrices.premium.description,
    title: monthlyPrices.premium.title
  },
}

export { monthlyPrices, yearlyPrices }