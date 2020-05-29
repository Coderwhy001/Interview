function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com";
  o = new Object();
  o.siteUrl = "http://www.google.com"
}

let webSite = new Object()
changeObjProperty(webSite)
console.log(webSite)