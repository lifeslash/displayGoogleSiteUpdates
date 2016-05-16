function doGet(e){
  var text = "";
  var url = 'https://sites.google.com/site/hoge/';
  var mysite = SitesApp.getSiteByUrl(url);
  var pages = mysite.getAllDescendants({
    type:SitesApp.PageType.ANNOUNCEMENTS_PAGE,
    type:SitesApp.PageType.ANNOUNCEMENTS,
    includeDrafts: false,
    includeDeleted: false
  });
  var temp;
  for(var i=0;i<10;i++){
    temp=pages[i].getLastEdited().getFullYear() + "年" + (pages[i].getLastEdited().getMonth() + 1) + "月" + pages[i].getLastEdited().getDate() + "日";
    text+="<div><a href="+pages[i].getUrl()+" target=\"_blank\">"+pages[i].getTitle()+"</a> ("+temp+")<br /></div>";
  }
  return HtmlService.createHtmlOutput(text);
}
