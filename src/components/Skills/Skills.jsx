import React from 'react'
import styles from './Skills.module.css'
import { FaHtml5, FaCss3Alt, FaSquareJs, FaReact, FaFigma, FaDocker, FaNode } from 'react-icons/fa6'
import { SiMicrosoftsqlserver, SiPhp, SiMysql } from "react-icons/si";



function Skills() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill Set</h3>
      <ul className={styles.skills_list}>
        <li>
            <FaHtml5 />
        </li>
        <li>
            <FaCss3Alt />
        </li>
        <li>
            <FaSquareJs />
        </li>
        <li>
            <SiPhp />
        </li>
        <li>
            <FaReact />
        </li>
        <li>
            <FaNode />
        </li>
        <li>
            <SiMicrosoftsqlserver />
        </li>
        <li>
            <SiMysql />
        </li>
        <li>
            <FaDocker />
        </li>
        
     
      </ul>
    </div>
  )
}

export default Skills
