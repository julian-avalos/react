import React from 'react';
import './App.css';

function Projects({name}){
    return (
        <div className="content__projects__item">
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam consequuntur exercitationem tempora dicta accusamus velit officia voluptatum quidem ea quasi odio at inventore, consequatur architecto perferendis atque nulla? Esse, laudantium!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla est minus ipsa dolorum repellendus. Cupiditate in alias similique neque doloremque? Atque quos voluptas consequuntur facilis, provident optio, necessitatibus doloribus officia aliquam commodi tempora dignissimos ratione nihil voluptatem soluta. Quia quidem magnam quas numquam iure, id itaque enim accusantium aliquam.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quaerat molestiae numquam amet veniam? Expedita dolorum veniam corporis ullam cum repellendus, natus amet odio rem atque dolores recusandae saepe tempora?</p>
        </div>
    );
}


export default Projects;