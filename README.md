# React-Not-Paid

### Having trouble with your clients not paying for your work? React-Not-Paid will get you sorted!

This React utility will add opacity to a site's body tag and decrease it every day until the site completely fades away. Set a due date and customize the grace period you offer until the client's website fully disappears.

### Usage Instructions

Import this package by putting `import notPaid from "react-not-paid"` in your App.js. <br/>

Then, in your App.js's `componentDidMount` lifecycle method, call the notPaid function. <br/>

The first paramater is `dueDate`, which is any common date encoding (e.g. MM-DD-YYYY, YYYY-MM-DD) as a String. <br/>

The second parameter is `gracePeriod`, which is the number of days it will take your client's site to fully disappear; this is an Integer value. <br/>

**NOTE: this may exhibit differing behavior across timezones, as it does not yet account for UTC offsets. This functionality is forthcoming.**

#### Example Usage

```
  componentDidMount = () => {
    // notPaid(dueDate, gracePeriod)
    notPaid("2019-02-14", 14);
  };
```

### Author

Created by Rahul Desai (@rd825 on Github, [rdesai01](https://twitter.com/RDesai01) on Twitter) <br/>
Inspired by Ciprian's [vanilla JS version](https://github.com/kleampa/not-paid) <br/>
