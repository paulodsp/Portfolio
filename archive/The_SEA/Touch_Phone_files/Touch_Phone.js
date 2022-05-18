// Created by iWeb 3.0.4 local-build-20150423

function createMediaStream_id1()
{return IWCreatePhotocast("http://the-sea.com/The_SEA_-_Innovation,_Design,_Brand./Touch_Phone_files/rss.xml",false);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://the-sea.com/The_SEA_-_Innovation,_Design,_Brand.',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://the-sea.com/The_SEA_-_Innovation,_Design,_Brand.',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(173,173),new IWSize(173,30),new IWSize(227,218),27,27,0,new IWSize(10,10)),new IWPhotoFrame([IWCreateImage('Touch_Phone_files/Formal_inset_01.png'),IWCreateImage('Touch_Phone_files/Formal_inset_02.png'),IWCreateImage('Touch_Phone_files/Formal_inset_03.png'),IWCreateImage('Touch_Phone_files/Formal_inset_06.png'),IWCreateImage('Touch_Phone_files/Formal_inset_09.png'),IWCreateImage('Touch_Phone_files/Formal_inset_08.png'),IWCreateImage('Touch_Phone_files/Formal_inset_07.png'),IWCreateImage('Touch_Phone_files/Formal_inset_04.png')],null,0,0.400000,1.000000,1.000000,1.000000,1.000000,14.000000,14.000000,14.000000,14.000000,191.000000,262.000000,191.000000,262.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,187),url:'Touch_Phone_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Touch_Phone_files/stroke_1.png'},{rect:new IWRect(1,-1,374,2),url:'Touch_Phone_files/stroke_2.png'},{rect:new IWRect(375,-1,3,2),url:'Touch_Phone_files/stroke_3.png'},{rect:new IWRect(375,1,3,187),url:'Touch_Phone_files/stroke_4.png'},{rect:new IWRect(375,188,3,2),url:'Touch_Phone_files/stroke_5.png'},{rect:new IWRect(1,188,374,2),url:'Touch_Phone_files/stroke_6.png'},{rect:new IWRect(-1,188,2,2),url:'Touch_Phone_files/stroke_7.png'}],new IWSize(377,189)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:15,offset:new IWPoint(-0.0000,6.0000),color:'#1b4d5c',opacity:0.750000}),shadow_1:new IWShadow({blurRadius:15,offset:new IWPoint(-0.0000,6.0000),color:'#1b4d5c',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Touch_Phone_files/Touch_PhoneMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixupAllIEPNGBGs();Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('Touch_Phone_files','shapeimage_2','0');IMpreload('Touch_Phone_files','shapeimage_2','1');IMpreload('Touch_Phone_files','shapeimage_2','2');IMpreload('Touch_Phone_files','shapeimage_2','3');IMpreload('Touch_Phone_files','shapeimage_2','4');IMpreload('Touch_Phone_files','shapeimage_4','0');IMpreload('Touch_Phone_files','shapeimage_4','1');IMpreload('Touch_Phone_files','shapeimage_4','2');IMpreload('Touch_Phone_files','shapeimage_4','3');IMpreload('Touch_Phone_files','shapeimage_4','4');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
