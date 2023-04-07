// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {
  localStorage.setItem("hours",JSON.stringify({8:"test"}))
  var timeStates = {
    past: (el) => { el.classList.add('past'); el.classList.remove('present'); el.classList.remove('future'); },
    present: (el) => { el.classList.add('present'); el.classList.remove('past'); el.classList.remove('future'); },
    future: (el) => { el.classList.add('future'); el.classList.remove('present'); el.classList.remove('past'); }
  }
  function handleSave(event) {
    function getCurr() {
      let hours = localStorage.getItem("hours")
      console.log(hours)
      return hours
    }
    function setCurr(newitem) {
      console.log(newitem)
      let tub = JSON.parse(getCurr())
      tub.parseInt(newitem[0]) = newitem[1]
      localStorage.setItem("hours", JSON.stringify(tub))
    }

    hr = event.target.parentNode.id.split('-')[1]
    txt = event.currentTarget.parentNode.children[1].textContent
    console.log([hr,txt])
    setCurr([hr,txt])
  }


  var svBtn = $(".saveBtn")
  svBtn.on("click", handleSave)

  var curTime = dayjs().format("MMM, DD, YYYY: hh:mm:ss");
  console.log(curTime)

  $(".time-block").each(function(){
    let hrTime = dayjs().hour()
    let appTime = parseInt($(this).attr("id").split("-")[1])
    if (appTime < hrTime) {
      $(this).addClass("past")
    } else if (hrTime == appTime) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    }
  })


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


