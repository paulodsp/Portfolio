// Created by iWeb 3.0.4 local-build-20150423

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:2.00}),shadow_0:new IWShadow({blurRadius:15,offset:new IWPoint(-0.0000,6.0000),color:'#1b4d5c',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('who_we_are_files/who_we_areMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('who_we_are_files','shapeimage_4','0');IMpreload('who_we_are_files','shapeimage_4','1');IMpreload('who_we_are_files','shapeimage_4','2');IMpreload('who_we_are_files','shapeimage_4','3');applyEffects()}
