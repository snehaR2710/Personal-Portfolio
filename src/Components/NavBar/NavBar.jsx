import styles from './NavBar.module.css'
import { useState } from 'react';
import { getImgUrl } from '../../utils';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);



    return(
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Sneha &apos;s</a>
            <div className={styles.menu}>
                <img 
                  className={styles.menuBtn} 
                  src={menuOpen ? getImgUrl("nav/closeIcon.png") : getImgUrl("nav/menuIcon.png")} 
                  alt="munu-button" 
                  onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
                   onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}


export {NavBar};