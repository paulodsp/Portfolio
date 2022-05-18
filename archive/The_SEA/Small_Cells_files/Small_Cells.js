// Created by iWeb 3.0.4 local-build-20150423

function createMediaStream_id1()
{return IWCreatePhotocast("http://the-sea.com/The_SEA_-_Innovation,_Design,_Brand./Small_Cells_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://the-sea.com/The_SEA_-_Innovation,_Design,_Brand.',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://the-sea.com/The_SEA_-_Innovation,_Design,_Brand.',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(4,new IWSize(107,107),new IWSize(107,30),new IWSize(122,152),27,27,0,new IWSize(14,15)),new IWPhotoFrame([IWCreateImage('Small_Cells_files/Modern_C_TL.png'),IWCreateImage('Small_Cells_files/Modern_S_T.png'),IWCreateImage('Small_Cells_files/Modern_C_TR.png'),IWCreateImage('Small_Cells_files/Modern_S_R.png'),IWCreateImage('Small_Cells_files/Modern_C_BR.png'),IWCreateImage('Small_Cells_files/Modern_S_B.png'),IWCreateImage('Small_Cells_files/Modern_C_BL.png'),IWCreateImage('Small_Cells_files/Modern_S_L.png')],null,2,0.375000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:15,offset:new IWPoint(-0.0000,6.0000),color:'#1b4d5c',opacity:0.750000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,315),url:'Small_Cells_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Small_Cells_files/stroke_1.png'},{rect:new IWRect(1,-1,448,2),url:'Small_Cells_files/stroke_2.png'},{rect:new IWRect(449,-1,2,2),url:'Small_Cells_files/stroke_3.png'},{rect:new IWRect(449,1,2,315),url:'Small_Cells_files/stroke_4.png'},{rect:new IWRect(449,316,2,2),url:'Small_Cells_files/stroke_5.png'},{rect:new IWRect(1,316,448,2),url:'Small_Cells_files/stroke_6.png'},{rect:new IWRect(-1,316,2,2),url:'Small_Cells_files/stroke_7.png'}],new IWSize(450,317)),shadow_2:new IWShadow({blurRadius:15,offset:new IWPoint(-0.0000,6.0000),color:'#1b4d5c',opacity:0.750000}),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Small_Cells_files/Small_CellsMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixupAllIEPNGBGs();Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('Small_Cells_files','shapeimage_3','0');IMpreload('Small_Cells_files','shapeimage_3','1');IMpreload('Small_Cells_files','shapeimage_3','2');IMpreload('Small_Cells_files','shapeimage_3','3');IMpreload('Small_Cells_files','shapeimage_3','4');IMpreload('Small_Cells_files','shapeimage_5','0');IMpreload('Small_Cells_files','shapeimage_5','1');IMpreload('Small_Cells_files','shapeimage_5','2');IMpreload('Small_Cells_files','shapeimage_5','3');IMpreload('Small_Cells_files','shapeimage_5','4');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
