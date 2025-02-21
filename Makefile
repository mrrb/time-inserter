dist:
	mkdir -p dist
	vsce package --dependencies --out dist

package: dist

install: package
	code --install-extension dist/*.vsix | codium --install-extension dist/*.vsix

uninstall:
	code --uninstall-extension dist/*.vsix | codium --uninstall-extension dist/*.vsix

publish:
	vsce publish

clean:
	rm -rf dist

.PHONY: dist package install uninstall publish clean
