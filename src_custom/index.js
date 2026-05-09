import react_dom from 'react-dom/client';
import React from 'react';

let reactHtml = react_dom.createRoot(document.getElementById('root'));
reactHtml.render(<React.Fragment><h2>Hello</h2><button>Submit</button></React.Fragment>);

let creatEl = React.createElement('a',{className:'link'},'Click Me');
reactHtml.render(creatEl);

