AC_INIT([gcanaveral], [0.1.1], [tbollmeier@web.de])

AM_INIT_AUTOMAKE([1.11])
AM_SILENT_RULES([yes])

# Checks for programs.

AC_CHECK_PROG([GJS_FOUND], [gjs], [yes], [no])
if test $GJS_FOUND = "no"; then
	AC_MSG_ERROR([GNOME JavaScript (gjs) is required for GCanaveral])
fi

# Checks for libraries.

# Checks for header files.

# Checks for typedefs, structures, and compiler characteristics.

# Checks for library functions.

AC_OUTPUT([
Makefile
src/Makefile
ui/Makefile
])
