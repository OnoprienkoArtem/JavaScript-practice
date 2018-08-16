// ООП - это методология, которая позволяет представить приложение, в виде совокупности объектов, взаимодействующих 
// друг с другом. Каждый из которых является экземпляром определенного класса, а классы образуют иерархию наследования.
// В большинстве ОО языках программиррования такие объекты создаются с помощью специальных конструкций,
// называемых КЛАССАМИ (CLASSES).

// Класс - это программный код, который представляет из себя шаблон или заготовку, на основе которой в последствии и 
// будет создан объект. Класс не имеет состояния и не предпологает вызов методов, описанных в классе.

// Объект - структура, которая была создана из класса.

// в JS классов не существует, поэтому все объекты создаются с использованием функций-конструкторов. Такие объекты 
// называются экземплярами класса и используются как составные блоки приложения.

// Объекты создаются из классов, объект хранит состояние, класс только описывает структуру.

// основные понятия ООП
// ИНКАПСУЛЯЦИЯ - каждый объект отвечает за конкретную функциональность.
// НАСЛЕДОВАНИЕ - объекты могут наследовать функциональность других оюъектов.
// ПОЛИМОРФИЗМ - объекты могут предоставлять одинаковый интерфейс и его использование, но внутренняя реализация
// этого интерфейса будет разной.

// в JS используют два принципа: инкапсуляция и наследование.


// ПРОТОТИП ГОТОВОГО ОБЪЕКТА __proto__
// у любого созданного объекта всегда присутствует ссылка на другой объект, который называется прототип.
// Прототип всех объектов является глобальный объект Object.

// __proto__ - является ссылкой на прототип объекта.

// прототипное наследование

let functionality = {
    open: function() {
        console.log(`${this.room} is open.`);
    }
}

let bathRoom = {
    room: 'Bath room'
}

let kitchen = {
    room: 'Kitchen'
}

bathRoom.__proto__ = functionality;
kitchen.__proto__ = functionality;
bathRoom.open(); // Bath room is open.
kitchen.open(); // Kitchen is open.



// Если создать новый массив с помощью конструктора new Array(), то прототипом будет не объект Object, а объект Array.
// Но прототипом самого объекта Array уже будет все тот же объект Object. Такая структура называется цепочкой прототипов.

// суть наследования в JS - поиск по цепочке прототипов до системного прототипа Object.



// УСТАНОВКА ПРОТОТИПА ДЛЯ ФУНКЦИИ-КОНСТРУКТОРА

// Прототипное программирование – это модель ООП которая не использует классы, а вместо классов используются прототипы.
// На практике при программировании в ООП стиле, в JavaScript, для создания объектов используются функции - конструкторы.
// Для установки прототипа в данном случае так же можно использовать ссылку __proto__, но у функции - конструктора
// (и у любой другой функции) есть специальное свойство prototype, с помощью которого можно установить прототип объекту.
// Кроме того, способ установки прототипа с помощью свойства prototype является полностью кроссбраузерным и поддерживается 
// в старых версиях браузеров. Использование данного свойства стало уже обычной практикой, практически стандартом.
// В данном случае, значение ссылки __proto__, которая указывает на прототип объекта, берется из свойства prototype.
// Итак, каждая функция в JavaScript имеет свойство prototype, в которое присваиваются свойства и методы, которые необходимо 
// сделать доступными для наследования. Данное свойство используется, прежде всего, для реализации наследования.


let room = {
    area: 12,
    printArea: function() {
        console.log(`Area: ${this.area}`);
    }
};

function BusinessRoom() {
    this.isMeetingAvailable = true;
}

BusinessRoom.prototype = room;
const businessRoom = new BusinessRoom();
console.log(businessRoom.area); // 12
businessRoom.printArea(); // Area: 12



// ОЕАЛИЗАЦИЯ "КЛАССА" С ПОМОЩЬЮ ПРОТОТИПА

// Как таковых классов в JavaScript нет, они реализуются с помощью функций - конструкторов и чаще называются 
// просто прототипом или родительским объектом.


function Print(doc) {
    this.document = doc;

    this.print = function() {
        console.log(this.document);
    }
}

const newPrinter = new Print('Text 1');
const otherPrinter = new Print('Text 2');

newPrinter.print(); // Text 1
otherPrinter.print(); // Text 2


// !!!!  =>   лучше метод print из функции конструктора Print вынести в прототип


function Printer(text) {
    this.document = text;
}

Printer.prototype.print = function() {
    console.log(`content this doc: ${this.document}`);
}

const newPrinter1 = new Printer('new text from printer 1');
const newPrinter2 = new Printer('new text from printer 2');

newPrinter1.print(); // content this doc: new text from printer 1
newPrinter2.print(); // content this doc: new text from printer 2

