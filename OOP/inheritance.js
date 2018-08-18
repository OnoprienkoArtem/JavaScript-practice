// Свойство constructor– ссылка на функцию, создавшую экземпляр объекта. 
// То есть в данном случае, по сути на саму себя.


// __proto__ - сыслка на прототип объекта.
// prototype - свойство функции-конструктора.


function NewFunction() {
    console.log(NewFunction.prototype);
}
NewFunction();


// прототипное наследование в JS
// наследование - это концепция ООП, благодоря которой вы можете расшиоить функциональность одного класса за счет методов
// и свойств другого класса.

// наследник может вызывать и использовать методы родителя. фактически у самого наследника этих методов нет.
// С помощью механизма наследования он их вызывает у родителя как будто они принадлежат ему самому.

// Класс, определенный через наследование от другого класса, называется: производным классом, классом потомком или подклассом.
// Класс, от которого новый класс наследуется, называется: предком, базовым классом, суперклассом.







// ------------  