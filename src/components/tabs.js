import axios from "axios";
const Tabs = (topics) => {
  const topicWrap = document.createElement("div")
  topicWrap.classList.add("topics")

  function makeTabs(topic) {
    const topicTab = document.createElement("div")
    topicTab.classList.add("tab");
    topicTab.textContent = topic;
    return topicTab
  }

  topics.forEach(topicObj => {
    const tab =makeTabs(topicObj);

    topicWrap.appendChild(tab);

    return topicWrap
  })


  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  return topicWrap
}

const tabsAppender = (selector) => {
  axios.get(`http://localhost:5001/api/topics`)
  .then(res => {
    const finalTabs = (Tabs(res.data.topics));
    document.querySelector(selector).appendChild(finalTabs);
  })
  .catch(err => {
    console.error(err);
  })

  
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
