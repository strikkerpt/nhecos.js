Nhecos.js
=========

This is a dependency that will generate a random nhecos on any image.

## Installation

### NPM

```bash
npm install --save nhecos.js
```

### Usage

In order to generate a nhecos you must pass your target image into the class by doing the follow:

```javascript
var nhecos = new Nhecos('IMAGE HERE');
```

The class will return a promise with a base64 that you can use wherever you like, check the example below:

```javascript
nhecos.then(function(base64) {
  document.getElementsByClassName('thumbnail')[0].setAttribute('src', base64);
})
```

### Options

Options will be added soon! For now this is a MVP.


LICENSE
=======

The MIT License (MIT)

Copyright (c) 2018 Sinésio Couceiro.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.