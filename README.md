# React-Not-Paid

### Having trouble with your clients not paying for your work? React-Not-Paid will get you sorted!

This React utility will add opacity to a site's body tag and decrease it every day until the site completely fades away. Set a due date and customize the grace period you offer until the client's website fully disappears. It should now work reliably across time-zones, because it converts all dates to UTC and makes calculations thereafter.

### Usage Instructions

Import this package by putting `import notPaid from "react-not-paid"` in your App.js. <br/>

Then, in your App.js's `componentDidMount` lifecycle method, call the notPaid function. <br/>

The first paramater is `dueDate`, which is an ISO date encoding (i.e. "YYYY-MM-DD") as a String. <br/>

The second parameter is `gracePeriod`, which is the number of days (e.g. 7, 14) it will take your client's site to fully disappear; this is an Integer value. <br/>

#### Example Usage

###### notPaid(dueDate, gracePeriod)

```
  componentDidMount = () => {
    notPaid("2019-02-26", 14);
  };
```

### Author

Created by Rahul Desai ([@rd825](https://github.com/rd825) on Github, [@RDesai01](https://twitter.com/RDesai01) on Twitter) <br/>
Inspired by Dragoi Ciprian's [vanilla JS version](https://github.com/kleampa/not-paid) <br/>
