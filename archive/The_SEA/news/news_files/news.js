// Created by iWeb 3.0.4 local-build-20150423

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:15,offset:new IWPoint(-0.0000,6.0000),color:'#1b4d5c',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://the-sea.com/The_SEA_-_Innovation,_Design,_Brand./news/rss.xml");}
function onPageLoad()
{loadMozillaCSS('news_files/newsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixupAllIEPNGBGs();Widget.onload();fixAllIEPNGs('../Media/transparent.gif');IMpreload('news_files','shapeimage_1','0');IMpreload('news_files','shapeimage_1','1');IMpreload('news_files','shapeimage_1','2');IMpreload('news_files','shapeimage_1','3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
