let form = document.querySelector('form');

form.addEventListener('submit', form_submit);

function form_submit(event) {
  if (
    !isNaN(form.firstname.value) &&
    !isNaN(form.lastname.value) &&
    !isNaN(form.email.value) &&
    !isNaN(form.message.value) &&
    !isNaN(form.option.value)
  )
    console.warn('You must enter some data to submit this form');
  else {
    console.group('========= Form Submission =========');

    if (!isNaN(form.firstname.value)) console.log('First name: no submission');
    else console.log('First name: ' + form.firstname.value);

    if (!isNaN(form.lastname.value)) console.log('Last name: no submission');
    else console.log('Last name: ' + form.lastname.value);

    if (!isNaN(form.email.value)) console.log('Email: no submission');
    else console.log('Email: ' + form.email.value);

    if (!isNaN(form.message.value)) console.log('Message: no submission');
    else console.log('Message: ' + form.message.value);

    if (!isNaN(form.option.value)) {
      console.log('Feedback: no submission');
    } else {
      if (form.option.checked) {
        console.log('Feedback: ' + form.option.value);
      } else if (!form.option.checked) {
        console.log('Feedback: ' + form.option.value);
      }
    }

    console.groupEnd();
  }
  event.preventDefault();
}
