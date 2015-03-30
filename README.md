# Notes

- Use OOCSS, SMACSS, BEM where possible
- use dashes for all class names, with the exception of the module name
- Name spacing should be at component level
- EG .module_name-component-part-state {}
- Images should use dashes too in their naming system
- We are using autoprefixer so write css3 properties as W3C spec.
- Give everything a class name (where possible)
- Never style IDs and .js- classes

using [include-media](https://github.com/eduardoboucas/include-media) for media queries
`@include media(">=tablet", "<desktop") {}`
really like the syntax. 

Use `@include spread(property, startValue, endValue)` to scale property values over the breakpoints - mobile first. 
