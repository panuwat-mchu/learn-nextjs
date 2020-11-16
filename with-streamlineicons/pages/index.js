import Head from 'next/head'
import styles from '../styles/Home.module.css'

import '../icons/twitter.svg';

import shopIcon from '../icons/shop.svg';

import Icon from '../components/icon'



export default function Home() {
  return (
    <>
      <Icon />
      <div>icon work! </div>
      <svg className="icon" viewBox={shopIcon.viewBox}>
        <use xlinkHref={`#${shopIcon.id}`} />
      </svg>
    </>
  )
}
