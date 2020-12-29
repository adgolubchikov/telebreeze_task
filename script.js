let db = [];

const defaultPage = {
			"id":0,
			"menu_title":"Default page",
			"menu_subtitle":"Default subtitle",
			"content":{
				"header":"Default header",
				"short_text":"Default short text",
				"full_text":"Default full text. Default full text. Default full text. Default full text. Default full text. Default full text. ",
				"image_url":"default.gif",
				"full_text_btn_title":"Default button"
			}
		};

fetch('http://localhost:8000/data.json').then(response => response.json()).then(data => {
	db=data;
	renderMenu();
	openPage('default');
});

function openPage(pageId) {
	let page;
	if (pageId=='default') {
		page=defaultPage;
	}
	else {
		page=db.menu.filter(item => item.id == pageId)[0];
	}
	
	return page;
}
function renderMenu() {
	let i;
	for (i=0; i<db.menu.length;i++) {
	let item=document.createElement('div');
	item.className='menu-item';
	item.innerHTML='';
	document.querySelector('#menu').appendChild(item);	
	}
}

function openMenu() {
	document.querySelector('#menu').className='opened';
}

function closeMenu() {
	document.querySelector('#menu').className='closed';
}
