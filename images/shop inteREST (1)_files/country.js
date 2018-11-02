(function () {
	var country = {'code':'ru','id':13,'defaultLangauge':'ru'};
	
	if (!window.evidon) window.evidon = {};
	
	if (window.evidon.notice) {
		window.evidon.notice.setLocation(country);
	}
	else {
		window.evidon.location = country;
	}
})();