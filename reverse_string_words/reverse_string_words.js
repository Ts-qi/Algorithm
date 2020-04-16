// 反转字符串中单词  ----倒序排列
/**
 * 
 * 输入： “let's take Leetcode contest”
 * 输出： ”‘s’etl ekat deoCteeL tsetonc“
 * 
 * 保证空格
 */
// 方法一 
let reverseWords = (str) => {
	// 对字符串按照空格进行分割 ， 数组的元素顺序就是单词的顺序
	let arr = str.split(' ');
	// 对数组 中的元素进行反转
	let result = arr.map( item => {
		return item.split('')// m没加空格
		.reverse().join('')
	})
	return result.join(' ')
 
	// return str.split(' ').map( item => {
	// 	return item.split('').reverse().join('')
	// }).join(' ')
}

let a = reverseWords("let's go to school")
// console.log(a,'s')

/**
 *难度大的算法 如何解？
  算法的本质是寻找规律并实现
 * 如何找规律？
 发现输入 和输出的关系，寻找突破点

 * 复杂的实现怎么办？
 实现 =  程序 + 数据结构 

 */
// 计数二进制子串
// 输入： ’00110011’
// 输出： 6
// 解释： 有 6 个子串具有相同连续数量的连续 1 和 0 ； 0011， 01，1100，10，0011，01
let aa = (str)=> {
	let arr = str.split('')
	console.log(arr,'arr')
}
aa('00110011')