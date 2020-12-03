describe('ToDoApp', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/');
  });

  afterEach(() => {
    cy.window().then((win) => {
      win.document.activeElement.blur();
    });
  });

  //TABS
  context('Tabs', function() {
    it('click tabs in nav - Home', () => {
      cy.visit('http://localhost:3000/date');
      cy.get(':nth-child(1) > .makeStyles-navlink-46').click();
      cy.visit('http://localhost:3000');
    });
    it('click tabs in nav - Calendar', () => {
      cy.get(':nth-child(2) > .makeStyles-navlink-46').click();
      cy.visit('http://localhost:3000/date');
    });
    it('click tabs in nav - Settings', () => {
      cy.get(':nth-child(3) > .makeStyles-navlink-46').click();
      cy.visit('http://localhost:3000/settings');
    });
  });

  //TASKS
  context('AddButtonDialog', function() {
    //button add and required input text
    it('required input text', function() {
      cy.get('.MuiFab-primary').click();
      cy.get('.btn').click();
      cy.get('[type="text"]').then(($input) => {
        expect($input[0].validationMessage).to.eq('Wypełnij to pole.')
      })
    });

    //clear text input
    it('should clear text input field when an item is added', function() {
      cy.get('.MuiFab-primary').click();
      cy.get('.task-input').type('todoOne{enter}');
      cy.get('.task-input').should('have.text', '');
    });

    //close button
    it('close button in dialog', function() {
      cy.get('.MuiFab-primary').click();
      cy.get('.MuiButton-label').click();
    });

    //open calendar
    it('open calendar in dialog', function() {
      cy.get('.MuiFab-primary').click();
      cy.get('.datepicker-input').click();
      cy.get('.calendarContainer').should('be.visible');
    });
  });

  //NEW TODO
  context('New Todo', function() {
    //add task
    it('click addButton and add task', () => {
      cy.get('.MuiFab-primary').click();
      cy.get('.task-input').type('todoOne');
      cy.get('.btn').click();
      cy.get('.list-item').should('have.length', 1);
    });

    it('adds items', function() {
      cy.get('.MuiFab-primary').click();
      cy.get('.task-input').type('todoOne');
      cy.get('.btn').click();
      cy.get('.task-input').type('todoTwo');
      cy.get('.btn').click();
      cy.get('.task-input').type('todoThree');
      cy.get('.btn').click();
      cy.get('.list-item').should('have.length', 3);
    });
  });

  //CHECK AND UNCHECK TASK
  context('Check and unchecked todo', () => {
    //checked task
    it('checked task', () => {
      cy.get('.MuiFab-primary').click();
      cy.get('.task-input').type('todoOne');
      cy.get('.btn').click();
      cy.get('.list-item').should('have.length', 1);
      cy.get('.MuiButton-label').click();
      cy.get('.PrivateSwitchBase-input-222')
        .check()
        .should('be.checked');
    });

    //unchecked task
    it('unchecked task', () => {
      cy.get('.MuiFab-primary').click();
      cy.get('.task-input').type('todoOne');
      cy.get('.btn').click();
      cy.get('.list-item').should('have.length', 1);
      cy.get('.MuiButton-label').click();
      cy.get('.PrivateSwitchBase-input-222').click();
      cy.get('.PrivateSwitchBase-input-222')
        .uncheck()
        .should('not.be.checked');
    });
  });

  //EDIT TASK
  context('Editing task', () => {
    //open edit dialog
    it('click on icon pencil and open edit dialog', () => {
      cy.get('.MuiFab-primary').click();
      cy.get('.task-input').type('todoOne');
      cy.get('.btn').click();
      cy.get('.list-item').should('have.length', 1);
      cy.get('.MuiButton-label').click();
      cy.get('.btn-edit').click();
      cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible');
    });

    //edit task and save this
    it('edit task and save this', () => {
      cy.get('.MuiFab-primary').click();
      cy.get('.task-input').type('todoOne');
      cy.get('.btn').click();
      cy.get('.list-item').should('have.length', 1);
      cy.get('.MuiButton-label').click();
      cy.get('.btn-edit').click();
      cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible');
      cy.get('.task-input').type('Edit');
      cy.get('.list-item').should('contain', 'todoOneEdit');
    });

    //cancel edit
    it('should cancel edits on escape', () => {
      cy.get('.MuiFab-primary').click();
      cy.get('.task-input').type('todoOne');
      cy.get('.btn').click();
      cy.get('.list-item').should('have.length', 1);
      cy.get('.MuiButton-label').click();
      cy.get('.btn-edit').click();
      cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible');
      cy.get('.MuiButton-label').click();
      cy.get('.list-item').should('contain', 'todoOne');
    });
  });

  //DELETE TASK
  context('Delete task', () => {
    //delete task
    it('click on icon trash and delete task', () => {
      cy.get('.MuiFab-primary').click();
      cy.get('.task-input').type('todoOne');
      cy.get('.btn').click();
      cy.get('.list-item').should('have.length', 1);
      cy.get('.MuiButton-label').click();
      cy.get('.btn-delete').click();
      cy.get('.list-item').should('have.length', 0);
      cy.get('.no-tasks');
    });
  });

  //NO TASKS
  context('No tasks', () => {
    //no tasks
    it('no tasks', () => {
      cy.get('.list-item').should('not.exist');
      cy.get('.no-tasks').should('exist');
    });
  });

  //CALENDAR
  context('Calendar test', () => {
    //click on day and show tasks on this day
    it('show task on today', () => {
      cy.get('.MuiFab-primary').click();
      cy.get('.task-input').type('todoOne');
      cy.get('.datepicker-input').click();
      cy.get('.calendarContainer').should('be.visible');
      cy.get('.selected > button').click();
      cy.get('.btn').click();
      cy.get('.MuiButton-label').click();
      cy.get('.list-item').should('have.length', 1);
      cy.get(':nth-child(2) > .makeStyles-navlink-46').click();
      cy.visit('http://localhost:3000/date');
      cy.get('.selected > button').click();
      cy.get('.list-item').should('have.length', 1);
    });

    //check two days with tasks
    it('check two days with tasks', () => {
      cy.get('.MuiFab-primary').click();
      cy.get('.task-input').type('todoOne');
      cy.get('.datepicker-input').click();
      cy.get('.calendarContainer').should('be.visible');
      cy.get('.selected > button').click();
      cy.get('.btn').click();
      cy.get('.task-input').type('todoTwo');
      cy.get('.datepicker-input').click();
      cy.get('.calendarContainer').should('be.visible');
      cy.get(':nth-child(22) > button').click();
      cy.get('.btn').click();
      cy.get('.MuiButton-label').click();
      cy.get('.list-item').should('have.length', 2);
      cy.get(':nth-child(2) > .makeStyles-navlink-46').click();
      cy.visit('http://localhost:3000/date');
      cy.get('.selected > button').click();
      cy.get('.list-item').should('have.length', 1);
      cy.get(':nth-child(22) > button').click();
      cy.get('.list-item').should('have.length', 1);
    });

    //show ranges
    it('show ranges', () => {
      cy.get('.MuiFab-primary').click();
      cy.get('.task-input').type('todoOne');
      cy.get('.datepicker-input').click();
      cy.get('.calendarContainer').should('be.visible');
      cy.get('.selected > button').click();
      cy.get('.btn').click();
      cy.get('.MuiButton-label').click();
      cy.get('.list-item').should('have.length', 1);
      cy.get(':nth-child(2) > .makeStyles-navlink-46').click();
      cy.visit('http://localhost:3000/date');
      cy.get('.selected > button').click();
      cy.get('.highLightDot').should('exist');
    });
  });

  //SETTINGS
  context('Settings', () => {
    beforeEach(function() {
      cy.visit('http://localhost:3000/settings');
    });

    //check black theme
    it('check black theme', () => {
      cy.get('.PrivateSwitchBase-input-262')
        .check()
        .should('checked');
      cy.reload();
      cy.get('.PrivateSwitchBase-input-262').should('checked');
    });

    //check light theme
    it('check light theme', () => {
      cy.get('.PrivateSwitchBase-input-262')
        .check()
        .should('checked');
      cy.get('.PrivateSwitchBase-input-262')
        .uncheck()
        .should('not.be.checked');
      cy.reload();
      cy.get('.PrivateSwitchBase-input-262').should('not.be.checked');
    });

    //check background image
    it('check backgroundImage', () => {
      cy.get('.makeStyles-containerIcon-171 > .MuiSvgIcon-root').click();
      cy.get('.MuiDialog-container').should('be.visible');
      cy.get('[src="/static/media/img3.46733691.jpg"]').click();
      cy.reload();
      cy.get('.main > .MuiPaper-root').should('have.css', 'background-image');
    });

    //check languages
    it('check languages', () => {
      cy.get('select')
        .select('Spanish')
        .should('have.value', 'es');
      cy.reload();
      cy.get('.MuiNativeSelect-root');
      cy.get('option:first')
        .should('be.selected')
        .and('have.value', 'es');
    });
  });

  //ANOTHER
  context('Date is equal today', () => {
    //date is equal today
    it('date is equal today', () => {
      const todaysDate = Cypress.moment().format('DD.MM.YYYY');
      cy.get('.makeStyles-text-136 > p').should('contain', todaysDate);
    });
  });
});
