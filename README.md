## selector-alias

Short alias for `querySelectorAll`

### API

##### `Selector.$(elementId)`


##### `Selector.$$(selector, [startNode])`


### Usage

```js
var $ = Selector.$,
    $$ = Selector.$$;

...

var btns = $$('ul > li .btn', parentNode);
```


#### IE\<9 Supports 

If you should supports old browsers, import sizzle or jquery on your page.
   
```html
<!--[if lt IE 9]>
<script src="sizzle.js"></script>
<![endif]-->

<script>
var elements = Selector.$$('.works .with .sizzle');
...
</script>
```
