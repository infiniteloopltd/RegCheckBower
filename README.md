# RegCheckBower
A bower package as a simple wrapper for the Reg Check API, to use this library, run 

```
bower install CarRegistrationAPI
```

Then include the scripts;

```
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/Car Registration API/api.js"></script>
````

Finally call the API as follows

```javascript
  lookup("Check","**your username**","**UK License Plate**",function(data){
    console.log(data);
  });
```

You will need a username from [Car Registration API](https://www.regcheck.org.uk) to get started.

