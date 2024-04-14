document.addEventListener('DOMContentLoaded', function () {
  // Function to add a task to the active tasks table
  function addTaskToActiveTable(taskName, assignedTo, amountEarned) {
    const activeTasksTable = document.querySelector('#active-tasks-table');
    
    // Create a new row for the task
    const newRow = document.createElement('tr');
    
    // Create cells for task name, assigned to, and amount earned
    newRow.innerHTML = `
      <td>${taskName}</td>
      <td>${assignedTo}</td>
      <td>R${amountEarned.toFixed(2)}</td>
      <td>
        <button class="btn btn-success btn-sm mr-2" onclick="markTaskAsComplete(this)">Complete</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">Delete</button>
        <button class="btn btn-secondary btn-sm" onclick="moveTaskToNextWeek(this)">Move to Next Week</button>
      </td>`;
    
    // Append the new row to the active tasks table
    activeTasksTable.appendChild(newRow);
  }

  // Handle form submission and add a new task to the active tasks table
  const addTaskForm = document.querySelector('#addTaskForm');
  if (addTaskForm) {
    addTaskForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get task data from form inputs
      const taskName = document.querySelector('#taskNameInput').value;
      const assignedTo = document.querySelector('#assignedToInput').value;
      const amountEarned = parseFloat(document.querySelector('#amountEarnedInput').value);
      
      // Add the task to the active tasks table
      addTaskToActiveTable(taskName, assignedTo, amountEarned);
      
      // Reset the form and close the modal
      addTaskForm.reset();
      $('#addTaskModal').modal('hide');
    });
  }
  
  // Add Member modal handling
  const addMemberButton = document.querySelector('#addMemberButton');
  const addMemberModal = document.querySelector('#addMemberModal');
  if (addMemberButton && addMemberModal) {
    addMemberButton.addEventListener('click', function () {
      $(addMemberModal).modal('show');
    });
  }

  // You can add similar event handling for other elements, e.g., `viewCalendarButton` and `calendarModal`, and any other event listeners you need.
});
