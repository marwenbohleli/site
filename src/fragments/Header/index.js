import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Svg from 'react-svg-inline'
import handleClickAway from '../../utils/handleClickAway'
import gitHubSvg from '../../assets/icons/github.svg'
import Logo from '../../assets/images/serverless-logo.svg'
import styles from './Header.css'
import Auth from '../../components/Auth/Auth'

const propTypes = {
  fullWidth: PropTypes.bool
}

export default class Header extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      sideNavOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }
  componentDidMount() {
    document.body.addEventListener('click', this.closeNav)
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.closeNav)
  }
  closeNav(e) {
    const toggleNode = this.refs.toggle
    const isOutsideClick = handleClickAway(toggleNode, e)
    if (toggleNode && isOutsideClick) {
      this.setState({
        sideNavOpen: false
      })
    }
  }
  handleClick() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    })
  }
  render() {
    const { fullWidth } = this.props
    const { sideNavOpen } = this.state
    const mobileNav = (sideNavOpen) ? styles.open : ''
    const openClass = (sideNavOpen) ? styles.animate : ''
    const containerStyle = (fullWidth) ? styles.fullWidth : ''
    return (
      <header className={styles.header}>
        <div className={styles.navFixed}>
          <div className={`${styles.navWrapper} ${containerStyle}`}>
            <div className={styles.navLeft}>
              <Link to='/' className={styles.logo}><Svg svg={Logo} className={styles.logoIcon} /><span className={styles.logoText}>serverless</span></Link>
            </div>
            <div ref='toggle' onClick={this.handleClick} className={styles.toggle}>
              <div className={styles.ham}>
                <div className={`${styles.bar} ${openClass}`} />
              </div>
            </div>
            <nav className={`${styles.navRight} ${mobileNav}`}>
              <ul className={styles.navItems}>
                <li className={styles.navItem}>
                  <Link to='/framework' className={styles.link}>
                    Toolkit <svg className={styles.caret} width='8' height='4' viewBox='62 7 10 6'><path d='M71.884 7.698l-4.56 5.116c-.013.022-.008.05-.026.07-.083.084-.192.12-.3.116-.106.004-.214-.033-.295-.117-.02-.02-.014-.047-.028-.068L62.115 7.7c-.154-.16-.154-.42 0-.58.156-.16.408-.16.563 0L67 11.97l4.322-4.85c.155-.16.406-.16.56 0 .157.16.157.418.002.578z' fill='#fff' /></svg>
                  </Link>
                  <ul className={styles.subNavItems}>
                    <li>
                      <Link to='/framework' className={`${styles.link} ${styles.noMobile}`}>
                        Framework
                      </Link>
                    </li>
                    <li>
                      <Link to='/framework/docs' className={styles.link}>
                        Event Gateway
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.navItem}>
                  <Link to='/company/' className={styles.link}>
                    Company
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/blog' className={styles.link}>
                    Blog
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/enterprise' className={`${styles.link} ${styles.linkSpecial}`}>
                    Enterprise
                  </Link>
                </li>

              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = propTypes
