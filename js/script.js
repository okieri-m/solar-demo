"use strict";
{
	const open = document.querySelector(".header_sp-menubtn");
	const nav = document.querySelector(".header_nav");
	open.addEventListener("click", () => {
		open.classList.toggle("open");
		nav.classList.toggle("open");
	});
	// 高さを揃える要素
	const target = document.querySelectorAll(".section5_lc");
	const heightlist = [];
	// 要素の高さを全て配列に格納
	target.forEach((element) => {
		const height = element.clientHeight;
		heightlist.push(height);
	});
	//一番高さがある要素のheightを取得。
	const maxHeight = Math.max.apply(null, heightlist);
	// 要素にstyle属性を付与。一番高さのある要素のheightを揃える要素全てに指定。
	target.forEach((element) => {
		element.style.height = maxHeight + "px";
	});

<<<<<<< HEAD
	const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
	for (let i = 0; i < smoothScrollTrigger.length; i++) {
		smoothScrollTrigger[i].addEventListener("click", (e) => {
			e.preventDefault();
			let href = smoothScrollTrigger[i].getAttribute("href");
			let targetElement = document.getElementById(href.replace("#", ""));
			const rect = targetElement.getBoundingClientRect().top;
			const offset = window.scrollY;
			const gap = 85;
			const target = rect + offset - 80;
			window.scrollTo({
				top: target,
				behavior: "smooth",
			});
		});
	}

	// スクロールしたら要素をフェードイン
	let fadeInTarget = document.querySelectorAll(".fade-in");
	window.addEventListener("scroll", () => {
		for (let i = 0; i < fadeInTarget.length; i++) {
			const rect = fadeInTarget[i].getBoundingClientRect().top;
			const scroll = scrollY || document.documentElement.scrollTop;
			const offset = rect + scroll;
			const windowheight = window.innerHeight;
			if (scroll > offset - windowheight + 150) {
				fadeInTarget[i].classList.add("scroll-in");
			}
		}
	});
=======
const open = document.querySelector(".header_sp-menubtn");
const nav = document.querySelector(".header_nav");
open.addEventListener("click", ()=>{
  open.classList.toggle("open");
  nav.classList.toggle("open");

});

  // 高さを揃える要素
const target = document.querySelectorAll('.section5_lc');
const heightlist = [];
// 要素の高さを全て配列に格納
target.forEach(element => {
  const height = element.clientHeight;
  heightlist.push(height);
});
//一番高さがある要素のheightを取得。
const maxHeight = Math.max.apply(null, heightlist);
// 要素にstyle属性を付与。一番高さのある要素のheightを揃える要素全てに指定。
target.forEach(element => {
  element.style.height = maxHeight + 'px';
});

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]')
for (let i = 0; i < smoothScrollTrigger.length; i++ ){
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace("#", ""));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.scrollY
    const gap = 85;
    const target = rect + offset - 80;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}

// フェードインさせたい要素を取得して、変数に格納します
let fadeInTarget = document.querySelectorAll(".fade-in");

// ウィンドウがスクロールされるたびに実行する関数を登録します
window.addEventListener('scroll', () => {
  // フェードイン対象の各要素について処理を行います
  for (let i = 0; i < fadeInTarget.length; i++) {
    // 要素の位置や大きさに関する情報を取得します
    const rect = fadeInTarget[i].getBoundingClientRect().top;

    // 現在のスクロール位置を取得します
    const scroll = scrollY || document.documentElement.scrollTop;

    // 要素の上端と現在のスクロール位置を合計して、要素の画面上での位置を計算します
    const offset = rect + scroll;

    // ウィンドウの高さを取得します
    const windowheight = window.innerHeight;

    // 要素が特定のスクロール位置に達したかどうかをチェックします
    if (scroll > offset - windowheight + 150) {
      // 要素にフェードインのためのクラスを追加して、実際に表示を切り替えます
      fadeInTarget[i].classList.add("scroll-in");
    }
  }
});


// ずらしてフェードイン
const timelag = document.querySelectorAll(".p-timelag");
for(let i = 0; i<timelag.length; i++) {
let children = timelag[i].children;
for (let j = 0;j<children.length;j++) {
children[j].style.animationDelay = String(j*(1/children.length))+"s";
}
}
>>>>>>> eeb4daf8ff355dbcb6ab67e4ab10138256cbd8a4

	// ずらしてフェードイン
	const timelag = document.querySelectorAll(".p-timelag");
	for (let i = 0; i < timelag.length; i++) {
		let children = timelag[i].children;
		for (let j = 0; j < children.length; j++) {
			children[j].style.animationDelay =
				String(j * (1 / children.length)) + "s";
		}
	}

	const lagchild = document.querySelectorAll(".c-timelag");
	let options5 = {};
	const observer5 = new IntersectionObserver(callback5, options5);
	lagchild.forEach(function (value) {
		observer5.observe(value);
	});
	function callback5(entries) {
		entries.forEach(function (value) {
			if (value.isIntersecting) {
				value.target.classList.add("timelag-fadeup");
			}
		});
	}
	const agreeCheckbox = document.getElementById("agree");
	const submitBtn = document.getElementById("submit");
	function change() {
		let element;
		if (agreeCheckbox.checked) {
			element = submitBtn;
			element.disabled = false;
		} else {
			element = submitBtn;
			element.disabled = true;
		}
	}
	agreeCheckbox.onchange = change;
}
