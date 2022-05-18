// Created by iWeb 3.0.4 local-build-20150423

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:15,offset:new IWPoint(-0.0000,6.0000),color:'#1b4d5c',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Archive_files/ArchiveMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');Widget.onload();IMpreload('Archive_files','shapeimage_4','0');IMpreload('Archive_files','shapeimage_4','1');IMpreload('Archive_files','shapeimage_4','2');IMpreload('Archive_files','shapeimage_4','3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
