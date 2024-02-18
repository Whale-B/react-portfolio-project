import React from 'react'
import styles from './Testimonials.module.css'


function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
            </p>
            <img src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW58ZW58MHx8MHx8fDA%3D" alt="" />
            <h4>Winrunya</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
            </p>
            <img src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVufGVufDB8fDB8fHww" alt="" />
            <h4>Winrunya</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
            </p>
            <img src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVufGVufDB8fDB8fHww" alt="" />
            <h4>Winrunya</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
