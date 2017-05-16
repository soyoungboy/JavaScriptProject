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

/**
 * 获取字符串长度
 * @param {Object} input
 */
function getStringLength() {
	var input = document.getElementById("input").value;
	var stringlength = input.length;
	alert(input + "文字长度为" + stringlength);
}
/**
 * 可以使用 new 关键字将字符串定义为一个对象： var firstName = new String("John")
 */
function newString() {
	var x = "John"; // x是一个字符串
	var y = new String("John"); // y是一个对象
	document.getElementById("demo").innerHTML = typeof x + " " + typeof y;
}

/**
 * 条件语句
 */
function conditionalStatements() {
	var x = "";
	var time = new Date().getHours();
	if (time < 20) {
		x = "Good day";
	} else {
		x = "Good evening";
	}
	document.getElementById("demo").innerHTML = x;
}

/**
 * switch语句
 */
function switchconditionalStatements() {
	var x;
	var d = new Date().getDay();
	switch (d) {
		case 1:
			x = "今天是星期一";
			break;
		case 2:
			x = "今天是星期二";
			break;
		case 3:
			x = "今天是星期三";
			break;
		case 4:
			x = "今天是星期四";
			break;
		case 5:
			x = "今天是星期五";
			break;
		default:
			x = "今天是周末";
			break;
	}
	document.getElementById("demo").innerHTML = x;
}
/**
 * 循环语句
 */
function loop() {
	document.write("----------for循环遍历-----------" + "<br>");
	cars = ["BMW", "Volvo", "Saab", "Ford"];
	for (var i = 0; i < cars.length; i++) {
		document.write(cars[i] + "<br>");
	}
	document.write("---------------------" + "<br>");
	var i = 0,
		len = cars.length;
	for (; i < len;) {
		document.write(cars[i] + "<br>");
		i++;
	}
	document.write("----------for/in 语句循环遍历对象的属性-----------" + "<br>");
	var x;
	var txt = "";
	var person = {
		fname: "Bill",
		lname: "Gates",
		age: 56
	};
	//通过for in 进行对象遍历
	for (x in person) {
		//字符串拼接，通过+
		txt = txt + person[x];
	}
	document.write(txt + "<br>");
	document.write("----------while循环语句----------" + "<br>");
	var x = "",
		i = 0;
	while (i < 5) {
		x = x + "该数字为 " + i + "<br>";
		i++;
	}
	document.write(x + "<br>");
	document.write("----------do while循环语句----------" + "<br>");
	var x = "",
		i = 0;
	do {
		x = x + "the number is " + i + "<br>";
		i++;
	}
	while (i < 5)
	document.write(x + "<br>");
}

function breakAndContinue() {
	var x = "",
		i = 0;
	document.write("----------break语句-----------" + "<br>");
	for (i = 0; i < 10; i++) {
		//后面的不会执行
		if (i == 3) {
			break;
		}
		x = x + "该数字为 " + i + "<br>";
	}
	document.write(x + "<br>");
	document.write("----------continue语句-----------" + "<br>");
	var x = "",
		i = 0;
	for (i = 0; i < 10; i++) {
		//跳过本次循环，执行接下来的循环
		if (i == 3) {
			continue;
		}
		x = x + "该数字为 " + i + "<br>";
	}
	document.write(x + "<br>");
	document.write("----------标签语句-----------" + "<br>");
	outerloop:
		for (var i = 0; i < 10; i++) {
			innerloop: for (var j = 0; j < 10; j++) {
				if (j > 3) {
					break;
				}
				if (i == 2) {
					break innerloop;
				}
				if (i == 4) {
					break outerloop;
				}
				document.write("i=" + i + " j=" + j + "" + "<br>");
			}
		}
}

function typeConversion(){
		document.getElementById("demo").innerHTML =
				typeof "john" + "<br>" +
				typeof 3.14 + "<br>" +
				typeof NaN + "<br>" +
				typeof false + "<br>" +
				typeof [1, 2, 3, 4] + "<br>" +
				typeof {
					name: 'john',
					age: 34
				} + "<br>" +
				typeof new Date() + "<br>" +
				typeof

			function() {} + "<br>" +
			typeof myCar + "<br>" +
				typeof null;
			//  constructor 属性
			document.getElementById("demo1").innerHTML =
				"john".constructor + "<br>" +
				3.14.constructor + "<br>" +
				NaN.constructor + "<br>" +
				false.constructor + "<br>" + [1, 2, 3, 4].constructor + "<br>" + {
					name: 'john',
					age: 34
				}.constructor + "<br>" +
				new Date().constructor + "<br>" +
				function() {}.constructor + "<br>";
			//JavaScript 类型转换
			//全局方法 String() 可以将数字转换为字符串。该方法可用于任何类型的数字，字母，变量，表达式。
			document.getElementById("demo2").innerHTML =
				String(123) + "<br>" +
				String(100 + 121) + "<br>" +
				String(true) + "<br>" +
				String(false) + "<br>" +
				String(Date()) + "<br>" +
				(145).toString() + "<br>" +
				(234 + 345).toString() + "<br>" +
				Date().toString();
			//字符串转换成数字
			document.getElementById("demo3").innerHTML =
				Number("3.14") + "<br>" + // 返回 3.14
				Number(" ") + "<br>" + // 返回 0 
				Number("") + "<br>" + // 返回 0
				Number(new Date()) + "<br>" + //日期转化为数字
				Number(true) + "<br>" + //布尔值转化成数字
				Number(false) + "<br>" +
				Number("99 88") + "<br>"; // 返回 NaN
			var y = "5";
			var x = +y;
			//一元运算符
			document.getElementById("demo4").innerHTML =
				typeof y + "<br>" + typeof x;
			//自动转换类型
			document.getElementById("demo5").innerHTML =
				(5 + null) + "<br>" + // 返回 5         null 转换为 0
				("5" + null) + "<br>" + // 返回"5null"   null 转换为 "null"
				("5" + 1) + "<br>" + // 返回 "51"      1 转换为 "1"  
				("5" - 1) + "<br>"; // 返回 4         "5" 转换为 5
}
