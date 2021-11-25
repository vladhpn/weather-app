import moment from 'moment'
import styles from './styles.module.scss'

const WeatherData = ({city, country, temp, text, code , icon}) => {
    const now = moment()
const time = now.format('hh:mm a - ddd, D MMM YY')
    return(
        <div>
            <h1 className={styles.title}> Weather App </h1>
        <div className={styles.box}>
            {city.length > 0 ? 
            <ul className={styles.list}>
           <li className={styles.temp}>{temp}&deg;</li>
           <li className={styles.box_item}> <p className={styles.name}>{city} {country}</p>
           <p  className={styles.time}>{time}</p>
           </li>
           <li><img src={icon}  alt='logo'/>
           <p className={styles.text}>{text}</p></li>
       </ul>
       : 
       null}
            
        </div>
       
    {/* <p>код погоды: {code}</p> */}

        </div>
    )
}

export default WeatherData