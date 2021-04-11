(function () {
	if (window.console && window.console.log) {
		const log = (...args) => setTimeout(console.log.bind(console, ...args))
		log(
			'\n %c Badboy %c https://jhedev96.github.io \n',
			'color:#FFFFFB;background:#ffa628;padding:5px 0;border-radius:.5rem 0 0 .5rem;',
			'background: #efefef;padding:5px 0 5px;border-radius:0 .5rem .5rem 0;'
		)
		log(
			`%cPage load consumed ${(
				Math.round(performance.now() * 100) /
				100 /
				1000
			).toFixed(2)}s`,
			'background: #fff;color: #333;text-shadow: 0 0 2px #eee, 0 0 3px #eee, 0 0 3px #eee, 0 0 2px #eee, 0 0 3px #eee;'
		)
		if (!localStorage.getItem('access')) {
			localStorage.setItem('access', new Date().getTime())
		}
		let _access = new Date(Number.parseInt(localStorage.getItem('access')))
		let access = `${_access.getFullYear()}year${_access.getMonth() +
			1}month${_access.getDate()}day`
		let i = 0
		if (!localStorage.getItem('hit')) {
			localStorage.setItem('hit', 0)
		} else {
			i = Number.parseInt(localStorage.getItem('hit'))
		}
		localStorage.setItem('hit', ++i)
		log(
			`This is the ${i}th time you have opened the console on this site since ${access}. What secret do you want to know~`
		)
		const img = `https://cdn.jsdelivr.net/gh/Tomotoes/images/console/${i % 5}.jpg`
		log('%c ', '\n  background:url('.concat(img, ') no-repeat center;\n  background-size:200px;\n  margin:5px 0;\n  padding:0 0 162px 200px;\n  border-radius:10px;\n  overflow:hidden;\n  '))
	}
})()