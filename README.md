# supervisorApp



Steps to run the application:

Step 1: Install NPM and Git.
Step 2: Open 2 instances of command prompt/Gitbash on the location where zip is downloaded and extracted,
Step 3: In one instance run command "npm install -g json-server" and then run "json-server --watch workers.json"
Step 4: In other instance run command "npm start".
Step 5: Open chrome browser and run application on localhost:8000



#App Description

There is a company named as “Cotton-o-Mill” which has some workers and has only one supervisor.
You got an order from the company to build a web application for its supervisor.
Using application, Supervisor should be able to:

- View the list of all workers.
- Ring the bell and the first available worker should be shown in browser alert box.
- Select a worker from the list and assign a task to him/her, the task should have a name and the time for execution.

Workers are idle, they take only the given amount of time, neither greater nor lesser than that.


Technical aspects
- Model-View-Controller design pattern must be used.
- The requirements and use cases must be strictly followed, but the UI/UX can be freely designed.
- It must be a Single Page Application and can be targeted for mobile and desktop browser, so responsiveness should be taken into consideration. Application can be built targeting only one browser.
- Usage of AngularJS 1.x, HTML5, CSS and “Javascript or Typescript” is must.
- It is up to the candidate whether to use package manager or to simply use the script tag in index.html for js files. It is not part of evaluation criteria.


Worker Record
- name: Name of worker
- mobileNumber: Contact number of worker
- taskAssigned: Name of the task assigned to worker
- taskDuration: Exact time (in seconds) in which the task must be completed


Worker UI
- Each item’s UI in the worker list must be created as angular directive.
- Supervisor should be able to see the task assigned to a worker. In case of no task assigned, “Available” should be shown for the worker.
- Worker list should be live, so when the task is completed after the given duration then worker UI should be updated with “Available” status.


Ability to select a worker in the list
Once Supervisor clicks on a worker then the worker should get selected, and should be shown with some different background.


Ability to ring the bell
Supervisor may not want to go through the list and just want to ring the bell to know the first available worker. A button can be used to ring the bell, once Supervisor rings the bell then first available worker detail appear in the browser alert box.
This functionality should be asynchronous, Supervisor should be able to use the application until the first available worker appear in the alert box.


Ability to assign a task to worker
Once an available worker is selected in the list, the Supervisor may want to assign a task to him/her. Task must have a name and the duration to execute the task. The button to assign the task should be disabled until the Task name is entered.