// редактирование данных в одной персоне

function editBandit(i) {
    display('create_person');
    document.getElementById('TypeOf').value = arrBandits[i].TypeOf;
    document.getElementById('FirstName').value = arrBandits[i].FirstName;
    document.getElementById('LastName').value = arrBandits[i].LastName;
    document.getElementById('old').value = arrBandits[i].old;
    document.getElementById('children').value = arrBandits[i].children;
    document.getElementById('position').value = arrBandits[i].position;
    document.getElementById('experience').value = arrBandits[i].experience;
    document.getElementById('When').value = arrBandits[i].When;
    document.getElementById('Organization').value = arrBandits[i].Organization;
    deleteBandit(i, arrBandits);
    document.getElementById('mainMenu').style.display = 'none';
}

function deleteBandit(i, arrBandits) {
    arrBandits.splice(i, 1);
    printInfo(arrBandits);
}

//вывод всей информации на странице о выбранной персоне в id all_info

function printDefaultInfo(i) {
    let form = document.getElementById('all_info').getElementsByTagName('form');
    //первый инпут в форме
    form[0].innerHTML = '<br>';
    form[0].innerHTML += `<div class="deatailedInfo">
        <div class="details">
        <div class="text_name strong">Тип -- ${arrBandits[i].TypeOf}</div>
        <div class="text_name strong">Имя -- ${arrBandits[i].FirstName}</div>
        <div class="text_name strong">Фамилия -- ${arrBandits[i].LastName}</div>
        <div class="text_name strong">Возраст -- ${arrBandits[i].old}</div>
        <div class="text_name strong">Дети -- ${arrBandits[i].children}</div>
        <div class="text_name strong">Опыт -- ${arrBandits[i].experience}</div>
        <div class="text_name strong">Организация -- ${arrBandits[i].Organization}</div>
        <div class="text_name strong">Дата устройства -- ${arrBandits[i].When}</div>
        
        </div>
        </div>
        <input type="button" class="buttons" id="mainMenu2" value="Главное меню">`;

    document.getElementById('mainMenu2').addEventListener('click', function () {
        display('information');
    });
}

// function openDiv(){
//     var buttonOpen = document.getElementsByClassName('show');
//     for(let button of buttonOpen){
//       button.addEventListener('click', function(){
//           button.parentElement.querySelector('.dop-info').classList.toggle('close');
//           event.preventDefault();
//       })
//     }
//   }


//отрисовка всей информации о персонах

function printInfo(arrBandits) {
    let form = document.getElementById('information').getElementsByTagName('form');
    form[0].innerHTML = '<br>';
    //Первая (верхняя) строка таблицы
    form[0].innerHTML += `<div class="text_descriptions>"
    <div class="elem strong"> Фамилия</div>
    <div class="elem strong"> Имя</div>
    <div class="elem strong"> Должность</div>
        </div>`;
    for (let i = 0; i < arrBandits.length; i++) {
        // каждое i - информация о персоне
        form[0].innerHTML += `<div class="text_description">
        <hr>
        <div class="elem strong"> ${arrBandits[i].LastName}</div>
        <div class="elem strong" id="details${i}">${arrBandits[i].FirstName}</div>
        <div class="elem strong">${arrBandits[i].position}</div><hr>
        <div class="elem" id="edit${i}">Редактировать</div>
        <div class="elem" id="remove${i}">Удалить</div>
       </div>`
    }
    form[0].innerHTML += '<br>' +
        '<input type="button" id="newBanditButton" class="buttons" value="Добавить нового бандита">';

    // добавим обработчики

    for (let i = 0; i < arrBandits.length; i++) {
        let edit = `edit${i}`;
        let remove = `remove${i}`;
        let details = `details${i}`;
        document.getElementById(edit).style.color = 'blue';
        document.getElementById(edit).style.fontSize = '20px';
        document.getElementById(remove).style.color = 'red';
        document.getElementById(details).style.color = 'green';
        document.getElementById(details).style.fontSize = '30px';

        document.getElementById(details).addEventListener('click', function () {
            printDefaultInfo(i, arrBandits);
            display('all_info');
        })

        document.getElementById(edit).addEventListener('click', function () {
            editBandit(i);
        })

        document.getElementById(remove).addEventListener('click', function () {
            if (confirm(`Точно удаляем информацию о ${arrBandits[i].FirstName} ?`)) {
                deleteBandit(i, arrBandits);
            } else {

            }
        })
    }

    document.getElementById('newBanditButton').addEventListener('click', function () {
        display('create_person');
        document.getElementById('createPerson').style.display = "";
    })
}

