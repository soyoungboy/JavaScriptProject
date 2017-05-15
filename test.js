/**
 * 完成课时
 * @example finishLesson(1);
 * @param {Number} lesson 课程
 */
function finishLesson(lesson) {

	alert("恭喜，你已经完成HBuilder入门课程。你可以用其它开发工具试试写这几十行代码，至少比HBuilder慢5倍！更重要的是，你很难找到这么爽的编码体验。");
}

function myFunction() {
	document.getElementById("demo").innerHTML = "我的第一个 JavaScript 函数";
}

function testinnerHtml() {
	document.getElementById("demo").innerHTML = "段落已修改。";
	document.write(Date());
}

function testConsole() {
	a = 5;
	b = 6;
	c = a + b;
	console.log(c);
}

function testAlert() {
	window.alert("testAlert");
}

function testVar() {
	var length;
	length = 6;
	document.getElementById("demo").innerHTML = length;
}

/**
 * 算數操作符
 */
function testArithmeticOperators() {
	document.getElementById("demo").innerHTML = (5 + 6) * 10;
}

/**
 * 调用对象属性1
 */
function testObjectPropertie1() {
	var person = {
		firstName: "John",
		lastName: "Doe",
		id: 5566
	};
	//调用firstName，lastName
	document.getElementById("demo").innerHTML =
		person.firstName + " " + person.lastName;
	document.getElementById("demo").innerHTML =
		person["firstName"] + " " + person["lastName"];
}

/**
 * 调用对象属性
 */
function testObjectPropertie2() {
	var person = {
		firstName: "张",
		lastName: "小丽",
		id: 5566
	};
	document.getElementById("demo").innerHTML =
		person["firstName"] + " " + person["lastName"];
}

/**
 * 调用person对象的方法fullName
 */
function testObjectMethod() {
	var person = {
		firstName: "张",
		lastName: "小丽",
		id: 5566,
		fullName: function() {
			return this.firstName + " " + this.lastName;
		}

	};
	document.getElementById("demo").innerHTML =
		person.fullName();
}
/**
 * 有参数的js方法
 * @param {Object} name 名字
 * @param {Object} job 工作
 */
function jsMethod(name, job) {
	alert("Welcome " + name + ", the " + job);
}

/**
 * 有返回值的js方法
 * @param {Object} a 参数1
 * @param {Object} b 参数2
 */
function jsMethod2(a, b) {
	return a * b + a / b;
}

function showReturn(a, b) {
	alert(jsMethod2(a, b))
}
/**
 * 加
 */
function add() {
	var first = document.getElementById("first").value;
	var twice = document.getElementById("twice").value;
	var result = Number(first) + Number(twice);
	setResult(result);
}
/**
 * 减
 */
function subtract() {
	var first = document.getElementById("first").value;
	var twice = document.getElementById("twice").value;
	var result = Number(first) - Number(twice);
	setResult(result);
}
/**
 * 乘
 */
function ride() {
	var first = document.getElementById("first").value;
	var twice = document.getElementById("twice").value;
	var result = Number(first) * Number(twice);
	setResult(result);
}
/**
 * 除
 */
function devide() {
	var first = document.getElementById("first").value;
	var twice = document.getElementById("twice").value;
	var result = Number(first) / Number(twice);
	setResult(result);
}
/**
 * 加 减 乘 除 结果显示
 * @param {Object} result
 */
function setResult(result) {
	document.getElementById("result").innerHTML = result;
}