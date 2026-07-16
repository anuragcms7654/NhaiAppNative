# What is babel.js?
-- Babel is a JavaScript compiler that converts modern JavaScript (ES6+) into backward-compatible code so it can run in older browsers.
It also transforms JSX and newer syntax into standard JavaScript.
In short, it lets developers write modern code without worrying about browser compatibility.

# What is webpack?
-- Webpack is a tool that takes all your React app files (JS, CSS, images) and bundles them into a few optimized files for the browser.
It also handles dependencies and improves performance by reducing file size.
In simple terms, it prepares your React app so it runs fast in the browser.

# when to use useLayoutEffect? 
-- when we want to paint the browser on some logic/condition. as it blocks the rendering. so useEffect is mazorly used as it dont blocks the UI, 

examples useCase - 
--- Measuring DOM size/position (tooltips, modals)
--- Preventing layout flicker/jumps (accordions, animations)
--- Controlling scroll position (chat auto-scroll)
--- Reading layout → updating state (responsive UI based on width/height)
--- Integrating with DOM-heavy libraries (D3, charts)

