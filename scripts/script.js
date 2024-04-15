document.addEventListener('DOMContentLoaded', function () {
  // Get buttons by their IDs
  const addTaskButton = document.getElementById('addTaskButton');
  const addMemberButton = document.getElementById('addMemberButton');
  const viewCalendarButton = document.getElementById('viewCalendarButton');

  // Initialize modals using Bootstrap
  const addTaskModal = new bootstrap.Modal(document.getElementById('addTaskModal'));
  const addMemberModal = new bootstrap.Modal(document.getElementById('addMemberModal'));
  const viewCalendarModal = new bootstrap.Modal(document.getElementById('viewCalendarModal'));

  // Event listener for Add Task button
  addTaskButton.addEventListener('click', function () {
      addTaskModal.show();
  });

  // Event listener for Add Member button
  addMemberButton.addEventListener('click', function () {
      addMemberModal.show();
  });

  // Event listener for View Calendar button
  viewCalendarButton.addEventListener('click', function () {
      viewCalendarModal.show();
  });

  // Handling form submissions
  const addTaskForm = document.getElementById('add-task-form');
  const addMemberForm = document.getElementById('add-member-form');

  // Handle Add Task form submission
  addTaskForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form from submitting the usual way
      // Retrieve form data
      const taskName = document.getElementById('task-name').value;
      const taskAssignee = document.getElementById('task-assignee').value;
      const taskAmount = document.getElementById('task-amount').value;
      
      // TODO: Add task to the list and refresh the tasks table
      // Perform any necessary actions such as updating the active tasks table
      addTaskModal.hide(); // Close the modal
  });

  // Handle Add Member form submission
  addMemberForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form from submitting the usual way
      // Retrieve form data
      const memberName = document.getElementById('member-name').value;
      // TODO: Add member to the list and refresh the members list
      // Perform any necessary actions such as updating the members list
      addMemberModal.hide(); // Close the modal
  });
});
