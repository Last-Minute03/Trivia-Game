This is a "quick project" for practicing DOM

Regarding the Play Again button issue. that is now solved in this update.

The issue was due to a chrome extension (specefically google translate) which when translating an element that isnt native language it applys a font over it *for some reason* and regardless of wether or not the language changes (internally not by the translators action, eg: question 1 in chinese but the other questions in english) the font is still overlayed and will stay there. 

2 ways to fix the issue:

1 - Learn every language spoken so that you dont need google translate

2 - Check the fix in script.js line 214 to 222. There is an explanation there.

* I did use AI to find the error since my lack of knowledge would never have allowed me to guess that it was a chrome extension much less google translate, of them all, to be the issue