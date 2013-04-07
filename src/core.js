const Gio = imports.gi.Gio;

var FileCreator = function(name, execPath, iconPath) {
		
	this.name = name;
	this.execPath = execPath;
	this.iconPath = iconPath;
	
	this.ostream = null;
		
};
	
FileCreator.prototype.createDesktopFile = function(filePath) {
	
	let file = Gio.file_new_for_path(filePath);
	
	this.ostream = file.replace(
		null, // ignore entity tag 
		false, // no backup
		Gio.FileCreateFlags.NONE,
		null);
		
	this._writeln("[Desktop Entry]");
	this._writeln("Version=1.0");
	this._writeln("Type=Application");
	this._writeln("Name=" + this.name);
	this._writeln("Exec=\"" + this.execPath + "\"");
	if (this.iconPath !== "") this._writeln("Icon=" + this.iconPath);
	
	this.ostream.close(null);
				
};

FileCreator.prototype._writeln = function(line) {
	
	this.ostream.write(line + "\n", null);
	
};
