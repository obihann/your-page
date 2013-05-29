require "susy"
require "rgbapng"

css_dir = "public/css"
sass_dir = "app/scss"
images_dir ="public/images"
javascript_dir = "public/js"
output_style = (environment == :production) ? :compressed : :expanded
relative_assets = true
fonts_dir ="public/fonts"