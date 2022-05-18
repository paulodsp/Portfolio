// Created by iWeb 3.0.4 local-build-20150423

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:15,offset:new IWPoint(-0.0000,6.0000),color:'#1b4d5c',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('contact_us_files/contact_usMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('contact_us_files','shapeimage_5','0');IMpreload('contact_us_files','shapeimage_5','1');IMpreload('contact_us_files','shapeimage_5','2');IMpreload('contact_us_files','shapeimage_5','3');applyEffects()}
