### Global Scope:

- [ ] enhance the typography
- [ ] think about separating the patient and doctor pages (maybe allowedTo component or layout)
- [ ] unify the submit and reset buttons for the whole forms
- [ ] smooth transition between tabs
- [ ] book appointment btn in the doctor profile
- [ ] separate the time slot components in its separate folder
- [ ] use this time picker from shadcn/expansions instead https://shadcnui-expansions.typeart.cc/docs/datetime-picker

### Update Availability:

- [ ] make sure the start time is less than the end time (to handle the validation properly)

### Appointment:

- [x] appointments page
- [ ] book appointment page (render the day and the time slots from the BE (migrate to know))
- [ ] appointment details page

### Bugs:

- [ ] when the user logs in and then goes to the dashboard and then refresh the page they goes to the home page (the href is / after logging in not dashboard as it should be)
