import React from "react";
import Component from "./components/Component";
import Component2 from "./components/Component2";

function App() {
    return (
        <div className="App">
            <div className={'box'}>
                <div>
            <Component name={'Bart'}
                      text={'Бартоломью Джо-Джо «Барт» Симпсон (англ. Bartholomew Jo-Jo «Bart» Simpson) — герой мультипликационного сериала «Симпсоны». Наряду с Гомером, один из наиболее известных персонажей шоу.'}
                      pic={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}
            />
            <Component name={'Homer'}
                      text={'Гоме́р Джей Си́мпсон (англ. Homer Jay Simpson) — один из главных героев мультсериала «Симпсоны» и отец в одноимённой семье. Озвучен Дэном Кастелланетой, впервые появился на телеэкране вместе с остальными членами его семьи в короткометражном мультфильме «Спокойной ночи!», показанном на «Шоу Трейси Ульман» 19 апреля 1987 года. '}
                      pic={'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png'}
            />
            <Component name={'Lisa'}
                      text={'Лі́са Марі Сімпсон (англ. Lisa Marie Simpson) — персонажка анімаційного телесеріалу «Сімпсони», озвучена Ярдлі Сміт. Автор серіалу Мет Ґрейнінґ назвав героїню іменем сестри. '}
                      pic={'https://upload.wikimedia.org/wikipedia/uk/thumb/a/ae/Lisasmiling.png/170px-Lisasmiling.png'}
            />
            <Component name={'Marge'}
                      text={'Ма́рджори Жакли́н (Мардж) Си́мпсон (англ. Marjorie Jacqueline (Marge) Simpson; урожд. — Бувье́ (англ. Bouvier)) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер.  '}
                      pic={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
            />
            <Component name={'Monthomeri'}
                      text={'Чарлз Монтгомері Бернс (англ. Charles Montgomery Burns) — колоритний персонаж мультсеріалу Сімпсони. Сточотирирічний житель міста Спрингфілд, власник Спрингфілдської атомної електростанції, відомий скнара і маразматик. Полюбляє звільняти працівників і любить вигукувати три фрази: Спустити собак, Вас звільнено і Чудесно... — дуже зловісним тоном.'}
                      pic={'https://upload.wikimedia.org/wikipedia/uk/0/08/%D0%9C%D0%BE%D0%BD%D1%82%D0%B3%D0%BE%D0%BC%D0%B5%D1%80%D1%96_%D0%91%D0%B5%D1%80%D0%BD%D1%81.gif'}
            />
                </div>
                <div>
            <Component2 id={20}
                      rickname={"Ants in my Eyes Johnson"}
                      status={"unknown"}
                      spesies={"Human"}
                      gender={"Male"}
                      rickpick={"https://rickandmortyapi.com/api/character/avatar/20.jpeg"}
            />
            <Component2 id={617}
                      rickname={"Phoenixperson"}
                      status={"Alive"}
                      spesies={"Alien"}
                      gender={"Male"}
                      rickpick={"https://rickandmortyapi.com/api/character/avatar/617.jpeg"}
            />
            <Component2 id={140}
                      rickname={"Genital Washer"}
                      status={"Alive"}
                      spesies={"Human"}
                      gender={"Male"}
                      rickpick={"https://rickandmortyapi.com/api/character/avatar/140.jpeg"}
            />
            <Component2 id={744}
                      rickname={"Cenobite"}
                      status={"unknown"}
                      spesies={"Mythological Creature"}
                      gender={"Male"}
                      rickpick={"https://rickandmortyapi.com/api/character/avatar/744.jpeg"}
            />
            <Component2 id={584}
                      rickname={"Bar Customer"}
                      status={"Alive"}
                      spesies={"Human"}
                      gender={"Male"}
                      rickpick={"https://rickandmortyapi.com/api/character/avatar/584.jpeg"}
            />
            </div>
        </div></div>
    )
}

export default App;
