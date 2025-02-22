dist: package

package:
	mkdir -p dist
	npm run package
	vsce package --dependencies --out dist

install: package
	code --install-extension dist/*.vsix | codium --install-extension dist/*.vsix

uninstall:
	code --uninstall-extension dist/*.vsix | codium --uninstall-extension dist/*.vsix

publish:
	vsce publish

clean:
	rm -rf dist

.PHONY: dist package install uninstall publish clean
