import { monthlyPricesData, yearlyPricesData } from "../database/prices"
import CardPrice from "./CardPrice"
import styles from '../styles/components/LandPrices.module.scss'
import { useEffect, useState } from "react"

const LandPrices = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [packageType, setPackageType] = useState(yearlyPricesData)
  const handleToggleType = () => {
    setIsYearly(!isYearly)
    if (!isYearly) {
      setPackageType(monthlyPricesData)
    } else {
      setPackageType(yearlyPricesData)
    }
  }
  useEffect(() => {
    console.log(packageType);
  }, [packageType])

  return (
    <div className={styles.wrapper}>
      <span className={styles.buyButton} onClick={handleToggleType} >{isYearly ? "Yearly" : "Monthly"}</span>
      <div className={styles.inWrapper}>
        <CardPrice productDescription={packageType.basic.description} packageTitle={packageType.basic.title} packagePrice={packageType.basic.price} />
        <CardPrice productDescription={packageType.medium.description} middle={true} packageTitle={packageType.medium.title} packagePrice={packageType.medium.price} />
        <CardPrice productDescription={packageType.premium.description} packageTitle={packageType.premium.title} packagePrice={packageType.premium.price} />
      </div>

    </div>
  )
}

export default LandPrices
