const monthlyPricesData = {
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
const yearlyPricesData = {
  basic: {
    price: 110,
    description: monthlyPricesData.basic.description,
    title: monthlyPricesData.basic.title
  },
  medium: {
    price: 270,
    description: monthlyPricesData.medium.description,
    title: monthlyPricesData.medium.title
  },
  premium: {
    price: 486,
    description: monthlyPricesData.premium.description,
    title: monthlyPricesData.premium.title
  },
}

export { monthlyPricesData, yearlyPricesData }