# fmenu

## Props

Property|Values|Default|Description
---|---|---|---
data-fmenu|-|-|initialize the fmenu
data-fmenu-dir|rtl, ltr|ltr|The direction of the fmenu
data-fmenu-fixed|boolean|false|make the fmenu position fixed on screen
data-fmenu-allMobile|boolean|false|make the fmenu style like mobile all time
data-fmenu-logo|["string"]logo url|-|put logo inside the fmenu
data-fmenu-search|["string"]search url|-|add search feature to the fmenu
data-fmenu-position|bottom, top|top|position of the fmenu
data-fmenu-vertical|boolean|false|make the fmenu vertical
data-fmenu-theme|london, paris|-|change fmenu theme
data-fmenu-login|["string"]login page url|-|add login form to the fmenu
data-fmenu-social|[object]|-|add social media icons
data-fmenu-json|["string"]json url|-|get fmenu data from json file

## How it works
Here is a simple Fmenu setup:

```html
<nav data-fmenu>
  <ul>
    <li><a href="">Item1</a></li>
    <li><a href="">Item2</a></li>
    <li><a href="">Item3</a></li>
    <li><a href="">Item4</a></li>
    <li><a href="">Item5</a></li>
  </ul>
</nav>
  ```

### Features
Use Fmenu advanced features

```html
<nav data-fmenu data-fmenu-dir="rtl" data-fmenu-fixed="true"
 data-fmenu-logo="https://git-scm.com/images/logos/downloads/Git-Logo-White.png"
  data-fmenu-search="http://google.com" data-fmenu-vertical="true"
   data-fmenu-theme="paris" data-fmenu-login="http://men3m.com"
    data-fmenu-social='{"facebook": "http://fb.me/hello", "instagram":
     "http://instagram.com/hello", "twitter": "http://twitter.com/hello"}'
      data-fmenu-position="top">

  <ul>
    <li><a href="">Item1</a></li>
    <li><a href="">Item2</a></li>
    <li><a href="">Item3</a></li>
    <li><a href="">Item4</a></li>
    <li>
      <a href="">Item5</a>

      <ul>
        <li><a href="">Sub Item1</a></li>
        <li><a href="">Sub Item2</a></li>
        <li><a href="">Sub Item3</a></li>
        <li><a href="">Sub Item4</a></li>
        <li><a href="">Sub Item5</a></li>
      </ul>

    </li>
  </ul>
</nav>
  ```
