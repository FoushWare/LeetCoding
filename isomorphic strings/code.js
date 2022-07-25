var isIsomorphic = function (s, t) {
	let mapST = {}
	let mapTS = {}
	for (let i = 0; i < s.length; i++) {
		if (s[i] in mapST) {
			if (t[i] !== mapST[s[i]]) return false;
		}
		mapST[s[i]] = t[i]

	}

	for (let i = 0; i < t.length; i++) {
		if (t[i] in mapTS) {
			if (s[i] !== mapTS[t[i]]) return false;
		}
		mapTS[t[i]] = s[i]

	}
	return mapST && mapTS ? true : false
}

console.log(isIsomorphic('egg', 'add'))
// console.log(isIsomorphic('foo', 'bar'))
// console.log(isIsomorphic('badc', 'baba'))TS