import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolio</h3>
        <div className={styles.port_list}>
            <Tilt className={styles.port_items} scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2fGVufDB8fDB8fHww" alt="" />
                <p>Project Title</p>
            </Tilt>
            <div className={styles.port_items}>
                 <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                 <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2fGVufDB8fDB8fHww" alt="" />
                </Tilt>
                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2fGVufDB8fDB8fHww" alt="" />
                </Tilt>
                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2fGVufDB8fDB8fHww" alt="" />
                </Tilt>
                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2fGVufDB8fDB8fHww" alt="" />
                </Tilt>
                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2fGVufDB8fDB8fHww" alt="" />
                </Tilt>
                <p>Project Title</p>
            </div>
        </div>
      
    </div>
  )
}

export default Portfolio
