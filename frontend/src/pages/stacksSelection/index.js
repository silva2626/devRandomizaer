import React,{useState} from 'react'
import { FaHeart } from 'react-icons/fa'

import './styles.css'

export default function StackSelection(){
    const [stacks,setStacks] = useState([
        {
            id: 1,
            name: 'PHP',
            selected: false,
            type: 'Backend',
        },
        {
            id: 2,
            name: 'NodeJs',
            selected: false,
            type: 'Backend',
        },
        {
            id: 3,
            name: 'Python',
            selected: false,
            type: 'Backend',
        },
        {
            id: 4,
            name: 'Ruby',
            selected: false,
            type: 'Backend',
        },
        {
            id: 5,
            name: 'GO',
            selected: false,
            type: 'Backend',
        },
        {
            id: 6,
            name: 'React',
            selected: false,
            type: 'Frontend',
        },
        {
            id: 7,
            name: 'VueJs',
            selected: false,
            type: 'Frontend',
        },
        {
            id: 8,
            name: 'Angular',
            selected: false,
            type: 'Frontend',
        },
        {
            id: 9,
            name: 'React Native',
            selected: false,
            type: 'Mobile',
        },
        {
            id: 10,
            name: 'Laravel',
            selected: false,
            type: 'Backend',
        },
        {
            id: 12,
            name: 'Express',
            selected: false,
            type: 'Backend',
        },
        {
            id: 13,
            name: 'MongoDB',
            selected: false,
            type: 'DataBase',
        },
        {
            id: 14,
            name: 'MySql',
            selected: false,
            type: 'DataBase',
        },
        {
            id: 15,
            name: 'Postgress',
            selected: false,
            type: 'DataBase',
        },
        {
            id: 16,
            name: 'SqLite',
            selected: false,
            type: 'DataBase',
        },
    ])
    function changeSelected(stack){
        if(stack.selected === true){
            stack.selected = false
        }
        else{ 
            stack.selected = true
        }
        setStacks([...stacks])
    }
    return (
        <div className="stack-container">
            <div className="stack-main">
                <h2 className="stack-title">Stacks</h2>
                <h3 className="stack-subTitle">Selecione as Stacks que você e sua equipe tem proficiência.</h3>
                <div className="stackBox">
                    {stacks.map(stack => {return stack.selected ? 
                    <div className="stack active" key={stack.id} onClick={() => changeSelected(stack)}>
                        {stack.name}
                    </div> :
                    <div className="stack" key={stack.id} onClick={() => changeSelected(stack)}>
                        {stack.name}
                    </div>} )}
                </div>
            </div>
        
            <div className="home-madeBy">
                <h4><a href="https://github.com/silva2626" target="_blank">Made with <FaHeart color="#f44336" /> by Allison</a></h4>
            </div>
        </div>
    )
}