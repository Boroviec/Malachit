This folder intentionally contains a few duplicate image files whose names use
NFC (composed) Unicode characters.

Reason: macOS often stores filenames in NFD (decomposed) form, while GitHub
Pages (and browsers) request URLs in NFC based on the HTML source. That can
lead to "works locally, 404 in production" for files whose names contain
diacritics.

If you add new images with Polish characters, prefer ASCII-only filenames, or
ensure the exact NFC filename is present in the repo.
