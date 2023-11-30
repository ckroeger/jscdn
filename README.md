# jscdn
just serves js content


## Example

### Input 
````js
const script = document.createElement('script');
script.src = 'any.js';
script.async = true;
script.type = 'module';
script.onload = () => {
  console.log('Script loaded successfuly');
};
script.onerror = () => {
  console.log('Error occurred while loading script');
};
document.body.appendChild(script);
````

### Bookmarklify

````shell
node src/convertToBookmarklet.js
````

### Output 
````js
javascript:(function(){const script = document.createElement('script'); script.src = 'any.js'; script.async = true; script.type = 'module'; script.onload = () => { console.log('Script loaded successfuly'); }; script.onerror = () => { console.log('Error occurred while loading script'); }; document.body.appendChild(script);})();
````
