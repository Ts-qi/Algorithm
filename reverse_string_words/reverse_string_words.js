// 反转字符串中单词  ----倒序排列
/**
 * 
 * 输入： “let's take Leetcode contest”
 * 输出： ”‘s’etl ekat deoCteeL tsetonc“
 * 
 * 保证空格
 */
let reverseWords = (str) => {
	if(!str) return;
	// 对字符串按照空格进行分割 ， 数组的元素顺序就是单词的顺序
	let arr = str.split(' ');
	// 对数组 中的元素进行反转
	let result = arr.map( item => {
		return item.split('')// m没加空格
		.reverse().join('')
	})
	return result.join(' ')
}
let a = reverseWords('my name is tangqi ')
console.log(a)
// 计数二进制子串
