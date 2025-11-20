/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// Function responsible for rendering the student cards to the page
function showPage(list, page) {
  const itemsPerPage = 9;
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;
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
      studentList.insertAdjacentHTML('beforeend', html);
    }
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
