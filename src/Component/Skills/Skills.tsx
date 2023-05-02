import React from 'react';

import s from "./Skills.module.css"
import shared from "../../shared/sharedStyles.module.css"
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={`${s.skillsWrapper} ${shared.container}`}>

                <h2 className={s.title}>My Skills</h2>

                <div className={s.skills}>
                    <Skill title="JS" description="Lorem ipsum. Nunc in ornare sem. Pellentesque efficitur ultricies bibendum. Praesent iaculis pulvinar odio, nec finibus quam auctor a. Nam venenatis metus massa, id molestie ligula dapibus vel. Maecenas non pretium dui. Vivamus leo metus, feugiat ut tristique ac, tristique a libero."/>
                    <Skill title="HTML" description="Sed eleifend ex sed commodo luctus. efficitur rutrum hendrerit. Sed scelerisque augue et varius scelerisque. Fusce sed elit nec magna pulvinar scelerisque quis nec orci. Nulla malesuada eget sapien ac tempor. Praesent in risus mollis, vulputate urna id, lacinia ex. "/>
                    <Skill title="REDUX" description="Estibulum erat dolor, placerat non ipsum in, posuere molestie quam. Donec metus ex, sed,eleifend ex sed enim id tincidunt sollicitudin. Aliquam fermentum feugiat sapien, nec convallis nuncommodo luctus. Vestibulum sed tincidunt lacus. Orci varius natoque penatibus "/>
                </div>


        </div>
    );
};

export default Skills;