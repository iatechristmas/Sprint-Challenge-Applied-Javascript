// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')

const newTab = (attrs) => {

    const tab = document.createElement('div')

    tab.classList.add('tab')

    tab.textContent = attrs

    return tab
}

const getTopic = () => {
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then(response => {
            // console.log(response.data)
            response.data.topics.forEach(element => {
                // console.log(element)
                const thisTab = newTab(element)
                topics.append(thisTab)
            });
        })
    // .catch(error => {
    //     console.log('Get user failed')
    // })
}

getTopic()
