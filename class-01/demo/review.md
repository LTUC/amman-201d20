# 102 review

## HTML

html is for structring the page
```html
<!-- version 5 of html -->
<!DOCTYPE html>
<html>
  <head>
      <title>
          review
      </title>
  </head>
  <body>
      <header>
          <h1>
              review of 102
          </h1>
          <nav>
              <ul>
                  <li class="items">
                      <a href="#">Home page</a>
                  </li>
                  <li class="items">
                      <a href="#">About</a>
                  </li>
              </ul>
          </nav>
      </header>
      <main>
          <p id="main-content">
              some text
          </p>

          <img src="" alt=""/>
          
      </main>
      <footer>
          copyrights
      </footer>

  </body>

</html>

```

## CSS 

styling the page

- Inline:
```html
<p style="color:red;">some text</p>
```

- Internal style:
In the same html file


```html
<!-- version 5 of html -->
<!DOCTYPE html>
<html>
  <head>
      <title>
          review
      </title>
      <style>
          p{
             background-color:grey; 
          }



      </style>
  </head>

</html>

```


- External:
create a file for CSS
```html
<!DOCTYPE html>
<html>
  <head>
      <title>
          review
      </title>
      <link rel="stylesheet" href="style.css">

  </head>

</html>
```

how to select tags to style:

```css

    p{
        color:red;
    }

/* id is only for 1 element */
    #main-content{
        color:red;
    }

/* class is for more than 1 elemnt */
   .items{
       background-color:rgb(250,0,0);
   }


```



## javascript

interaction and make it more dynamic:

```html
<script>
var userName='ahmad';
</script>
```

or make a file:

```html
<script src="app.js">

</script>
```