var isIsomorphic = function (s, t) {
	let visited = {}
	for (let i = 0; i < s.length; i++) {
		// see if the element s[i] already exists before in mapped [{}] if exists then 
		// check if the existing value is the same if not return false
		// if it's the same continue
		//------------ 
		if (s[i] in visited) {
			// console.log('visited', s[i], visited[s[i]])
			if (t[i] !== visited[s[i]]) return false;
		}
		visited[s[i]] = t[i]

	}
	// return true
	return visited
}

// console.log(isIsomorphic('egg', 'add'))
// console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('badc', 'baba'))