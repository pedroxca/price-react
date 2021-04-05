import styles from '../styles/components/CardPrice.module.scss';


const CardPrice = props => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  const productDescription = props.productDescription
  const packagePrice = props.packagePrice
  const renderProductDescription = productDescription.map(description => {
    return (
      <li key={packagePrice} className={styles.productDescription}>{description}</li>
    )
  })


  return (
    <div className={styles.container}>
      <p className={styles.packageTitle} >{props.packageTitle}</p>
      <h1 className={styles.packagePrice}>{formatter.format(packagePrice)}</h1>
      <ul className={styles.descriptionList}>
        {renderProductDescription}
      </ul>
      <div className={styles.buttonDiv}>
        <button className={styles.buyButton} >Learn More</button>
      </div>
    </div>
  )
}

export default CardPrice
