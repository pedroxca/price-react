import styles from '../styles/components/CardPrice.module.scss';


const CardPrice = props => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  let middle = props.middle
  if (!middle) {
    middle = false;
  }
  const productDescription = props.productDescription
  const packagePrice = props.packagePrice



  return (
    <div>
      {
        middle === true ?
          <div className={styles.containerMiddle}>
            <p className={styles.packageTitleMiddle} >{props.packageTitle}</p>
            <h1 className={styles.packagePriceMiddle}>{formatter.format(packagePrice)}</h1>
            <ul className={styles.descriptionListMiddle}>
              {productDescription.map(description => {
                return (
                  <li key={Math.random() * 100000000} className={styles.productDescription}>{description}</li>
                )
              })}
            </ul>
            <div className={styles.buttonDivMiddle}>
              <button className={styles.buyButtonMiddle} >LEARN MORE</button>
            </div>
          </div>
          :
          <div className={styles.container}>
            <p className={styles.packageTitle} >{props.packageTitle}</p>
            <h1 className={styles.packagePrice}>{formatter.format(packagePrice)}</h1>
            <ul className={styles.descriptionList}>
              {productDescription.map(description => {
                return (
                  <li key={Math.random() * 100000000} className={styles.productDescription}>{description}</li>
                )
              })}
            </ul>
            <div className={styles.buttonDiv}>
              <button className={styles.buyButton} >LEARN MORE</button>
            </div>
          </div>
      }

    </div>
  )
}

export default CardPrice
