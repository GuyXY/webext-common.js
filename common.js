//returns the default storage object
function getStorage() {
	return browser.storage.sync || browser.storage.local;
}
