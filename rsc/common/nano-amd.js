var defines = [];

function define(name, imports, func) {
    defines.push({
        solved: !1,
        name,
        imports,
        func,
        exports: {}
    })
}

function path_resolve(path) {
    var r = "";
    do {
    	r = path;
    	path = r.replace(/\\/g, "/")
        	.replace(/\/\//g, "/")
        	.replace(/\/\.\//g, "/")
        	.replace(/\\[A-Za-z.]+\\\.\.\\/g, "/");
		while (path.indexOf("/") == 0 || path.indexOf('.'))
			path = path.substr(1);
		while (path.lastIndexOf("/") == path.length - 1)
			path = path.substr(0, path.length - 1);
    } while (path != r);
    return r;
}

function defines_require(base, name) {
    name = path_resolve(base + "/../" + name);
    for (var i = 0, e = defines.length; i < e; i++)
        if (defines[i].name == name && defines[i].solved)
        	return defines[i].exports;
    return null
}

function defines_solve() {
    var solveds = false;//e
    do {
    	solveds = true;
        for (i = 0, e = defines.length; i < e; i++) {
            if (!defines[i].solved) {
            	var r = [];
            	var ii = 0,
            		ie = defines[i].imports.length;
            	var sub_solveds = true;
                for (;ii < ie; ii++) {
                    var cur = defines[i].imports[ii];
                    if (cur == "require")
                    	r.push(function() {
                       		defines_require(defines[i].name, ...arguments)
                    	});
                    else if (cur == "exports")
                    	r.push(defines[i].exports);
                    else {
                    	var imp =  defines_require(defines[i].name, cur);
                        if (imp == null) {
                            solveds = false;
                            sub_solveds;
                            break
                        }
                        r.push(imp)
                    }
                }
                if (ii == ie  && sub_solveds) {
               		defines[i].func(...r);
               		defines[i].solved = true;
               	}
            }
        }
    } while (!solveds)
}
window.pathResolve = path_resolve;