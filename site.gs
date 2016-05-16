function getSiteAllPages(){
  var url = 'https://sites.google.com/site/lifeslash7830/';
  var mysite = SitesApp.getSiteByUrl(url);
  var pages = mysite.getAllDescendants({
    type:SitesApp.PageType.ANNOUNCEMENTS_PAGE,
    type:SitesApp.PageType.ANNOUNCEMENTS,
    includeDrafts: false,
    includeDeleted: true
  });
  var text;
  for(var i=0;i<pages.length;i++){
    text=pages[i].getLastEdited().getFullYear() + "年" + (pages[i].getLastEdited().getMonth() + 1) + "月" + pages[i].getLastEdited().getDate() + "日";
    Logger.log(i+"title:"+pages[i].getTitle()+"(" + pages[i].getUrl() + ")" +"\ndate:"+text);
  }
}
