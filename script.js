let db = [];

const defaultPage = {
	id: 0,
	menu_title: "Default page",
	menu_subtitle: "Default subtitle",
	content: {
		header: "Default header",
		short_text: "Default short text",
		full_text: "Default full text. Default full text. Default full text. Default full text. Default full text. Default full text. ",
		image_url: "default.gif",
		full_text_btn_title: "Default button"
	}
};

fetch('http://localhost:8000/data.json').then(response => response.json()).then(data => {
	db = data;
	renderMenu();
	openPage('default');
});

function openPage(pageId) {
	closeMenu();
	let page;
	if (pageId == 'default') {
		page = defaultPage;
	} else {
		page = db.menu.filter(item => item.id == pageId)[0];
	}
	document.querySelector('#header').innerHTML = (page.content.header !== undefined) ? page.content.header : defaultPage.content.header;
	document.querySelector('#short').innerHTML = (page.content.short_text !== undefined) ? page.content.short_text : defaultPage.content.short_text;
	document.querySelector('#full').innerHTML = (page.content.full_text !== undefined) ? page.content.full_text : defaultPage.content.full_text;
	document.querySelector('#button > span').innerHTML = (page.content.full_text_btn_title !== undefined) ? page.content.full_text_btn_title : defaultPage.content.full_text_btn_title;
	document.querySelector('img').src = (page.content.image_url !== undefined) ? page.content.image_url : defaultPage.content.image_url;

}

function renderMenu() {
	let i;
	for (i = 0; i < db.menu.length; i++) {
		let item = document.createElement('div');
		item.className = 'menu-item';
		item.innerHTML = '<div id="link" onclick="openPage(' + ((db.menu[i].id !== undefined) ? db.menu[i].id : '"default"') + ')">' +
			((db.menu[i].menu_title !== undefined) ? db.menu[i].menu_title : defaultPage.menu_title) + '</div>' +
			'<div id="description">' + ((db.menu[i].menu_subtitle !== undefined) ? db.menu[i].menu_subtitle : defaultPage.menu_subtitle) + '</div>';
		document.querySelector('#menu').appendChild(item);
	}
}

function openMenu() {
	document.querySelector('#menu').className = 'opened';
}

function closeMenu() {
	document.querySelector('#menu').className = 'closed';
}
