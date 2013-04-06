jsdir = $(datarootdir)/gcanaveral/js

bin_SCRIPTS = gcanaveral

EXTRA_DIST = \
	gcanaveral.in \
	main.js.in

dist_js_DATA = \
	core.js
	
nodist_js_DATA = \
	main.js
		
gcanaveral: 
	@sed -e "s#@jsdir@#$(jsdir)#g" < $(abs_top_srcdir)/src/gcanaveral.in > $@

main.js: 
	@sed -e "s#@jsdir@#$(jsdir)#g" < $(abs_top_srcdir)/src/main.js.in > $@
	
all-local: gcanaveral main.js

clean-local:
	@rm -f gcanaveral
	@rm -f main.js
