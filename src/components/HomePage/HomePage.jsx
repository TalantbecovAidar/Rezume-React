import React from 'react';
import "./style.css"

const HomePage = () => {
    return (
        <div>
           <span class="dot"></span>
           <p><i class="arrow right"></i></p>
           <div class="square">
            <h2>Талантбеков Айдар Бакытбекович(07.01.2006)</h2>
           </div>
           <span class="dot1"></span>
           <p><i class="arrow1 left"></i></p>
           <div class="square1">
            <h4>Начинающий программист, пока что работаю на JavaScript, но в дальнейшем хочу освоить Python, чтобы сразу знать и front-end и back-end, мои работы 
                вы можете увидеть в моем профиле Git Hub, помимо ссылки на Git Hub в "Контакты" вы можете найти ссылки на другие мои соц.сети
            </h4>
           </div>
           <span class="dot2"></span>
           <p><i class="arrow2 right"></i></p>
           <div class="square2">
            <h4>На данный момент учусь на it курсах в Makers, сертификат получу через месяц
            </h4>
           </div>

        </div>
        
    );
};

export default HomePage;

