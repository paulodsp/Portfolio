// Created by iWeb 3.0.4 local-build-20150423

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id1" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="804" height="629" style="height: 629px; left: 230px; position: absolute; top: 194px; width: 804px; z-index: 1; "><param name="src" value="Media/ideaboardweb-desktop.m4v" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id1" type="video/quicktime" width="804" height="629" style="height: 629px; left: 230px; position: absolute; top: 194px; width: 804px; z-index: 1; "><param name="src" value="Ideaboard_files/ideaboardweb-4.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/ideaboardweb-desktop.m4v"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id1" type="video/quicktime" width="804" height="629" data="Media/ideaboardweb-desktop.m4v" style="height: 629px; left: 230px; position: absolute; top: 194px; width: 804px; z-index: 1; "><param name="src" value="Media/ideaboardweb-desktop.m4v"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:15,offset:new IWPoint(-0.0000,6.0000),color:'#1b4d5c',opacity:0.750000}),shadow_0:new IWShadow({blurRadius:15,offset:new IWPoint(-0.0000,6.0000),color:'#1b4d5c',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Ideaboard_files/IdeaboardMoz.css')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('Ideaboard_files','shapeimage_2','0');IMpreload('Ideaboard_files','shapeimage_2','1');IMpreload('Ideaboard_files','shapeimage_2','2');IMpreload('Ideaboard_files','shapeimage_2','3');IMpreload('Ideaboard_files','shapeimage_2','4');IMpreload('Ideaboard_files','shapeimage_4','0');IMpreload('Ideaboard_files','shapeimage_4','1');IMpreload('Ideaboard_files','shapeimage_4','2');IMpreload('Ideaboard_files','shapeimage_4','3');IMpreload('Ideaboard_files','shapeimage_4','4');applyEffects()}
