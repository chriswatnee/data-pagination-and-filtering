/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const studentsPerPage = 9;

// Function responsible for rendering the student cards to the page
function showPage(list, page) {
  const startIndex = (page * studentsPerPage) - studentsPerPage;
  const endIndex = page * studentsPerPage;
  const studentList = document.querySelector(".student-list");
  // Remove any students that might have previously been displayed
  studentList.innerHTML = "";
  // Loop over the list of students
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      const student = list[i];
      // Create student item html
      const html = `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
            <h3>${student.name.first} ${student.name.last}</h3>
            <span class="email">${student.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${student.registered.date}</span>
          </div>
        </li>
      `;
      // Insert the html into the .student-list ul
      studentList.insertAdjacentHTML("beforeend", html);
    }
  }
}

// Function responsible for rendering the pagination buttons to the page
function addPagination(list) {
  const numberOfButtons = Math.ceil(list.length / studentsPerPage);
  const linkList = document.querySelector(".link-list");
  // Remove any buttons that might have previously been displayed
  linkList.innerHTML = "";
  // Loop over the number of buttons
  for (let i = 1; i <= numberOfButtons; i++) {
      // Create button html
    const html = `
      <li>
        <button type="button">${i}</button>
      </li>
    `;
    // Insert the html into the .link-list ul
    linkList.insertAdjacentHTML("beforeend", html);
  }
  // Select the first button and give it a class name of active
  linkList.querySelector("button").className = "active";
  // Event listener to listen for clicks on the .link-list ul
  linkList.addEventListener("click", (event) => {
    // Conditional checks if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
      const clickedButton = event.target;
      const activeButton = linkList.querySelector(".active");
      // Remove the active class from any other button
      activeButton.classList.remove("active");
      // Add the active class to the button that was just clicked
      clickedButton.classList.add("active");
      // Call the showPage function and pass it the list and page number
      showPage(data, clickedButton.textContent);
    }
  });
}

// Call functions
