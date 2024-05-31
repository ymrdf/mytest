


/**
 * 题一
 * 写一个函数,可以将简单xml字符串转化成对象
 * 示例 1：
  * 输入："<a><b>1</b></a>"
  * 输出：{a:{b:"1"}}

* 示例 2：
* 输入："<a><b><c>1</c></b><d>test</d></a>"
* 输出：{a:{b:{c:"1"}},d:"test"}

* 提示：
* xml只有一个根节点
* xml的元素节点的子节点只能是文本节点或元素节点,并且不存在属性节点注释节点等其它类型节点
 */

/**
 * 题二
编写一个简单的immutable set函数，其功能是修改对象或数组中指定路径的值。

函数定义如下：
function set(obj: object | array, path: Array<string | number>, value: any)

参数说明：
- obj：代表一个任意数据对象或数组。
- path：一个由字符串或数字组成的数组，指定了要修改值的路径。
- value：要设置的新值。

函数返回一个新对象或数组，与原对象相比，新对象在指定路径处的值改为了value。同时，新对象不改变非path上的所有对象的引用，与原对象保持一致。

注意：set函数不会改变原对象; 数据中的对象都为Plain Object
 */


/**
 * 题三
 * 写任意一个时间复杂度为O(n*logn)的数组排序函数
 */

/**
 * 题四
 * 实现一个简单的模板引擎,
 * 示例1:
 * render('this school have <%= roomList.length%> rooms', {roomList:[{name:B,tableNum:10},{name:C,tableNum:10}]})  => 'this school have 2 rooms'
 * 示例2:
 * render('the second room C have <%= roomList[2].tableNum%> tables',  {roomList:[{name:B,tableNum:10},{name:C,tableNum:10}])  => 'the second room C have 10 tables'
 */





/**
 * 基于观察者模式实现一个Event类
 */


/**
 * 写出防抖函数和节流函数
 */


/**
* 1.1
* 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
* 有效字符串需满足：
* 左括号必须用相同类型的右括号闭合。
* 左括号必须以正确的顺序闭合。
* 每个右括号都有一个对应的相同类型的左括号。
 
* 示例 1：
* 输入：s = "()"
* 输出：true

* 示例 2：
* 输入：s = "()[]{}"
* 输出：true

* 示例 3：
* 输入：s = "(]"
* 输出：false

* 提示：
* 1 <= s.length <= 104
* s 仅由括号 '()[]{}' 组成
 */
