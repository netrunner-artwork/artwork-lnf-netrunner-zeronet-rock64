applet.wallpaperPlugin = 'org.kde.image'
applet.currentConfigGroup = new Array ("Wallpaper", "org.kde.image", "General")
applet.writeConfig("Image", "file:///usr/share/wallpapers/netrunner-zeronet/wallpaper-zeronet.png")
applet.currentConfigGroup = new Array("General");
applet.writeConfig("positions","1,7,desktop:/mycomputer.desktop,0,0,desktop:/Network,0,1,desktop:/calamares.desktop,0,3,desktop:/secure-remote.desktop,0,2")
applet.writeConfig("pressToMove",true);
applet.writeConfig("showToolbox",false);
applet.writeConfig("popups",false);
applet.writeConfig("selectionMarkers",false);
applet.writeConfig("sortMode","-1");
applet.reloadConfig()
