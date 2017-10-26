webpackJsonp([565],{3957:function(module,exports){module.exports='/* Fonts */\n$fonts-fallback: "Helvetica Neue", "Helvetica", "Arial", "メイリオ, meiryo", "ヒラギノ角ゴ pro w3", "hiragino kaku gothic pro", "sans-serif";\n\n$FontUltraThin: "HelveticaNeueW01-UltLt", "HelveticaNeueW02-UltLt", "HelveticaNeueW10-25UltL", $fonts-fallback;\n$FontThin: "HelveticaNeueW01-Thin", "HelveticaNeueW02-Thin", "HelveticaNeueW10-35Thin", $fonts-fallback;\n$FontLight: "HelveticaNeueW01-45Ligh", "HelveticaNeueW02-45Ligh", "HelveticaNeueW10-45Ligh", $fonts-fallback;\n$FontRoman: "HelveticaNeueW01-55Roma", "HelveticaNeueW02-55Roma", "HelveticaNeueW10-55Roma", $fonts-fallback;\n$FontMedium: "HelveticaNeueW01-65Medi", "HelveticaNeueW02-65Medi", "HelveticaNeueW10-65Medi", $fonts-fallback;\n$FontBold: "HelveticaNeueW01-75Bold", "HelveticaNeueW02-75Bold", "HelveticaNeueW10-75Bold", $fonts-fallback;\n\n\n@mixin FontUltraThin() {\n\tfont-family: $FontUltraThin;\n}\n\n@mixin FontThin() {\n\tfont-family: $FontThin;\n}\n@mixin FontLight() {\n\tfont-family: $FontLight;\n}\n\n@mixin FontRoman() {\n\tfont-family: $FontRoman;\n}\n\n@mixin FontMedium() {\n\tfont-family: $FontMedium;\n}\n\n@mixin FontBold() {\n\tfont-family: $FontBold;\n}\n\n/* New swatches! */\n\n$D10: #162d3d;   // Main input text, titles\n$D20: #32536A;   // Titles, texts\n$D30: #577083;   // Texts\n$D40: #7a92a5;   // Dividers, texts\n$D50: #b6c1cd;   // Dividers, texts\n$D55: #cbd3dc;   // Disabled button - new version - naming not final\n$D60: #dfe5eb;   // Dividers\n$D70: #f0f4f7;   // Page background, dividers\n$D80: #ffffff;   // Content box background\n\n$B00: #2b81cb;   // Buttons\n$B05: #308ddd;   // CTA\n$B10: #3899ec;   // Main action color, active, buttons\n$B20: #4eb7f5;   // Hover for elements with B10, buttons\n$B25: #A1D7FB;\n$B27: #b3e0fb;\n$B30: #c1e4fe;   // Notifications\n$B40: #daeffe;   // Dividers, table selected\n$B50: #eaf7ff;   // Dividers\n$B60: #f4fafe;   // Table hover\n\n$GR10: #c8c8c8;  // Disabled buttons\n$GR20: #dadada;  // Disabled fields\n$GR30: #f1f1f1;  // Disabled background\n$GR40: #cbd3dc;  // Disabled button - new version - naming not final\n$GR50: #eff1f2;\n$GR60: #a3abb0;\t // placeholder for InputArea theme="amaterial"\n\n$P00: #8e21b1;\n$P10: #aa4dc8;   // Wix premium\n$P20: #cd68ed;\n$P30: #e5c9ee;\n$P40: #eedbf4;\n\n$O00: #ea5f0e;\n$O10: #fb7d33;\n$O20: #ff9a48;\n\n$R00: #d6453d;\n$R05: #d8504c;   // CTA\n$R10: #ee5951;   // Errors, CTA hover\n$R20: #ff6666;   // Notifications\n$R30: #ffd7d7;   // Notifications\n$R40: #ffe1e1;\n\n$G00: #44823f;\n$G05: #61ad5a;   // CTA\n$G10: #60bc57;   // CTA hover\n$G20: #80c979;   // Notifications\n$G30: #c9eebc;   // Notifications\n\n$Y00: #c68801;\n$Y05: #eda200;   // CTA\n$Y10: #fdb10c;   // CTA hover\n$Y20: #fac249;   // Notifications\n$Y30: #fef0ba;   // Notifications\n$Y40: #fef4cd;\n\n$WR00: #e05050;  // Wix Restaurant red\n\n$paletteB1  : #3899EC;\n$paletteB2  : #4EB7F5;\n$paletteB3  : #7FCCF7;\n$paletteB4  : #D3EDFF;\n$paletteB5  : #EAF7FF;\n\n$paletteD1  : #162D3D;\n$paletteD2  : #2B5672;\n$paletteD3  : #7A92A5;\n$paletteD4  : #D9E1E8;\n$paletteD5  : #F0F3F5;\n$paletteD6  : #FFFFFF;\n\n$paletteE1  : #2B81CB;\n$paletteE2  : #0D487F;\n$paletteE3  : rgba(255,255,255,0.96);\n$paletteE4  : #2D4150;\n$paletteE5  : #B1DDf8;\n$paletteE6  : #B6C1CD;\n$paletteE7  : #5EFFFF;\n$paletteE8  : #18D2DE;\n\n$paletteP1  : #AA4DC8;\n$paletteP2  : #BB71D3;\n$paletteP3  : #E5C9EE;\n$paletteP4  : #EEDBF4;\n\n$paletteG1  : #60BC57;\n$paletteG2  : #80C979;\n$paletteG3  : #CFEBCC;\n$paletteG4  : #DFF2DD;\n\n$paletteO1  : #FB7D33;\n$paletteO2  : #FC975C;\n$paletteO3  : #FED8C1;\n$paletteO4  : #FEE5D6;\n\n$paletteY1  : #FFC233;\n$paletteY2  : #FFCE5C;\n$paletteY3  : #FFEDC1;\n$paletteY4  : #FFF3D6;\n\n$paletteR1  : #EE5951;\n$paletteR2  : #F1726B;\n$paletteR3  : #FACDCA;\n$paletteR4  : #FCE6E5;\n\n$BMCounter  : #F4553F;\n'}});