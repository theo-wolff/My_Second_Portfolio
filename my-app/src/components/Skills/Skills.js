import React from 'react'
import "./Skills.css"
import c from "../../img/c.png"
import cpp from "../../img/c-.png"
import cs from "../../img/c-sharp.png"
import css from "../../img/css-3.png"
import git from "../../img/github.png"
import html from "../../img/html.png"
import js from "../../img/js.png"
import office from "../../img/office.png"
import react from "../../img/physics.png"
import python from "../../img/python.png"
import sql from "../../img/sql.png"
import fr from "../../img/france.png"
import en from "../../img/united-kingdom.png"
import ge from "../../img/german.png"
import vscode from "../../img/vscode.svg"
import { Component } from './component'






const Skills = () => {

  return (
    <div className='skills'>
        <h2 className='skills-title'>My skills</h2>
        <div className='skills-bar'></div>
        <ul className='skills-list'>
            <li className='skills-items'>
                <Component image={js}></Component>
                <Component image={html}></Component>
                <Component image={cs}></Component>
                <Component image={react}></Component>
                <Component image={css}></Component>
                <Component image={python}></Component>
                <Component image={sql}></Component>
            </li>
            <li className='skills-items'>
                <Component image={c}></Component>
                <Component image={cpp}></Component>
                <Component image={git}></Component>
                <Component image={office}></Component>
            </li>
            <li className='skills-items'>
                <Component image={fr}></Component>
                <Component image={en}></Component>
                <Component image={ge}></Component>
            </li>
            <li className='skills-items'>
                <Component image={vscode}></Component>
            </li>
        </ul>
    </div>
  )
}

export default Skills