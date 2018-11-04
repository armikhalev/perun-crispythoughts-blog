---
title:  Aurelia http-fetch-client and TypeScript
layout: post
date:   2017.03.06
tags:
  - Aurelia
  - Aurelia http client
  - fetch-client
  - Http-client
  - TypeScript
---

To make Aurelia get http-fetch-client plugin to work with TypeSript, all you need is:

(Assuming use of node.js)
– Get plugin with the following command in the console:
`npm install aurelia-fetch-client whatwg-fetch --save`

– In ‘aurelia.json’ file add ‘aurelia-fetch-client’  to “dependencies” block.

Then use it like this in any model-view .ts file:

```typescript

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

export class App {

  root = 'https://jsonplaceholder.typicode.com/';
  http = new HttpClient();
  data;
  constructor() { }

  getSomeJson() {
    this.http.fetch(this.root+'users')
    .then(response => response.json())
    .then(d => {
      console.log(d);
      this.data = d[0].address.city;
    });
  }
}
```

– Then to render it in template, here the basic usage:

```html

<div class="button-bar">
  <button class="btn btn-success">Get json</button>
</div>
<h2>${data}</h2>
```

In some outdated guides for the same procedure you would find that you need to install special @typings for this to make it work with TypeScript, however, it is not the case by now, you simply use this plugin as if you use it for ESNext.

Happy coding!
