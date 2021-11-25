import styles from './styles.module.scss'
import { ReactSVG } from 'react-svg'
import sun from '../../img/svg/sun.svg'
import svgI from '../../img/svg/logo.svg'
const Spinner = () => {
return (
    <div className={styles.preloader}>
         <ReactSVG src={sun} className={styles.sun}/>
          <ReactSVG src={svgI} className={styles.cloud}/>
  <div className={styles.rain}>
    <span className={styles.drop}></span>
    <span className={styles.drop}></span>
    <span className={styles.drop}></span>
    <span className={styles.drop}></span>
    <span className={styles.drop}></span>
    <span className={styles.drop}></span>
    <span className={styles.drop}></span>
    <span className={styles.drop}></span>
    <span className={styles.drop}></span>
    <span className={styles.drop}></span>
  </div>
  
  <div className={styles.text}>
    LOOKING OUTSIDE FOR YOU... ONE SEC
  </div>
</div>
)
}

export default Spinner