/*Выбирать либо "information" лмбо "all_info" либо create_person */
// display flex чтобы отобразить нужный блок
function display(visibleId) {
    switch (visibleId) {
        case 'all_info':
            document.getElementById('information').style.display = 'none';
            document.getElementById('all_info').style.display = 'flex';
            document.getElementById('create_person').style.display = 'none';
            break;
        case 'information':
            document.getElementById('information').style.display = 'flex';
            document.getElementById('all_info').style.display = 'none';
            document.getElementById('create_person').style.display = 'none';
            break;
        case 'create_person':
            document.getElementById('information').style.display = 'none';
            document.getElementById('all_info').style.display = 'none';
            document.getElementById('create_person').style.display = 'flex';
            break;
    }
}

// родительский класс с геттером и сеттером

class BaseClass {
    constructor(TypeOf, FirstName, LastName, old, children, position, experience, When, Organization) {
        this.TypeOf = TypeOf;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.old = old;
        this.children = children;
        this.position = position;
        this.experience = experience;
        this.When = When;
        this.Organization = Organization;
    }

    get TypeOf() {
        return this._TypeOf;
    }


    set TypeOf(value) {
        if (value.length == '') {
            alert('Введите Ваше Имя');
        } else {
            this._TypeOf = value
        }
    }
    get LastName() {
        return this._LastName;
    }
    set LastName(value) {
        if (value.length == '') {
            alert('Введите Вашу Фамилию')
        } else {
            this._LastName = value
        }
    }
    get old() {
        return this._old;
    }


    set old(value) {
        if (value.length == '') {
            alert('Введите Ваш возраст');
        } else {
            this._old = value
        }
    }
    get children() {
        return this._children;
    }


    set children(value) {
        if (value.length == '') {
            alert('Введите Ваше Имя');
        } else {
            this._children = value
        }
    }
    get experience() {
        return this._experience;
    }


    set experience(value) {
        if (value.length == '') {
            alert('Введите Ваше Имя');
        } else {
            this._experience = value
        }
    }
    get When() {
        return this._When;
    }


    set When(value) {
        if (value.length == '') {
            alert('Введите Ваше Имя');
        } else {
            this._When = value
        }
    }
    get Organization() {
        return this._Organization;
    }


    set Organization(value) {
        if (value.length == '') {
            alert('Введите Ваше Имя');
        } else {
            this._Organization = value
        }
    }

}

// классы наследники

class OneExtendsClass extends BaseClass {
    constructor(TypeOf, FirstName, LastName, old, children, position, experience, When, Organization, type1, type2) {
        super(TypeOf, FirstName, LastName, old, children, position, experience, When, Organization);
        this.type1 = type1;
        this.type2 = type2;
        this.type = 'killer';
    }

    /**methods... */
}


class TwoExtendsClass extends BaseClass {
    constructor(TypeOf, FirstName, LastName, old, children, position, experience, When, Organization, type3, type4) {
        super(TypeOf, FirstName, LastName, old, children, position, experience, When, Organization);
        this.type3 = type3;
        this.type4 = type4;
        this.type = 'sniper';
    }

    /**methods... */
}

//проверка на то какая радио-кнопка и возвразаем его value

function checkCheckBox() {
    let radio = document.getElementsByName('radioOneExt');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return (radio[i].value);
        }
    }
}

let arrBandits = [];  //массив из персон

display('infornation');
printInfo(arrBandits);

// главная страница готова
// с кнопками CRUD-операции

/** listeners */

// на главное меню

document.getElementById('createPerson').addEventListener('click', function () {
    document.getElementById('mainMenu').style.display = '';

    let TypeOf = document.getElementById('TypeOf').value
    let FirstName = document.getElementById('FirstName').value;
    let LastName = document.getElementById('LastName').value;
    let old = document.getElementById('old').value
    let children = document.getElementById('children').value
    let position = document.getElementById('position').value
    let experience = document.getElementById('experience').value
    let When = document.getElementById('When').value
    let Organization = document.getElementById('Organization').value
    let type = checkCheckBox();

    switch (type) {
        // case 'killer':
        //     arrBandits[arrBandits.length] = new OneExtendsClass(FirstName, /*123, 123*/);
        //     printInfo(arrBandits);
        //     display('information');
        //     alert('Добавили нового');
        //     break;
        // case 'sniper':
        //     arrBandits[arrBandits.length] = new TwoExtendsClass(FirstName, /*213123123, 123123*/);
        //     printInfo(arrBandits);
        //     display('information');
        //     alert('Добавили нового');
        //     break;
        default:
            arrBandits[arrBandits.length] = new OneExtendsClass(TypeOf, FirstName, LastName, old, children, position, experience, When, Organization);
            printInfo(arrBandits);
            display('information');
            alert('Добавили нового');
            break;
    }
})

document.getElementById('mainMenu').addEventListener('click', function () {
    display('information');
});